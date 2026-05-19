<script lang="ts">
	import logoSimple from '$lib/assets/brand/logos/logo-isotype.svg';
</script>

<nav class="top-nav" style="grid-area: nav;" aria-label="Main navigation">
	<a class="top-nav-logo" href="/" aria-label="Wooby home">
		<img src={logoSimple} alt="" aria-hidden="true" />
	</a>

	<div class="nav-links">
		<a href="/">HOME</a>
		<a href="/about-us">ABOUT US</a>
		<a href="/our-impact">OUR IMPACT</a>
		<a href="/build-your-wooby">BUILD YOUR WOOBY</a>
		<a href="/contact">CONTACT</a>
	</div>
</nav>

<style>
	.top-nav {
		position: sticky;
		top: 0;
		z-index: 200;
		display: flex;
		width: 100vw;
		align-items: center;
		justify-content: space-between;
		margin-inline: calc(50% - 50vw);
		border-bottom: 1.5px solid #f0f0f0;
		background: #fff;
		padding: 16px 48px;
	}

	.top-nav-logo {
		display: block;
		width: 36px;
		height: 36px;
		padding: 0;
		border-radius: 0;
		box-shadow: none;
	}

	.top-nav-logo img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.nav-links {
		display: flex;
		flex-wrap: wrap;
		gap: 28px;
		justify-content: flex-end;
	}

	.nav-links a {
		padding: 0;
		border-radius: 0;
		box-shadow: none;
		color: #444;
		font-family: var(--font-title);
		font-size: 16.8px;
		letter-spacing: 1px;
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--color-blue);
	}

	@media (max-width: 700px) {
		.top-nav {
			align-items: flex-start;
			gap: 14px;
			padding: 14px 20px;
		}

		.nav-links {
			gap: 10px 16px;
		}
	}
</style>
