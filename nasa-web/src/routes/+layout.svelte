<script>
	import { goto } from '$app/navigation';
	import '../styles/global.scss';
</script>

<div class="navbar-container">
	<nav class="navbar">
		<ul class="navbar-items">
			<li><a href="/">Home</a></li>
			<li><a href="/data">Data</a></li>
			<li><button on:click={() => goto('/ai')}>Ai</button></li>
		</ul>
	</nav>
</div>
<slot />
