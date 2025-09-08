<script lang="ts">
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';

	//import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<!--<link rel="icon" href={favicon} />-->
</svelte:head>

<Nav />

<main class="container" style="grid-area: content;">
	<slot />
</main>

<Footer />
