<script>
	import Header from './Header.svelte';
	import github from '$lib/images/github-mark.svg';

	import './styles.css';
	import '@fontsource/amatic-sc';
</script>

<Header />
<main>
	<div class="content">
		<slot />
	</div>
</main>

<footer>
	<span>Cheesecake by Mona <sup>&reg;</sup></span>
	<div class="github">
		<a href="https://github.com/martin-havala/cheesecake-by-mona">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		overflow: hidden;
		overflow-y: auto;
	}
	:global(p) {
		text-align: center;
	}
	.content {
		max-width: 64rem;
		margin: auto;
		height: 100%;
		overflow: hidden;
	}

	footer {
		border-top: 1px solid var(--color-frames);
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
	}

	.github {
		position: absolute;
		right: 0.5rem;
		bottom: 0.25rem;
	}

	.github img {
		height: 1.5em;
		width: 1.5em;
	}
</style>
