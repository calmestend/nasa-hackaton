<script>
	import { goto } from '$app/navigation';
	import '../styles/global.scss';
</script>

<div class="navbar-container">
	<nav class="navbar">
		<ul class="navbar-items">
			<li><a href="/">Inicio</a></li>
			<li><a href="/data">Información</a></li>
			<li><button on:click={() => goto('/ai')} class="earthbot-button" >Earth Bot</button></li>
		</ul>
	</nav>
</div>
<slot />

<style lang="scss">
	.earthbot-button {
		background-color: #fff;
		padding: 0 1em;
        font-size: 1.2rem;
		text-decoration: none;
		border: 1px solid transparent;
		
		&:hover {
			background-color: #1c1a1c;
			color: #fff;
		}
	} 

</style>
