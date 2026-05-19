<script lang="ts">
	import wooMain from '$lib/assets/brand/characters/woo-main.svg';
	import booMain from '$lib/assets/brand/characters/boo-main.svg';
	import barrier from '$lib/assets/build/construction-barrier.svg';
	import squiggleBlue from '$lib/assets/brand/squiggles/ring-dot-blue.svg';
	import squiggleYellow from '$lib/assets/brand/squiggles/leaf-spark-yellow.svg';
</script>

<svelte:head>
	<title>Build Your Wooby — Wooby</title>
</svelte:head>

<section class="build-page" aria-labelledby="build-title">
	<img class="squiggle sq-1" src={squiggleBlue} alt="" aria-hidden="true" />
	<img class="squiggle sq-2" src={squiggleYellow} alt="" aria-hidden="true" />
	<div class="build-scene">
		<img class="character woo" src={wooMain} alt="Woo" />
		<img class="barrier" src={barrier} alt="" aria-hidden="true" />
		<img class="character boo" src={booMain} alt="Boo" />
	</div>
	<h1 id="build-title">UNDER CONSTRUCTION</h1>
	<p>Build guides, files, and documentation are being prepared.</p>
</section>

<style>
	.build-page {
		position: relative;
		display: grid;
		min-height: 78vh;
		place-items: center;
		overflow: hidden;
		margin-inline: calc(50% - 50vw);
		padding: 72px 24px;
		background: var(--bg-default);
		text-align: center;
	}

	.build-scene {
		position: relative;
		z-index: 1;
		display: flex;
		width: min(980px, 94vw);
		align-items: flex-end;
		justify-content: center;
		gap: clamp(8px, 3vw, 28px);
	}

	.character {
		width: clamp(140px, 20vw, 240px);
		object-fit: contain;
		animation: float 4.6s ease-in-out infinite;
	}

	.boo {
		animation-delay: 0.5s;
	}

	.barrier {
		width: clamp(260px, 44vw, 520px);
		max-width: 52vw;
	}

	h1 {
		position: relative;
		z-index: 1;
		margin: 24px 0 0;
		color: var(--color-red);
		font-family: var(--font-title);
		font-size: clamp(42px, 8vw, 86px);
		letter-spacing: 2px;
	}

	p {
		position: relative;
		z-index: 1;
		max-width: 520px;
		margin: 0;
		color: #666;
		font-size: 18px;
	}

	.squiggle {
		position: absolute;
		opacity: 0.22;
		pointer-events: none;
	}

	.sq-1 {
		top: 12%;
		left: 8%;
		width: 110px;
	}

	.sq-2 {
		right: 10%;
		bottom: 18%;
		width: 130px;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(-2deg);
		}
		50% {
			transform: translateY(-12px) rotate(2deg);
		}
	}

	@media (max-width: 720px) {
		.build-scene {
			gap: 0;
		}

		.character {
			width: 28vw;
		}

		.barrier {
			max-width: 48vw;
		}
	}
</style>
