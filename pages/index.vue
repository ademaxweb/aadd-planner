<template>
	<div class="w-full">
		<h1 class="page_heading">Разработчики</h1>
	</div>
	<div class="w-full grid lg:grid-cols-4 gap-4">
		<DeveloperSelectCard
			v-for="developer in developers"
			:developer="developer"
		/>
	</div>
</template>

<script lang="ts" setup>
	const { developers, fetchDevelopers } = useDevelopers();
	fetchDevelopers();
</script>

<style></style>
