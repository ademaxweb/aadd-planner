<template>
	<header class="container mx-auto px-2 lg:px-0 py-8 flex justify-between items-center">
		<nav class="py-3">
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
						to="/timings"
						class="header__link"
						>Тайминги</NuxtLink
					>
				</li>
			</ul>
		</nav>
		<div v-if="isLoggedIn">
			<button
				class="button py-3 px-4"
				@click="logout"
			>
				<span>{{ user?.name }}</span>
				<ArrowRightStartOnRectangleIcon class="w-5 h-5" />
			</button>
		</div>
	</header>
	<main class="container px-2 lg:px-0 mx-auto flex flex-col justify-start items-center gap-8">
		<slot />
	</main>
</template>

<script lang="ts" setup>
	import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/outline';
	import { useAuth } from '~/composables/useAuth';

	const { isLoggedIn, user, logout } = useAuth();
</script>

<style>
	.header__link {
		@apply text-xl lg:text-2xl uppercase text-gray-500 hover:text-gray-900 transition;
	}
</style>
