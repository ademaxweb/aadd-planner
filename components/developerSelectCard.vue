<template>
	<div class="developer_select_card">
		<h2 class="text-2xl uppercase font-semibold">{{ developer.name }}</h2>
		<span class="text-lg uppercase text-gray-400">{{ developer.role }}</span>
		<button
			class="button button--primary w-full text-lg px-8 py-2"
			@click="login(developer)"
			:disabled="isLoggedIn"
		>
			<ArrowRightEndOnRectangleIcon class="h-5 w-5" />
			<span>Выбрать</span>
		</button>
	</div>
</template>

<script lang="ts" setup>
	import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/solid';
	import type { IDeveloper } from '~/types/IDeveloper';
	const props = defineProps<{
		developer: IDeveloper;
	}>();

	const { login, isLoggedIn } = useAuth();
</script>

<style scoped>
	.developer_select_card {
		@apply bg-gray-200 flex flex-col items-center py-4 gap-4 px-4 rounded-md;
	}
</style>
