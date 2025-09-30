<script>
	import Fa from 'svelte-fa'
	import { faInstagram } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
</script>

<div id="color-bar" style="grid-area: pre-footer;">
	<div class="w-1/5 bg-blue"></div>
	<div class="w-1/5 bg-red"></div>
	<div class="w-1/5 bg-yellow"></div>
	<div class="w-1/5 bg-purple"></div>
	<div class="w-1/5 bg-green"></div>
</div>
<footer class="container" style="grid-area: footer;">
	<!--	Merci Google fonts, tailwind, Font Awesome-->
	<div class="flex gap-15">
		<enhanced:img src="$lib/assets/logo-simple.svg" alt="Wooby Logo" style="width: clamp(10rem, 18vw, 25rem);"/>
		<div class="basis-full">
			<h3>Follow us</h3>
			<ul class="social flex gap-5 w-full [&_a]:p-2 [&_a]:text-3xl">
				<li><a href="https://www.linkedin.com/company/wooby/" class="bg-blue" title="Wooby's LinkedIn"><Fa icon={faLinkedinIn} /></a></li>
				<li><a href="https://www.instagram.com/woobyproject/" class="bg-purple" title="Wooby's Instagram"><Fa icon={faInstagram} /></a></li>
			</ul>
		</div>
		<div class="basis-full">
			<h3>Contact us</h3>
			<p>
				<a href="mailto:hello@wooby.org">hello@wooby.org</a>
			</p>
		</div>
		<div class="basis-full">
			<h3>Partners</h3>
			<ul>
				<li><a href="https://discoveryspace-foundation.airbus.com/">Airbus Fondation</a></li>
			</ul>
		</div>
	</div>
	<p class="mt-4 text-sm text-center"><a href="/terms-and-conditions">Terms & Conditions</a> | © 2024 Wooby. All Rights Reserved.</p>
</footer>