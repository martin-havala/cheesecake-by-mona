<script>
	import { page } from '$app/stores';

	import { base } from '$app/paths';

	let checked = false;
	function toggleMenu() {
		checked = !checked;
	}
</script>

<header>
	<nav class="hamburger-menu">
		<input id="menu__toggle" type="checkbox" hidden bind:checked />
		<label class="menu__btn" for="menu__toggle">
			<span />
		</label>

		<ul>
			<li aria-current={$page.url.pathname.includes('mona', -5) ? 'page' : undefined}>
				<a href="{base}/" on:click={toggleMenu}>Home</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/bake') ? 'page' : undefined}>
				<a href="{base}/bake" on:click={toggleMenu}>Bake</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/menu') ? 'page' : undefined}>
				<a href="{base}/menu" on:click={toggleMenu}>Menu</a>
			</li>
			<li aria-current={$page.url.pathname.includes('/logo') ? 'page' : undefined}>
				<a href="{base}/logo" on:click={toggleMenu}>ByMona</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
		background: var(--background);
		z-index: 1;
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

		padding: 0 1rem;
	}

	li[aria-current='page'] a {
		--size: 6px;
		border-left: 1px solid var(--color-theme-1);
		border-right: 1px solid var(--color-theme-1);
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
	#menu__toggle {
		display: none;
	}

	@media (max-width: 500px) {
		#menu__toggle:checked + .menu__btn > span {
			transform: rotate(45deg);
		}
		#menu__toggle:checked + .menu__btn > span::before {
			top: 0;
			transform: rotate(0deg);
		}
		#menu__toggle:checked + .menu__btn > span::after {
			top: 0;
			transform: rotate(90deg);
		}
		#menu__toggle:checked ~ ul {
			top: 0 !important;
		}
		.menu__btn {
			z-index: 2;
			position: fixed;
			top: 20px;
			left: 20px;
			width: 26px;
			height: 26px;
			cursor: pointer;
		}
		.menu__btn > span,
		.menu__btn > span::before,
		.menu__btn > span::after {
			display: block;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #616161;
			transition-duration: 0.25s;
		}
		.menu__btn > span::before {
			content: '';
			top: -8px;
		}
		.menu__btn > span::after {
			content: '';
			top: 8px;
		}

		ul {
			display: flex;
			position: fixed;
			top: -100vh;
			width: 100vw;
			height: 100%;
			/* padding: 80px 0; */
			list-style: none;
			background-color: var(--background);
			transition-duration: 0.25s;
			text-align: center;
			flex-direction: column;
			justify-content: space-around;
			z-index: 1;
		}
		a {
			margin: 0.5rem !important;
		}
		li:hover {
			background-color: var(--background);
		}
	}
</style>
