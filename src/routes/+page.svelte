<script lang="ts">
	import { onMount } from 'svelte';
	import logoFull from '$lib/assets/brand/logos/logo-full-with-slogan.svg';
	import booMain from '$lib/assets/brand/characters/boo-main.svg';
	import wooMain from '$lib/assets/brand/characters/woo-main.svg';
	import heroSquiggleBlue from '$lib/assets/brand/squiggles/ring-dot-blue.svg';
	import heroSquiggleYellow from '$lib/assets/brand/squiggles/leaf-spark-yellow.svg';
	import heroSquigglePurple from '$lib/assets/brand/squiggles/spiral-purple.svg';
	import heroSquiggleGreen from '$lib/assets/brand/squiggles/wavy-lines-green.svg';
	import worldMap from '$lib/assets/homepage/world-map.svg';
	import storyColombia from '$lib/assets/photos/locations/colombia.jpg';
	import storySouthSudan from '$lib/assets/photos/locations/south-sudan.png';
	import sdg2Icon from '$lib/assets/sdgs/E-WEB-Goal-02.png';
	import sdg3Icon from '$lib/assets/sdgs/E-WEB-Goal-03.png';
	import sdg17Icon from '$lib/assets/sdgs/E-WEB-Goal-17.png';
	import airbusLogo from '$lib/assets/partners-logos/airbus-logo.svg';
	import airbusProtospaceLogo from '$lib/assets/partners-logos/airbus-protospace-logo.svg';
	import medairLogo from '$lib/assets/partners-logos/medair-logo.svg';
	import scpLogo from '$lib/assets/partners-logos/scp-logo.svg';
	import impactStart from '$lib/assets/homepage/impact-loop/start.svg';
	import impactBuild from '$lib/assets/homepage/impact-loop/build.svg';
	import impactWeigh from '$lib/assets/homepage/impact-loop/weigh.svg';
	import impactLearn from '$lib/assets/homepage/impact-loop/learn.svg';
	import impactShare from '$lib/assets/homepage/impact-loop/share.svg';
	import impactImprove from '$lib/assets/homepage/impact-loop/improve.svg';

	type ImpactSide = 'top' | 'right' | 'bottom' | 'left';
	type ImpactStep = {
		number: string;
		title: string;
		x: number;
		y: number;
		tilt: number;
		file: string;
		text: string;
	};
	type ImpactConnection = {
		from: string;
		fromSide: ImpactSide;
		to: string;
		toSide: ImpactSide;
		className?: string;
	};

	const kpis = [
		{ value: '60', label: 'Infants Weighed', color: 'blue' },
		{ value: '42', label: 'Malnourished Detected', color: 'red' },
		{ value: '5g', label: 'of Precision', color: 'green' },
		{ value: '20', label: 'kg of Capacity', color: 'yellow' },
		{ value: '100%', label: 'Open Source', color: 'purple' }
	];

	const impactCardSize = { width: 23, height: 45 };

	const impactSteps: ImpactStep[] = [
		{
			number: '1',
			title: 'Start',
			x: 0,
			y: 35,
			tilt: -2,
			file: impactStart,
			text: 'Every Wooby begins with a real need in the field.'
		},
		{
			number: '2',
			title: 'Build',
			x: 28,
			y: 2,
			tilt: 1.5,
			file: impactBuild,
			text: 'Local teams bring Wooby to life with open-source designs.'
		},
		{
			number: '3',
			title: 'Weigh',
			x: 55,
			y: 5,
			tilt: -1,
			file: impactWeigh,
			text: 'Health workers measure babies with care and precision.'
		},
		{
			number: '4',
			title: 'Learn',
			x: 81,
			y: 39,
			tilt: 2,
			file: impactLearn,
			text: 'Every field use teaches us what works and what can be better.'
		},
		{
			number: '5',
			title: 'Share',
			x: 55,
			y: 55,
			tilt: -1.8,
			file: impactShare,
			text: 'Improved versions are published open-source for everyone.'
		},
		{
			number: '6',
			title: 'Improve',
			x: 30,
			y: 55,
			tilt: 1,
			file: impactImprove,
			text: 'The Wooby community adapts, tests, and makes the next version stronger.'
		}
	];

	const impactConnections: ImpactConnection[] = [
		{ from: '1', fromSide: 'top', to: '2', toSide: 'left', className: 'entry-path' },
		{ from: '2', fromSide: 'right', to: '3', toSide: 'left' },
		{ from: '3', fromSide: 'right', to: '4', toSide: 'top' },
		{ from: '4', fromSide: 'bottom', to: '5', toSide: 'right' },
		{ from: '5', fromSide: 'left', to: '6', toSide: 'right' },
		{ from: '6', fromSide: 'left', to: '2', toSide: 'bottom', className: 'return-path' }
	];

	const impactStepByNumber = new Map(impactSteps.map((step) => [step.number, step]));

	function impactCardStyle(step: ImpactStep) {
		return `left:${step.x}%;top:${step.y}%;--card-tilt:${step.tilt}deg;`;
	}

	function impactAnchor(step: ImpactStep, side: ImpactSide) {
		const { width, height } = impactCardSize;

		if (side === 'top') return { x: step.x + width / 2, y: step.y };
		if (side === 'right') return { x: step.x + width, y: step.y + height / 2 };
		if (side === 'bottom') return { x: step.x + width / 2, y: step.y + height };
		return { x: step.x, y: step.y + height / 2 };
	}

	function impactSideVector(side: ImpactSide) {
		if (side === 'top') return { x: 0, y: -1 };
		if (side === 'right') return { x: 1, y: 0 };
		if (side === 'bottom') return { x: 0, y: 1 };
		return { x: -1, y: 0 };
	}

	function impactConnector(connection: ImpactConnection) {
		const fromStep = impactStepByNumber.get(connection.from);
		const toStep = impactStepByNumber.get(connection.to);
		if (!fromStep || !toStep) return { ...connection, d: '', headX: 0, headY: 0, angle: 0 };

		const start = impactAnchor(fromStep, connection.fromSide);
		const end = impactAnchor(toStep, connection.toSide);
		const startVector = impactSideVector(connection.fromSide);
		const endVector = impactSideVector(connection.toSide);
		const distance = Math.hypot(end.x - start.x, end.y - start.y);
		const curve = Math.min(22, Math.max(10, distance * 0.42));
		const controlStart = {
			x: start.x + startVector.x * curve,
			y: start.y + startVector.y * curve
		};
		const controlEnd = {
			x: end.x + endVector.x * curve,
			y: end.y + endVector.y * curve
		};
		const headOffset = 1.2;
		const headX = end.x + endVector.x * headOffset;
		const headY = end.y + endVector.y * headOffset;
		const angle = Math.atan2(end.y - controlEnd.y, end.x - controlEnd.x) * (180 / Math.PI);

		return {
			...connection,
			d: `M${start.x} ${start.y} C${controlStart.x} ${controlStart.y} ${controlEnd.x} ${controlEnd.y} ${end.x} ${end.y}`,
			headX,
			headY,
			angle
		};
	}

	const impactPaths = impactConnections.map(impactConnector);

	const pins = [
		{
			id: 'france',
			x: '43%',
			y: '30%',
			tooltipX: '50%',
			tooltipY: '10%',
			type: 'volunteering',
			label: 'France — Toulouse',
			title: '🇫🇷 France — Toulouse',
			body: 'Airbus ProtoSpace\nVolunteering team hub. Wooby is designed, prototyped and built here.'
		},
		{
			id: 'switzerland',
			x: '46%',
			y: '32%',
			tooltipX: '55%',
			tooltipY: '15%',
			type: 'volunteering',
			label: 'Lausanne — Switzerland',
			title: '🇨🇭 Lausanne — Switzerland',
			body: 'MEDAIR team hub\nOur first field testing and deployment partner, supporting Wooby in South Sudan.'
		},
		{
			id: 'colombia-vol',
			x: '29%',
			y: '60%',
			tooltipX: '16%',
			tooltipY: '44%',
			type: 'volunteering',
			label: 'Colombia — Volunteering',
			title: '🇨🇴 Colombia — Volunteering',
			body: 'Sociedad Colombiana de Pediatría\nLocal medical team supporting deployment and field validation.'
		},
		{
			id: 'colombia-dep',
			x: '31%',
			y: '66%',
			tooltipX: '15%',
			tooltipY: '36%',
			type: 'deployment',
			label: 'Colombia — Barranquilla',
			title: '🇨🇴 Colombia — Barranquilla',
			body: 'Field Deployment\n18 infants assessed in clinical settings. Clinical-grade accuracy confirmed.'
		},
		{
			id: 'sudan',
			x: '50%',
			y: '54%',
			tooltipX: '50%',
			tooltipY: '30%',
			type: 'deployment',
			label: 'South Sudan — Juba and Pibor',
			title: '🇸🇸 South Sudan — Juba & Pibor',
			body: 'Field Deployment\n42 severely malnourished infants monitored with MEDAIR over one month.'
		}
	];

	const stories = [
		{
			country: 'South Sudan',
			image: storySouthSudan,
			source: 'Field Health Worker, MEDAIR South Sudan',
			stat: '42 infants identified in 1 month',
			tone: 'ss'
		},
		{
			country: 'Colombia',
			image: storyColombia,
			source: 'Pediatric Nurse, Sociedad Colombiana de Pediatría',
			stat: 'Clinical-grade accuracy confirmed',
			tone: 'co'
		}
	];

	const goals = [
		{
			id: '2',
			icon: sdg2Icon,
			title: 'SDG 2 — Zero Hunger',
			text: 'Wooby tackles malnutrition at its root by enabling early detection of underweight and wasting in infants, helping communities act before it becomes irreversible.',
			source:
				'148 million children had stunted growth in 2022 (UN). Wooby is built to change that number.',
			color: '#DDA63A'
		},
		{
			id: '3',
			icon: sdg3Icon,
			title: 'SDG 3 — Good Health & Well-Being',
			text: 'By putting clinical-grade diagnostics in the hands of community health workers, Wooby extends quality healthcare beyond hospital walls to the most remote places.',
			source:
				'UNICEF and WHO confirm communities can manage severe malnutrition with the right tools. Wooby is that tool.',
			color: '#4C9F38'
		},
		{
			id: '17',
			icon: sdg17Icon,
			title: 'SDG 17 — Partnerships for the Goals',
			text: 'Wooby exists because of cross-sector collaboration: a multinational aerospace company, international NGOs, pediatric societies, and a global open-source community.',
			source:
				'Airbus Humanity Lab, MEDAIR, and the Sociedad Colombiana de Pediatría: proof that impact happens at the intersection of sectors.',
			color: '#19486A'
		}
	];

	const maxGalleryPhotos = 8;
	const galleryPhotoModules = import.meta.glob(
		'../lib/assets/photos/gallery/*.{jpg,jpeg,png,webp,avif}',
		{
			eager: true,
			query: '?url',
			import: 'default'
		}
	) as Record<string, string>;
	const galleryPhotos = Object.entries(galleryPhotoModules)
		.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
		.slice(0, maxGalleryPhotos)
		.map(([, src], index) => ({ src, alt: `Wooby gallery photo ${index + 1}` }));

	const partners = [
		{
			name: 'Airbus Humanity Lab',
			type: 'Innovation Partner',
			logo: airbusLogo
		},
		{ name: 'MEDAIR', type: 'NGO Partner', logo: medairLogo },
		{
			name: 'Soc. Colombiana de Pediatría',
			type: 'Medical Partner',
			logo: scpLogo
		},
		{
			name: 'Airbus ProtoSpace',
			type: 'Prototyping Partner',
			logo: airbusProtospaceLogo
		}
	];

	let activePin: (typeof pins)[number] | null = null;
	let activeGoal = 0;

	onMount(() => {
		const interval = window.setInterval(() => {
			activeGoal = (activeGoal + 1) % goals.length;
		}, 4000);

		return () => window.clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Wooby — Tons of Smiles!</title>
</svelte:head>

<div class="home">
	<section class="hero" aria-label="Wooby">
		<img class="fl fl1" src={heroSquiggleBlue} alt="" aria-hidden="true" />
		<img class="fl fl2" src={heroSquiggleYellow} alt="" aria-hidden="true" />
		<img class="fl fl3" src={heroSquiggleBlue} alt="" aria-hidden="true" />
		<img class="fl fl4" src={heroSquiggleYellow} alt="" aria-hidden="true" />
		<img class="fl fl9" src={heroSquigglePurple} alt="" aria-hidden="true" />
		<img class="fl fl10" src={heroSquiggleGreen} alt="" aria-hidden="true" />
		<span class="fl dot fl5" aria-hidden="true"></span>
		<span class="fl dot fl6" aria-hidden="true"></span>
		<span class="fl dot fl7" aria-hidden="true"></span>
		<span class="fl dot fl8" aria-hidden="true"></span>

		<img class="hero-woo" src={wooMain} alt="Woo" />
		<img class="hero-boo" src={booMain} alt="Boo" />

		<div class="hero-logo-wrap">
			<img src={logoFull} alt="Wooby — Tons of Smiles!" />
		</div>
	</section>

	<section class="intro" id="about">
		<div class="intro-inner">
			<div class="tagline">
				<span class="t-blue">Open-source.</span>&nbsp;<span class="t-red">Life-saving.</span
				>&nbsp;<span class="t-yellow">For everyone.</span>
			</div>
			<p class="desc">
				Wooby is an open-source baby scale that gives healthcare workers, NGOs, and communities the
				power to detect child malnutrition early, with clinical-grade precision, anywhere in the
				world.
			</p>
			<a href="#impact" class="btn-main">LEARN MORE</a>
		</div>
	</section>

	<section class="photo-strip" aria-label="Wooby photo gallery">
		<div class="photo-strip-inner">
			<div class="photo-track" style={`--gallery-count:${galleryPhotos.length};`}>
				{#each galleryPhotos as photo}
					<img src={photo.src} alt={photo.alt} />
				{/each}
				{#each galleryPhotos as photo}
					<img src={photo.src} alt="" aria-hidden="true" />
				{/each}
			</div>
		</div>
	</section>

	<section class="kpi-sec" id="impact" aria-label="Wooby impact numbers">
		<div class="kpi-row">
			{#each kpis as kpi}
				<div class="kpi {kpi.color}">
					<span class="kpi-n">
						{#if kpi.value === '100%'}
							100<span class="kpi-suffix">%</span>
						{:else if kpi.value === '5g'}
							5<span class="kpi-suffix">g</span>
						{:else}
							{kpi.value}
						{/if}
					</span>
					<span class="kpi-l">{kpi.label}</span>
				</div>
			{/each}
		</div>
	</section>

	<section class="how-sec">
		<div class="how-inner">
			<div class="impact-heading">
				<h2 class="sec-title blue-title">How Wooby Creates Impact?</h2>
				<p>
					Wooby turns a real need in the field into an open-source loop! Every Wooby built helps
					babies today and helps the next version get even better tomorrow.
				</p>
			</div>

			<div class="impact-loop">
				<svg
					class="impact-path"
					viewBox="0 0 100 100"
					aria-hidden="true"
					preserveAspectRatio="none"
				>
					{#each impactPaths as path}
						<path class={path.className ?? ''} d={path.d} />
					{/each}
				</svg>
				{#each impactPaths as path}
					<span
						class="impact-arrowhead {path.className ?? ''}"
						style={`left:${path.headX}%;top:${path.headY}%;--arrow-angle:${path.angle}deg;`}
						aria-hidden="true"
					></span>
				{/each}
				<ol class="impact-steps" aria-label="Wooby theory of change cycle">
					{#each impactSteps as step}
						<li class="impact-card step-{step.number}" style={impactCardStyle(step)}>
							<div class="impact-card-top">
								<span class="impact-number">{step.number}</span>
								<img src={step.file} alt="" aria-hidden="true" />
							</div>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</li>
					{/each}
				</ol>
			</div>
			<p class="impact-mobile-loop">
				Improve loops back to Build so the open-source cycle keeps getting stronger.
			</p>
		</div>
	</section>

	<section class="stories-sec">
		<div class="stories-inner">
			<h2 class="sec-title purple-title">Real Stories ✨</h2>
			<p class="sec-sub">
				Behind every measurement, there is a child, a family, and a community fighting for a
				healthier future.
			</p>
			<div class="stories-grid">
				{#each stories as story}
					<div class="story-card sc-{story.tone}">
						<img class="story-image" src={story.image} alt={`${story.country} location photo`} />
						<div class="story-heading">
							<span class="story-flag">{story.tone === 'ss' ? '🇸🇸' : '🇨🇴'}</span>
							<div class="story-country">{story.country}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="cta-band" id="build">
		<h2>WANT TO CREATE YOUR OWN WOOBY?</h2>
		<a href="#build" class="btn-white">BUILD YOUR WOOBY!</a>
	</section>

	<section class="map-sec">
		<div class="map-inner">
			<h2 class="sec-title red-title">Where Are We? 🌍</h2>
			<p class="sec-sub">
				Click a pin to explore our volunteering team locations and field deployments.
			</p>

			<div class="map-container" role="presentation" onclick={() => (activePin = null)}>
				<img class="map-svg" src={worldMap} alt="" aria-hidden="true" />
				{#each pins as pin}
					<button
						type="button"
						class="map-pin {pin.type}"
						class:active={activePin?.id === pin.id}
						style={`left:${pin.x};top:${pin.y};`}
						aria-label={pin.label}
						onclick={(event) => {
							event.stopPropagation();
							activePin = pin;
						}}
					>
						<span>{pin.type === 'deployment' ? '👶' : '🤝'}</span>
					</button>
				{/each}

				{#if activePin}
					<div
						class="map-tooltip active {activePin.type}"
						style={`left:${activePin.tooltipX};top:${activePin.tooltipY};`}
					>
						<h4>{activePin.title}</h4>
						<p>
							<strong>{activePin.body.split('\n')[0]}</strong><br />{activePin.body.split('\n')[1]}
						</p>
					</div>
				{/if}
			</div>

			<div class="map-legend">
				<div class="legend-item">
					<span class="legend-dot volunteering"></span>Volunteering Team
				</div>
				<div class="legend-item"><span class="legend-dot deployment"></span>Deployment</div>
			</div>
		</div>
	</section>

	<section class="sdg-sec">
		<div class="sdg-inner">
			<h2 class="sec-title">Aligned with Global Goals 🌐</h2>
			<p class="sdg-sub">Wooby directly supports three UN Sustainable Development Goals.</p>

			<div class="sdg-carousel">
				<div class="sdg-slide">
					<img
						class="sdg-logo-wrap"
						src={goals[activeGoal].icon}
						alt={`${goals[activeGoal].title} icon`}
					/>
					<div class="sdg-content">
						<h3 style={`color:${goals[activeGoal].color};`}>{goals[activeGoal].title}</h3>
						<p>{goals[activeGoal].text}</p>
						<p class="sdg-source">{goals[activeGoal].source}</p>
					</div>
				</div>
				<div class="sdg-progress">
					<div class="sdg-progress-bar" style={`background:${goals[activeGoal].color};`}></div>
				</div>
			</div>

			<div class="sdg-dots" aria-label="Sustainable Development Goal selector">
				{#each goals as goal, index}
					<button
						class="sdg-dot"
						class:active={activeGoal === index}
						style={`--sdg-color:${goal.color};`}
						type="button"
						aria-label={`Show ${goal.title}`}
						onclick={() => (activeGoal = index)}
					></button>
				{/each}
			</div>
			<div class="sdg-nav">
				<button
					type="button"
					onclick={() => (activeGoal = (activeGoal + goals.length - 1) % goals.length)}>←</button
				>
				<button type="button" onclick={() => (activeGoal = (activeGoal + 1) % goals.length)}
					>→</button
				>
			</div>
		</div>
	</section>

	<section class="partners-sec">
		<div class="partners-inner">
			<h2 class="sec-title purple-title">Our Partners 🤝</h2>
			<p class="partners-sub">The people and organizations who make Wooby possible.</p>
			<div class="partners-grid">
				{#each partners as partner}
					<div class="partner-card">
						<div class="partner-logo-wrap">
							<img src={partner.logo} alt={`${partner.name} logo`} />
						</div>
						<div class="partner-name">{partner.name}</div>
						<div class="partner-type">{partner.type}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.home {
		width: 100vw;
		margin-inline: calc(50% - 50vw);
		overflow-x: clip;
		background: white;
		color: #444;
	}

	.hero {
		position: relative;
		display: flex;
		min-height: 528px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		gap: 10px;
		padding: 52px 32px 64px;
		background: var(--bg-default);
		text-align: center;
	}

	.fl {
		position: absolute;
		pointer-events: none;
	}

	.fl1 {
		top: 4%;
		left: 2%;
		width: 78px;
		opacity: 0.22;
		animation: float1 6s ease-in-out infinite;
	}

	.fl2 {
		top: 7%;
		right: 3%;
		width: 90px;
		opacity: 0.2;
		animation: float2 7.5s ease-in-out infinite;
	}

	.fl3 {
		bottom: 14%;
		left: 6%;
		width: 42px;
		opacity: 0.26;
		animation: float3 5.5s ease-in-out infinite 0.8s;
	}

	.fl4 {
		right: 5%;
		bottom: 9%;
		width: 68px;
		opacity: 0.2;
		animation: float2 8s ease-in-out infinite 0.4s;
	}

	.fl9 {
		top: 28%;
		left: 13%;
		width: 58px;
		opacity: 0.2;
		animation: float1 7.8s ease-in-out infinite 0.9s;
	}

	.fl10 {
		right: 15%;
		bottom: 32%;
		width: 78px;
		opacity: 0.22;
		animation: float3 8.2s ease-in-out infinite 1.1s;
	}

	.dot {
		width: 21px;
		aspect-ratio: 1;
		border-radius: 999px;
	}

	.fl5 {
		top: 15%;
		left: 24%;
		background: var(--color-purple);
		opacity: 0.3;
		animation: float3 9s ease-in-out infinite 1.2s;
	}

	.fl6 {
		right: 22%;
		bottom: 20%;
		background: var(--color-yellow);
		opacity: 0.26;
		animation: float1 7s ease-in-out infinite 0.6s;
	}

	.fl7 {
		top: 42%;
		left: 1%;
		background: var(--color-green);
		opacity: 0.22;
		animation: float2 6.5s ease-in-out infinite 1.5s;
	}

	.fl8 {
		top: 38%;
		right: 1%;
		width: 34px;
		background: var(--color-red);
		opacity: 0.18;
		animation: float3 8.5s ease-in-out infinite 0.3s;
	}

	.hero-woo,
	.hero-boo {
		position: absolute;
		bottom: 0;
		z-index: 2;
		object-fit: contain;
	}

	.hero-woo {
		left: 2%;
		width: 240px;
		animation: wooFloat 4s ease-in-out infinite;
	}

	.hero-boo {
		right: 2%;
		width: 212px;
		animation: booFloat 4.5s ease-in-out infinite 0.5s;
	}

	.hero-logo-wrap {
		position: relative;
		z-index: 3;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.hero-logo-wrap img {
		display: block;
		width: 480px;
		max-width: 84vw;
		margin: 0 auto;
	}

	.intro {
		padding: 72px 32px 64px;
		background: #fff;
		text-align: center;
	}

	.intro-inner,
	.how-inner,
	.map-inner,
	.stories-inner,
	.sdg-inner,
	.partners-inner {
		max-width: 960px;
		margin: 0 auto;
	}

	.intro-inner {
		max-width: 820px;
	}

	.tagline,
	.sec-title,
	.cta-band h2,
	.impact-number,
	.impact-card h3,
	.story-country,
	.sdg-content h3,
	.partner-name {
		font-family: var(--font-title);
		letter-spacing: 1px;
	}

	.tagline {
		margin-bottom: 20px;
		font-size: 42px;
		line-height: 1.15;
		white-space: nowrap;
	}

	.t-blue {
		color: var(--color-blue);
	}

	.t-red {
		color: var(--color-red);
	}

	.t-yellow {
		color: var(--color-yellow);
	}

	.desc {
		max-width: 560px;
		margin: 0 auto 34px;
		color: #555;
		font-size: 17px;
		line-height: 1.75;
	}

	.photo-strip {
		overflow: hidden;
		padding: 0 0 64px;
		background: #fff;
	}

	.photo-strip-inner {
		max-width: 100vw;
		margin: 0 auto;
		overflow: hidden;
	}

	.photo-track {
		display: flex;
		width: max-content;
		gap: 24px;
		padding-inline: 32px;
		animation: gallerySlide 120s linear infinite;
		will-change: transform;
	}

	.photo-strip img {
		display: block;
		width: min(38vw, 440px);
		aspect-ratio: 5 / 4;
		flex: none;
		border: 2px solid #f0ead8;
		border-radius: 24px;
		box-shadow: 0 10px 30px rgb(0 0 0 / 0.06);
		object-fit: cover;
	}

	.btn-main,
	.btn-white {
		display: inline-block;
		border: none;
		border-radius: 50px;
		padding: 15px 50px;
		font-family: var(--font-title);
		font-size: 22px;
		letter-spacing: 3px;
		text-decoration: none;
		text-transform: uppercase;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.btn-main {
		background: var(--color-blue);
		color: #fff;
		box-shadow: 0 4px 20px rgb(0 170 238 / 0.3);
	}

	.btn-main:hover,
	.btn-white:hover {
		transform: scale(1.06) translateY(-2px);
	}

	.kpi-sec {
		padding: 48px 32px 60px;
		background: var(--bg-default);
	}

	.kpi-row {
		display: flex;
		max-width: 1160px;
		margin: 0 auto;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 16px;
	}

	.kpi {
		min-width: 150px;
		flex: 1;
		text-align: center;
	}

	.kpi-n {
		display: inline-flex;
		align-items: flex-end;
		justify-content: center;
		white-space: nowrap;
		font-family: var(--font-title);
		font-size: 162px;
		line-height: 1;
	}

	.kpi-suffix {
		display: inline-block;
		font-size: 0.5em;
		line-height: 1;
	}

	.kpi-l {
		display: block;
		margin-top: 6px;
		color: #aaa;
		font-size: 16.5px;
		font-weight: 700;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.kpi.blue .kpi-n {
		color: var(--color-blue);
	}

	.kpi.red .kpi-n {
		color: var(--color-red);
	}

	.kpi.green .kpi-n {
		color: var(--color-green);
	}

	.kpi.yellow .kpi-n {
		color: var(--color-yellow);
	}

	.kpi.purple .kpi-n {
		color: var(--color-purple);
	}

	.how-sec,
	.stories-sec {
		padding: 68px 32px;
		background: #fff;
		border-top: 2px solid #f0ead8;
	}

	.sec-title {
		margin: 0 0 10px;
		font-size: 40px;
		line-height: 1.1;
	}

	.blue-title {
		color: var(--color-blue);
	}

	.red-title {
		color: var(--color-red);
	}

	.purple-title {
		color: var(--color-purple);
	}

	.sec-sub {
		max-width: 600px;
		margin: 0 0 40px;
		color: #777;
		font-size: 16px;
	}

	.how-inner {
		max-width: 1280px;
	}

	.impact-heading {
		max-width: 780px;
		margin: 0 auto 42px;
		text-align: center;
	}

	.impact-heading p {
		margin: 12px 0 0;
		color: #555;
		font-size: 18px;
		line-height: 1.65;
	}

	.impact-loop {
		position: relative;
		min-height: 560px;
		margin: 0;
	}

	.impact-steps {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.impact-path {
		position: absolute;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.impact-path path {
		fill: none;
		stroke: #00a6ed;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 3.5;
		stroke-dasharray: 9 9;
		vector-effect: non-scaling-stroke;
		opacity: 0.42;
	}

	.impact-path .entry-path {
		stroke: var(--color-green);
		opacity: 0.34;
	}

	.impact-path .return-path {
		stroke: var(--color-yellow);
		opacity: 0.58;
	}

	.impact-arrowhead {
		position: absolute;
		z-index: 1;
		width: 12px;
		height: 12px;
		border-top: 3px solid #00a6ed;
		border-right: 3px solid #00a6ed;
		transform: translate(-50%, -50%) rotate(calc(var(--arrow-angle) + 45deg));
		transform-origin: center;
		pointer-events: none;
	}

	.impact-arrowhead.entry-path {
		border-color: var(--color-green);
	}

	.impact-arrowhead.return-path {
		border-color: var(--color-yellow);
	}

	.impact-card {
		position: absolute;
		z-index: 2;
		display: flex;
		width: 23%;
		min-height: 252px;
		flex-direction: column;
		border: 2px solid #f0ead8;
		border-radius: 30px;
		background: #fff;
		padding: 18px 20px 22px;
		box-shadow: 0 14px 34px rgb(0 0 0 / 0.06);
		transform: rotate(var(--card-tilt, 0deg));
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.impact-card:hover {
		transform: translateY(-5px) rotate(var(--card-tilt, 0deg));
		box-shadow: 0 14px 34px rgb(0 0 0 / 0.07);
	}

	.impact-card-top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	.impact-number {
		position: absolute;
		top: 16px;
		left: 16px;
		display: grid;
		width: 38px;
		aspect-ratio: 1;
		place-items: center;
		border-radius: 50%;
		background: var(--color-blue);
		color: white;
		font-size: 20px;
		line-height: 1;
	}

	.impact-card:nth-of-type(2) .impact-number {
		background: var(--color-yellow);
		color: #333;
	}

	.impact-card:nth-of-type(3) .impact-number {
		background: var(--color-purple);
	}

	.impact-card:nth-of-type(4) .impact-number {
		background: var(--color-green);
	}

	.impact-card:nth-of-type(5) .impact-number {
		background: var(--color-red);
	}

	.impact-card:nth-of-type(6) .impact-number {
		background: var(--color-blue);
	}

	.impact-card img {
		width: min(86%, 188px);
		height: 132px;
		flex: none;
		object-fit: contain;
	}

	.impact-card h3 {
		margin: 12px 0 8px;
		color: #333;
		font-size: 26px;
		line-height: 1;
		text-align: center;
	}

	.impact-card p {
		margin: 0;
		color: #666;
		font-size: 15px;
		line-height: 1.55;
		text-align: center;
	}

	.impact-mobile-loop {
		display: none;
	}

	.cta-band {
		background: var(--color-green);
		padding: 52px 32px;
		text-align: center;
	}

	.cta-band h2 {
		margin-bottom: 20px;
		color: #fff;
		font-size: 34px;
	}

	.btn-white {
		background: #fff;
		color: var(--color-green);
	}

	.map-sec,
	.sdg-sec {
		padding: 68px 32px;
		background: var(--bg-default);
		border-top: 2px solid #f0ead8;
	}

	.map-container {
		position: relative;
		overflow: hidden;
		height: 380px;
		margin-top: 20px;
		border-radius: 24px;
		background: #d4eaf7;
	}

	.map-svg {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.map-pin {
		position: absolute;
		display: grid;
		place-items: center;
		width: 42px;
		height: 42px;
		aspect-ratio: 1;
		box-sizing: border-box;
		padding: 0;
		border: 3px solid #fff;
		border-radius: 50%;
		background: var(--color-red);
		box-shadow: 0 4px 14px rgb(0 0 0 / 0.18);
		transform: translate(-50%, -50%);
		transition: transform 0.18s ease;
	}

	.map-pin.deployment {
		width: 42px;
		height: 42px;
		background: var(--color-blue);
	}

	.map-pin:hover,
	.map-pin.active {
		transform: translate(-50%, -50%) scale(1.22);
	}

	.map-pin span {
		font-size: 13px;
		line-height: 1;
	}

	.map-tooltip {
		position: absolute;
		z-index: 10;
		width: min(380px, calc(100% - 32px));
		max-width: 380px;
		min-width: 320px;
		border-left: 4px solid var(--color-yellow);
		border-radius: 14px;
		background: #fff;
		padding: 14px 18px;
		box-shadow: 0 4px 24px rgb(0 0 0 / 0.15);
		pointer-events: none;
	}

	.map-tooltip.deployment {
		border-left-color: var(--color-blue);
	}

	.map-tooltip h4 {
		margin: 0 0 4px;
		font-family: var(--font-title);
		font-size: 18px;
		white-space: nowrap;
	}

	.map-tooltip p {
		margin: 0;
		color: #555;
		font-size: 12px;
		line-height: 1.5;
	}

	.map-legend {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		margin-top: 16px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #555;
		font-size: 13px;
		font-weight: 700;
	}

	.legend-dot {
		width: 14px;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	.legend-dot.volunteering {
		background: var(--color-yellow);
	}

	.legend-dot.deployment {
		background: var(--color-blue);
	}

	.stories-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 28px;
		margin-top: 36px;
	}

	.story-card {
		display: flex;
		min-height: 560px;
		flex-direction: column;
		overflow: hidden;
		border: 2px solid #f0ead8;
		border-radius: 24px;
		background: var(--bg-default);
		padding: 0;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.story-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 32px rgb(0 0 0 / 0.07);
	}

	.story-image {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 5;
		flex: none;
		object-fit: cover;
	}

	.story-heading {
		display: flex;
		flex: 1;
		align-items: center;
		gap: 12px;
		padding: 22px 26px 26px;
	}

	.story-flag {
		display: inline-block;
		flex: none;
		margin: 0;
		font-size: 32px;
	}

	.story-country {
		margin: 0;
		font-size: 22px;
	}

	.sc-ss .story-country {
		color: var(--color-red);
	}

	.sc-co .story-country {
		color: var(--color-blue);
	}

	.sdg-inner,
	.partners-inner {
		text-align: center;
	}

	.partners-inner {
		max-width: 1320px;
	}

	.sdg-sub,
	.partners-sub {
		margin: 8px 0 0;
		color: #777;
		font-size: 16px;
	}

	.sdg-carousel {
		display: grid;
		min-height: 292px;
		margin-top: 36px;
		border: 2px solid #f0ead8;
		border-radius: 24px;
		background: #fff;
		padding: 40px;
	}

	.sdg-slide {
		display: grid;
		grid-template-columns: 160px minmax(0, 1fr);
		align-items: center;
		gap: 48px;
		min-height: 192px;
	}

	.sdg-logo-wrap {
		width: 160px;
		height: 160px;
		aspect-ratio: 1;
		border-radius: 20px;
		box-shadow: 0 4px 20px rgb(0 0 0 / 0.12);
		object-fit: cover;
	}

	.sdg-content {
		flex: 1;
		text-align: left;
	}

	.sdg-content h3 {
		margin-bottom: 12px;
		font-size: 28px;
	}

	.sdg-content p {
		margin-bottom: 10px;
		color: #555;
		font-size: 15px;
		line-height: 1.75;
	}

	.sdg-source {
		color: #bbb !important;
		font-size: 12px !important;
		font-style: italic;
	}

	.sdg-progress {
		overflow: hidden;
		height: 3px;
		margin-top: 24px;
		border-radius: 2px;
		background: #eee;
	}

	.sdg-progress-bar {
		width: 100%;
		height: 100%;
		border-radius: 2px;
	}

	.sdg-dots,
	.sdg-nav {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 24px;
	}

	.sdg-nav {
		margin-top: 14px;
		gap: 12px;
	}

	.sdg-dot {
		width: 10px;
		height: 10px;
		aspect-ratio: 1;
		box-sizing: border-box;
		flex: none;
		padding: 0;
		border: none;
		border-radius: 50%;
		background: #ddd;
		transition:
			background 0.3s,
			transform 0.2s;
	}

	.sdg-dot.active {
		background: var(--sdg-color);
		transform: scale(1.4);
	}

	.sdg-nav button {
		display: flex;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 2px solid #e0e0e0;
		border-radius: 50%;
		background: #fff;
		color: #444;
		font-size: 16px;
		padding: 0;
	}

	.partners-sec {
		background: #f7f3ff;
		padding: 56px 32px;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
		gap: 24px;
		margin-top: 32px;
	}

	.partner-card {
		display: flex;
		min-height: 184px;
		flex-direction: column;
		align-items: center;
		border: 2px solid #eee;
		border-radius: 20px;
		background: #fff;
		padding: 28px 16px;
		text-align: center;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.partner-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgb(0 0 0 / 0.08);
	}

	.partner-logo-wrap {
		display: flex;
		width: 112px;
		height: 112px;
		align-items: center;
		justify-content: center;
		margin: 0 auto 14px;
		overflow: hidden;
		border-radius: 16px;
		font-size: 28px;
	}

	.partner-logo-wrap img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		padding: 10px;
	}

	.partner-name {
		color: #444;
		font-size: 18px;
		line-height: 1.15;
		white-space: nowrap;
	}

	.partner-type {
		margin-top: 8px;
		color: #bbb;
		font-size: 11px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	@keyframes float1 {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(7deg);
		}
	}

	@keyframes float2 {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(16px) rotate(-6deg);
		}
	}

	@keyframes float3 {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-13px) rotate(11deg);
		}
	}

	@keyframes wooFloat {
		0%,
		100% {
			transform: translateY(0) rotate(-3deg);
		}
		50% {
			transform: translateY(-12px) rotate(3deg);
		}
	}

	@keyframes booFloat {
		0%,
		100% {
			transform: translateY(0) rotate(3deg);
		}
		50% {
			transform: translateY(-10px) rotate(-3deg);
		}
	}

	@keyframes gallerySlide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-50% - 12px));
		}
	}

	@media (max-width: 700px) {
		.tagline {
			font-size: 26px;
			white-space: normal;
		}

		.impact-heading {
			margin-bottom: 28px;
			text-align: left;
		}

		.impact-heading p {
			font-size: 16px;
		}

		.impact-loop {
			min-height: 0;
		}

		.impact-steps {
			display: flex;
			flex-direction: column;
			gap: 18px;
		}

		.impact-path {
			display: none;
		}

		.impact-arrowhead {
			display: none;
		}

		.impact-card {
			position: relative;
			top: auto;
			right: auto;
			bottom: auto;
			left: auto;
			width: 100%;
			min-height: 0;
			transform: none;
		}

		.impact-card:hover {
			transform: translateY(-3px);
		}

		.impact-card img {
			height: 118px;
		}

		.impact-mobile-loop {
			display: block;
			margin: 18px 0 0;
			border-left: 4px solid var(--color-yellow);
			border-radius: 16px;
			background: var(--bg-default);
			padding: 12px 16px;
			color: #666;
			font-size: 14px;
			font-weight: 700;
			line-height: 1.5;
		}
	}

	@media (max-width: 640px) {
		.photo-track {
			padding-inline: 20px;
		}

		.photo-strip img {
			width: 78vw;
		}

		.stories-grid {
			grid-template-columns: 1fr;
		}

		.story-card {
			min-height: auto;
		}

		.sdg-slide {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 24px;
		}

		.sdg-content {
			text-align: center;
		}

		.map-tooltip {
			right: 8px;
			left: 8px !important;
			top: auto !important;
			bottom: 8px;
			width: auto;
			min-width: 0;
			max-width: none;
		}

		.map-tooltip h4 {
			white-space: normal;
		}
	}

	@media (max-width: 600px) {
		.hero-woo,
		.hero-boo {
			width: 152px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.fl,
		.hero-woo,
		.hero-boo,
		.photo-track,
		.impact-card,
		.story-card,
		.partner-card {
			animation: none;
			transition: none;
		}
	}
</style>
