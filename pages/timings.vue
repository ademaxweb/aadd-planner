<template>
	<div class="w-full">
		<h1 class="page_heading">Тайминги</h1>
	</div>
	<div class="w-full">
		<table class="w-full text-center bg-gray-100 rounded-md p-8">
			<thead class="text-gray-600 border-b-2 border-b-gray-400">
				<tr>
					<th scope="col">Разработчик</th>
					<th scope="col">Свободен с</th>
					<th scope="col">Свободен до</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="odd:bg-gray-200"
					v-for="timing in timings"
				>
					<td>{{ timing.developer.name }} ({{ timing.developer.role }})</td>
					<td>
						<input
							type="time"
							class="table_input_time"
							value="10:00"
						/>
					</td>
					<td>
						<input
							type="time"
							class="table_input_time"
							value="20:00"
						/>
					</td>
				</tr>
			</tbody>
		</table>
		<div
			v-if="!timings"
			class="w-full text-center text-lg py-4 bg-gray-200"
		>
			<span>Здесь пока пусто</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { timings } = useDevelopers();
</script>

<style>
	th {
		@apply uppercase py-4;
	}
	td {
		@apply py-2;
	}

	.table_input_time {
		@apply py-2 px-3 lg:px-6 rounded-md;
	}
</style>
