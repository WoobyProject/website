<script lang="ts">
	import Fa from 'svelte-fa';
	import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import wooMain from '$lib/assets/brand/characters/woo-main.svg';
	import booMain from '$lib/assets/brand/characters/boo-main.svg';
	import squiggleBlue from '$lib/assets/brand/squiggles/ring-dot-blue.svg';
	import squiggleYellow from '$lib/assets/brand/squiggles/leaf-spark-yellow.svg';
</script>

<svelte:head>
	<title>Contact — Wooby</title>
</svelte:head>

<section class="contact-page" aria-labelledby="contact-title">
	<img class="squiggle sq-1" src={squiggleBlue} alt="" aria-hidden="true" />
	<img class="squiggle sq-2" src={squiggleYellow} alt="" aria-hidden="true" />

	<img class="character woo" src={wooMain} alt="Woo" />
	<div class="contact-card">
		<p class="eyebrow">CONTACT</p>
		<h1 id="contact-title">Let’s talk Wooby.</h1>
		<p>
			Have a question, want to collaborate, or want to follow the project? Write to us by email or
			find us on social media.
		</p>

		<a class="email-link" href="mailto:hello@wooby.org">hello@wooby.org</a>

		<div class="social-links" aria-label="Wooby social media">
			<a href="https://www.linkedin.com/company/wooby/" target="_blank" rel="noopener">
				<Fa icon={faLinkedinIn} />
				<span>LinkedIn</span>
			</a>
			<a href="https://www.instagram.com/woobyproject/" target="_blank" rel="noopener">
				<Fa icon={faInstagram} />
				<span>Instagram</span>
			</a>
		</div>
	</div>
	<img class="character boo" src={booMain} alt="Boo" />
</section>

<style>
	.contact-page {
		position: relative;
		display: grid;
		min-height: 78vh;
		grid-template-columns: minmax(120px, 220px) minmax(0, 620px) minmax(120px, 220px);
		align-items: center;
		justify-content: center;
		gap: 24px;
		overflow: hidden;
		margin-inline: calc(50% - 50vw);
		background: var(--bg-default);
		padding: 72px 32px;
	}

	.contact-card {
		position: relative;
		z-index: 1;
		border: 2px solid #f0ead8;
		border-radius: 30px;
		background: white;
		padding: clamp(28px, 5vw, 54px);
		text-align: center;
		box-shadow: 0 18px 42px rgb(0 0 0 / 0.07);
	}

	.eyebrow,
	h1 {
		font-family: var(--font-title);
		letter-spacing: 1px;
	}

	.eyebrow {
		margin: 0 0 6px;
		color: var(--color-green);
		font-size: 18px;
		font-weight: 700;
	}

	h1 {
		margin: 0 0 14px;
		color: var(--color-blue);
		font-size: clamp(48px, 8vw, 84px);
		line-height: 0.95;
	}

	p {
		margin: 0 auto 24px;
		max-width: 480px;
		color: #555;
		font-size: 18px;
		line-height: 1.65;
	}

	.email-link {
		display: inline-block;
		margin-bottom: 26px;
		color: var(--color-red);
		font-family: var(--font-title);
		font-size: 30px;
		letter-spacing: 1px;
		text-decoration: none;
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 14px;
	}

	.social-links a {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		border-radius: 999px;
		background: var(--color-blue);
		padding: 12px 18px;
		color: white;
		font-weight: 700;
		text-decoration: none;
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
	}

	.social-links a:nth-child(2) {
		background: var(--color-purple);
	}

	.character {
		position: relative;
		z-index: 1;
		width: min(100%, 220px);
		align-self: end;
		object-fit: contain;
	}

	.woo {
		transform: rotate(-5deg);
	}

	.boo {
		transform: rotate(5deg);
	}

	.squiggle {
		position: absolute;
		opacity: 0.2;
		pointer-events: none;
	}

	.sq-1 {
		top: 12%;
		left: 10%;
		width: 110px;
	}

	.sq-2 {
		right: 12%;
		bottom: 14%;
		width: 130px;
	}

	@media (max-width: 760px) {
		.contact-page {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.character {
			width: 150px;
			margin-inline: auto;
		}

		.woo {
			order: 2;
		}

		.contact-card {
			order: 1;
		}

		.boo {
			order: 3;
		}
	}
</style>
