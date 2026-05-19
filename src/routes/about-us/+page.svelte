<script lang="ts">
	import wooMain from '$lib/assets/brand/characters/woo-main.svg';
	import booMain from '$lib/assets/brand/characters/boo-main.svg';
	import squiggleBlue from '$lib/assets/brand/squiggles/spiral-blue.svg';
	import squiggleGreen from '$lib/assets/brand/squiggles/wavy-lines-green.svg';
	import squiggleYellow from '$lib/assets/brand/squiggles/leaf-spark-yellow.svg';
	import photoOne from '$lib/assets/photos/gallery/4.jpg';
	import photoTwo from '$lib/assets/photos/gallery/1.jpg';
	import photoThree from '$lib/assets/photos/gallery/6.jpg';
	import clemenceLaurent from '$lib/assets/team/clemence-laurent.jpg';
	import clementRadenac from '$lib/assets/team/clement-radenac.jpg';
	import didierHemmen from '$lib/assets/team/didier-hemmen.jpg';
	import enriqueMaldonadoRomero from '$lib/assets/team/enrique-maldonado-romero.jpg';
	import miguelMendesDias from '$lib/assets/team/miguel-mendes-dias.jpg';
	import morganeDelhalle from '$lib/assets/team/morgane-delhalle.jpg';
	import nataliaArdilaTorres from '$lib/assets/team/natalia-ardila-torres.jpg';
	import nicolasFourcade from '$lib/assets/team/nicolas-fourcade.jpg';
	import pascalHeude from '$lib/assets/team/pascal-heude.jpg';
	import sophiaCombreau from '$lib/assets/team/sophia-combreau.jpg';

	const values = [
		{
			icon: '💡',
			title: 'Innovation',
			text: 'Use technology and creative problem-solving to address global health challenges.'
		},
		{
			icon: '🤝',
			title: 'Collaboration',
			text: 'Work across communities, sectors, and borders to create lasting change.'
		},
		{
			icon: '🌍',
			title: 'Accessibility',
			text: 'Make tools, knowledge, and solutions available regardless of geography or resources.'
		},
		{
			icon: '🔎',
			title: 'Transparency',
			text: 'Share knowledge, progress, and challenges openly.'
		},
		{
			icon: '✨',
			title: 'Optimism for Impact',
			text: "Believe positive change is possible and focus on measurable, meaningful outcomes in children's health."
		}
	];

	const team = [
		{ name: 'Enrique Maldonado', role: 'Project Leader', image: enriqueMaldonadoRomero, link: '' },
		{ name: 'Pascal Heude', role: 'Senior Software Engineer', image: pascalHeude, link: '' },
		{ name: 'Didier Hemmen', role: 'Project Manager', image: didierHemmen, link: '' },
		{ name: 'Nicolas Fourcade', role: '3D Designer', image: nicolasFourcade, link: '' },
		{
			name: 'Miguel Mendes Dias',
			role: 'Electronics Engineer',
			image: miguelMendesDias,
			link: ''
		},
		{
			name: 'Morgane Delhalle',
			role: 'Communication Manager',
			image: morganeDelhalle,
			link: ''
		},
		{ name: 'Natalia Ardila Torres', role: 'UX Designer', image: nataliaArdilaTorres, link: '' },
		{ name: 'Sophia Combreau', role: 'Legal Advisor', image: sophiaCombreau, link: '' },
		{ name: 'Clement Radenac', role: 'Web Designer', image: clementRadenac, link: '' },
		{ name: 'Clemence Laurent', role: 'Community Manager', image: clemenceLaurent, link: '' }
	];

	const volunteers = [
		{ name: 'Laurent Altabas', role: '3D Designer / Electronics Engineer' },
		{ name: 'Viviana Martinez', role: 'Electronics Engineer' },
		{ name: 'Florence Guichard', role: 'Electronics Engineer' },
		{ name: 'Eva Lopez Lopez', role: 'Communication Manager' },
		{ name: 'Georges-Antoni Moubayed', role: '3D Designer' },
		{ name: 'Tatiana Restrepo', role: 'Graphic Designer' },
		{ name: 'Viviana Moreno', role: 'Illustrator' }
	];
</script>

<svelte:head>
	<title>About Us — Wooby</title>
</svelte:head>

