<script lang="ts">
	import Fa from 'svelte-fa';
	import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import logoSimple from '$lib/assets/brand/logos/logo-isotype.svg';
</script>

<footer class="mixed-footer" id="contact" style="grid-area: footer;">
	<div class="footer-main">
		<a class="footer-logo" href="/" aria-label="Wooby home">
			<img src={logoSimple} alt="Wooby Logo" />
		</a>

		<div class="footer-column">
			<h3>Follow us</h3>
			<ul class="social">
				<li>
					<a
						href="https://www.linkedin.com/company/wooby/"
						class="bg-blue"
						title="Wooby's LinkedIn"
					>
						<Fa icon={faLinkedinIn} />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/woobyproject/"
						class="bg-purple"
						title="Wooby's Instagram"
					>
						<Fa icon={faInstagram} />
					</a>
				</li>
			</ul>
		</div>

		<div class="footer-column">
			<h3>Contact us!</h3>
			<p><a href="mailto:hello@wooby.org">hello@wooby.org</a></p>
		</div>
	</div>

	<div class="footer-compact">
		<span>Tons of Smiles! 😊 &nbsp;·&nbsp; Born to be open source.</span>
		<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener"
			>CC BY-SA 4.0</a
		>
		<span>·</span>
		<a href="/terms-and-conditions">Terms & Conditions</a>
		<span>·</span>
		<span>© 2024 Wooby. All Rights Reserved.</span>
	</div>
</footer>

<style>
	.mixed-footer {
		width: 100vw;
		margin-inline: calc(50% - 50vw);
		border-top: 2px solid #f0ead8;
		background: var(--bg-default);
		padding: 28px 32px 14px;
	}

	.footer-main {
		display: grid;
		max-width: 75rem;
		grid-template-columns: minmax(4rem, 7rem) 1fr 1fr;
		gap: 28px;
		margin-inline: auto;
		align-items: start;
	}

	.footer-logo {
		display: block;
		padding: 0;
		border-radius: 0;
		box-shadow: none;
	}

	.footer-logo img {
		display: block;
		width: clamp(3.5rem, 7vw, 5.5rem);
	}

	.footer-column h3 {
		margin: 0 0 10px;
		color: #444;
		font-family: var(--font-title);
		font-size: 18px;
		letter-spacing: 1px;
	}

	.footer-column p {
		margin: 0;
		font-size: 15px;
	}

	.social {
		display: flex;
		gap: 12px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.social a {
		display: grid;
		width: 42px;
		aspect-ratio: 1;
		place-items: center;
		border-radius: 12px;
		padding: 0;
		color: white;
		font-size: 24px;
		text-decoration: none;
		box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.social a:hover {
		transform: scale(0.95);
		box-shadow: none;
	}

	.footer-compact {
		display: flex;
		max-width: 75rem;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin: 24px auto 0;
		border-top: 1px solid #f0ead8;
		padding-top: 12px;
		color: #555;
		font-size: 14px;
		text-align: center;
	}

	.footer-compact > * {
		color: inherit;
		font: inherit;
	}

	.footer-compact a {
		display: inline;
		border-radius: 0;
		box-shadow: none;
		padding: 0;
		background: transparent;
		color: #666;
		text-decoration: underline !important;
	}

	.footer-compact a:hover {
		box-shadow: none;
		transform: none;
		color: var(--color-blue);
	}

	@media (max-width: 760px) {
		.footer-main {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.footer-logo img,
		.social {
			margin-inline: auto;
		}

		.footer-compact {
			justify-content: center;
		}
	}
</style>
