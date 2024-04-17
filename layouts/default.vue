<template>
	<header class="container mx-auto py-8 flex justify-between items-center">
		<nav>
			<ul class="flex gap-6">
				<li>
					<NuxtLink
						to="/"
						class="header__link"
						>Главная</NuxtLink
					>
				</li> 
				<li>
					<NuxtLink
						to="/"
						class="header__link"
						>Тайминги</NuxtLink
					>
				</li>
			</ul>
		</nav>
	</header>
	<main class="container mx-auto flex flex-col justify-start items-center gap-8">
		<slot />
	</main>
</template>

<script lang="ts" setup></script>

<style>
	.header__link {
		@apply text-2xl uppercase text-gray-500 hover:text-gray-900 transition;
	}
</style>