<section class="about-page">
	<img class="squiggle sq-1" src={squiggleBlue} alt="" aria-hidden="true" />
	<img class="squiggle sq-2" src={squiggleGreen} alt="" aria-hidden="true" />
	<img class="squiggle sq-3" src={squiggleYellow} alt="" aria-hidden="true" />

	<header class="about-hero">
		<div>
			<p class="eyebrow">ABOUT US</p>
			<h1>Measuring tons of smiles, one Wooby at a time.</h1>
			<p>
				Wooby is a volunteer-powered open-source project creating accessible tools for infant weight
				monitoring in the field. We bring together makers, health partners, designers, engineers,
				and optimistic people who want useful technology to reach more communities.
			</p>
		</div>
		<div class="hero-art">
			<img class="woo" src={wooMain} alt="Woo" />
			<img class="boo" src={booMain} alt="Boo" />
		</div>
	</header>

	<section class="mission-grid" aria-label="Mission, vision, and values">
		<article class="statement mission">
			<h2>Mission</h2>
			<p>
				Make high-precision infant weight monitoring more accessible through open-source hardware,
				software, documentation, and community collaboration.
			</p>
		</article>
		<article class="statement vision">
			<h2>Vision</h2>
			<p>
				A world where communities and health workers can measure, learn, and act early so more
				children have the chance to grow healthy and strong.
			</p>
		</article>
		<div class="photo-stack">
			<img src={photoOne} alt="Wooby field collaboration" />
			<img src={photoTwo} alt="Wooby project work" />
			<img src={photoThree} alt="Wooby location" />
		</div>
	</section>

	<section class="values-sec">
		<h2>Our Values</h2>
		<div class="values-grid">
			{#each values as value}
				<article class="value-card">
					<span class="value-icon" aria-hidden="true">{value.icon}</span>
					<h3>{value.title}</h3>
					<p>{value.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="team-sec">
		<div class="section-heading">
			<h2>Meet the Team</h2>
			<p>Meet the cheerful crew turning ideas, field lessons, and open-source energy into Wooby.</p>
		</div>
		<div class="team-grid">
			{#each team as person}
				<article class="team-card">
					<img src={person.image} alt="" />
					<h3>{person.name}</h3>
					<p>{person.role}</p>
					{#if person.link}
						<a href={person.link} target="_blank" rel="noopener">Profile</a>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section class="volunteers-sec">
		<div class="section-heading">
			<h2>Previous Volunteers</h2>
			<p>A growing space to recognize everyone who has helped Wooby move forward.</p>
		</div>
		<div class="volunteer-list">
			{#each volunteers as volunteer}
				<article>
					<strong>{volunteer.name}</strong>
					<span>{volunteer.role}</span>
				</article>
			{/each}
		</div>
	</section>
</section>

<style>
	.about-page {
		position: relative;
		margin-inline: calc(50% - 50vw);
		overflow: hidden;
		background: white;
		padding: 64px 32px 84px;
	}

	.about-hero,
	.mission-grid,
	.values-sec,
	.team-sec,
	.volunteers-sec {
		position: relative;
		z-index: 1;
		max-width: 1120px;
		margin: 0 auto;
	}

	.about-hero {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
		align-items: center;
		gap: 42px;
		min-height: 480px;
	}

	.eyebrow,
	h1,
	h2,
	h3 {
		font-family: var(--font-title);
		letter-spacing: 1px;
	}

	.eyebrow {
		margin: 0 0 8px;
		color: var(--color-green);
		font-size: 18px;
		font-weight: 700;
	}

	h1 {
		max-width: 680px;
		margin: 0 0 18px;
		color: var(--color-blue);
		font-size: clamp(44px, 7vw, 82px);
		line-height: 0.95;
	}

	.about-hero p,
	.statement p,
	.value-card p,
	.section-heading p,
	.team-card p {
		color: #555;
		font-size: 17px;
		line-height: 1.65;
	}

	.hero-art {
		position: relative;
		min-height: 360px;
	}

	.hero-art img {
		position: absolute;
		object-fit: contain;
	}

	.hero-art .woo {
		bottom: 0;
		left: 0;
		width: 58%;
		transform: rotate(-5deg);
	}

	.hero-art .boo {
		right: 0;
		bottom: 40px;
		width: 50%;
		transform: rotate(6deg);
	}

	.mission-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		margin-top: 40px;
	}

	.statement,
	.value-card,
	.team-card,
	.volunteers-sec {
		border: 2px solid #f0ead8;
		border-radius: 24px;
		background: var(--bg-default);
		box-shadow: 0 12px 30px rgb(0 0 0 / 0.05);
	}

	.statement {
		padding: 30px;
	}

	.statement h2,
	.values-sec h2,
	.team-sec h2,
	.volunteers-sec h2 {
		margin: 0 0 12px;
		color: var(--color-purple);
		font-size: 38px;
		line-height: 1;
	}

	.mission h2 {
		color: var(--color-red);
	}

	.vision h2 {
		color: var(--color-blue);
	}

	.photo-stack {
		display: grid;
		grid-column: 1 / -1;
		grid-template-columns: 1fr 1.15fr 1fr;
		gap: 18px;
		align-items: center;
	}

	.photo-stack img {
		width: 100%;
		aspect-ratio: 5 / 4;
		border: 8px solid white;
		border-radius: 24px;
		object-fit: cover;
		box-shadow: 0 14px 32px rgb(0 0 0 / 0.1);
	}

	.photo-stack img:nth-child(1) {
		transform: rotate(-3deg);
	}

	.photo-stack img:nth-child(2) {
		transform: translateY(18px) rotate(2deg);
	}

	.photo-stack img:nth-child(3) {
		transform: rotate(-1deg);
	}

	.values-sec,
	.team-sec,
	.volunteers-sec {
		margin-top: 76px;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 18px;
	}

	.value-card {
		grid-column: span 2;
	}

	.value-card:nth-child(4) {
		grid-column: 2 / span 2;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 18px;
	}

	.value-card {
		padding: 24px;
	}

	.value-icon {
		display: grid;
		width: 48px;
		aspect-ratio: 1;
		place-items: center;
		margin-bottom: 14px;
		border-radius: 16px;
		background: white;
		font-size: 26px;
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.06);
	}

	.value-card h3,
	.team-card h3 {
		margin: 0 0 8px;
		color: var(--color-green);
		font-size: 24px;
		line-height: 1.05;
	}

	.section-heading {
		margin-bottom: 24px;
	}

	.team-card {
		overflow: hidden;
		padding-bottom: 22px;
		text-align: center;
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
	}

	.team-card:hover {
		box-shadow: 0 16px 34px rgb(0 0 0 / 0.1);
		transform: rotate(1.5deg) translateY(-4px);
	}

	.team-card:nth-child(even):hover {
		transform: rotate(1.5deg) translateY(-4px);
	}

	.team-card img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.team-card h3 {
		display: flex;
		min-height: 2.1em;
		align-items: center;
		justify-content: center;
		margin: 18px 16px 6px;
		color: var(--color-blue);
	}

	.team-card p {
		margin: 0 16px;
		font-size: 14px;
	}

	.team-card a {
		display: inline-block;
		margin-top: 12px;
		border-radius: 999px;
		background: var(--color-blue);
		padding: 8px 14px;
		color: white;
		font-size: 13px;
		font-weight: 700;
		text-decoration: none;
	}

	.volunteers-sec {
		padding: 30px;
	}

	.volunteer-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
	}

	.volunteer-list article {
		display: grid;
		width: min(100%, 260px);
		min-height: 74px;
		align-content: center;
		gap: 4px;
		border-radius: 999px;
		background: white;
		padding: 12px 18px;
		color: #555;
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.05);
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
	}

	.volunteer-list article:hover {
		box-shadow: 0 12px 26px rgb(0 0 0 / 0.08);
		transform: rotate(1.5deg) translateY(-3px);
	}

	.volunteer-list article:nth-child(even):hover {
		transform: rotate(-1.5deg) translateY(-3px);
	}

	.volunteer-list strong {
		color: #333;
		font-weight: 700;
	}

	.volunteer-list span {
		font-size: 13px;
		line-height: 1.3;
	}

	.squiggle {
		position: absolute;
		opacity: 0.18;
		pointer-events: none;
	}

	.sq-1 {
		top: 6%;
		left: 2%;
		width: 120px;
	}

	.sq-2 {
		top: 34%;
		right: 4%;
		width: 150px;
	}

	.sq-3 {
		bottom: 10%;
		left: 8%;
		width: 130px;
	}

	@media (max-width: 860px) {
		.about-hero,
		.mission-grid,
		.team-grid {
			grid-template-columns: 1fr;
		}

		.values-grid {
			grid-template-columns: 1fr;
		}

		.value-card,
		.value-card:nth-child(4) {
			grid-column: auto;
		}

		.hero-art {
			min-height: 280px;
		}

		.photo-stack {
			grid-template-columns: 1fr;
		}

		.photo-stack img {
			transform: none !important;
		}
	}
</style>
