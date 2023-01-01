<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github-mark.svg';

	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/bake' ? 'page' : undefined}>
				<a href="{base}/bake">Bake</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/menu') ? 'page' : undefined}>
				<a href="{base}/menu">Menu</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/byMona') ? 'page' : undefined}>
				<a href="{base}/byMona">ByMona</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/martin-havala/cheesecake-by-mona">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		background: var(--background);
	}

	.corner {
		position: absolute;
		width: 3em;
		height: 3em;
		right: 0;
		top: 0;
	}

	.corner img {
		width: 2em;
		height: 2em;
		padding: 0.5em;
		object-fit: contain;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 1rem;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-menu);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
