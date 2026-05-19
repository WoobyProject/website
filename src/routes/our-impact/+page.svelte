<script lang="ts">
	import storyColombia from '$lib/assets/photos/locations/colombia.jpg';
	import storySouthSudan from '$lib/assets/photos/locations/south-sudan.png';
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

	const stories = [
		{
			country: 'South Sudan',
			image: storySouthSudan,
			flag: '🇸🇸',
			tone: 'ss',
			text: 'In South Sudan, more than 250 measurements have been made with Wooby during the testing phase with MEDAIR in two stabilization centers in Pibor and Leer. The field teams shared positive feedback about using Wooby in real care settings, and two Woobys are now there supporting continued learning with MEDAIR.'
		},
		{
			country: 'Colombia',
			image: storyColombia,
			flag: '🇨🇴',
			tone: 'co',
			text: 'In Colombia, one Wooby is being used by the Sociedad Colombiana de Pediatría in initial trials. The team is also about to close an agreement with a university to produce the first local Woobys in Barranquilla, Colombia.'
		}
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
			x: 79,
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
		{ from: '1', fromSide: 'right', to: '2', toSide: 'left', className: 'entry-path' },
		{ from: '2', fromSide: 'right', to: '3', toSide: 'left' },
		{ from: '3', fromSide: 'right', to: '4', toSide: 'top' },
		{ from: '4', fromSide: 'bottom', to: '5', toSide: 'right' },
		{ from: '5', fromSide: 'left', to: '6', toSide: 'right' },
		{ from: '6', fromSide: 'top', to: '2', toSide: 'bottom', className: 'return-path' }
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
</script>

<svelte:head>
	<title>Our Impact — Wooby</title>
</svelte:head>

<section class="impact-page">
	<header class="impact-hero">
		<p class="eyebrow">OUR IMPACT</p>
		<h1>Stories, learning,<br />and open-source progress.</h1>
		<p>
			Wooby’s impact grows through field collaboration, careful measurement, and shared learning.
		</p>
	</header>

	<section class="impact-stories" aria-labelledby="stories-title">
		<h2 id="stories-title">Real Stories ✨</h2>
		<div class="story-list">
			{#each stories as story}
				<article class="wide-story sc-{story.tone}">
					<img src={story.image} alt={`${story.country} location photo`} />
					<div>
						<div class="story-country"><span>{story.flag}</span>{story.country}</div>
						<p>{story.text}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="theory-sec" aria-labelledby="theory-title">
		<div class="impact-heading">
			<h2 id="theory-title">Our Theory of Change</h2>
			<p>
				Wooby turns a real need in the field into an open-source loop. Every Wooby built helps
				babies today and helps the next version get even better tomorrow.
			</p>
		</div>

		<div class="impact-loop">
			<svg class="impact-path" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
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
	</section>
</section>

<style>
	.impact-page {
		margin-inline: calc(50% - 50vw);
		background: white;
		padding: 68px 32px 90px;
	}

	.impact-hero,
	.impact-stories,
	.theory-sec {
		max-width: 1280px;
		margin: 0 auto;
	}

	.impact-hero {
		max-width: 1120px;
		margin-bottom: 54px;
		text-align: center;
	}

	.eyebrow,
	h1,
	h2,
	.impact-card h3,
	.impact-number,
	.story-country {
		font-family: var(--font-title);
		letter-spacing: 1px;
	}

	.eyebrow {
		color: var(--color-green);
		font-weight: 700;
	}

	h1 {
		margin: 0 0 16px;
		color: var(--color-blue);
		font-size: clamp(46px, 7vw, 82px);
		line-height: 0.95;
	}

	.impact-hero p,
	.impact-heading p,
	.wide-story p,
	.impact-card p {
		color: #555;
		font-size: 17px;
		line-height: 1.65;
	}

	h2 {
		margin: 0 0 24px;
		color: var(--color-purple);
		font-size: 42px;
		line-height: 1;
	}

	.story-list {
		display: grid;
		gap: 24px;
	}

	.wide-story {
		display: grid;
		grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
		gap: 28px;
		align-items: center;
		border: 2px solid #f0ead8;
		border-radius: 28px;
		background: var(--bg-default);
		padding: 18px;
		box-shadow: 0 12px 32px rgb(0 0 0 / 0.06);
	}

	.wide-story img {
		width: 100%;
		aspect-ratio: 5 / 4;
		border-radius: 20px;
		object-fit: cover;
	}

	.story-country {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
		color: var(--color-blue);
		font-size: 32px;
	}

	.sc-ss .story-country {
		color: var(--color-red);
	}

	.theory-sec {
		margin-top: 78px;
	}

	.impact-heading {
		max-width: 780px;
		margin: 0 auto 42px;
		text-align: center;
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

	.impact-card img {
		width: min(86%, 188px);
		height: 132px;
		object-fit: contain;
	}

	.impact-card h3 {
		margin: 12px 0 8px;
		color: #333;
		font-size: 26px;
		text-align: center;
	}

	.impact-card p {
		margin: 0;
		font-size: 15px;
		line-height: 1.55;
		text-align: center;
	}

	.impact-mobile-loop {
		display: none;
	}

	@media (max-width: 760px) {
		.wide-story {
			grid-template-columns: 1fr;
		}

		.impact-heading {
			text-align: left;
		}

		.impact-loop {
			min-height: 0;
		}

		.impact-steps {
			display: flex;
			flex-direction: column;
			gap: 18px;
		}

		.impact-path,
		.impact-arrowhead {
			display: none;
		}

		.impact-card {
			position: relative;
			top: auto;
			left: auto;
			width: 100%;
			min-height: 0;
			transform: none;
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
</style>
