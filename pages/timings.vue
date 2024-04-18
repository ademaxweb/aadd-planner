<template>
	<div class="w-full">
		<h1 class="page_heading">Тайминги</h1>
	</div>
	<div class="w-full">
		<table class="w-full text-center bg-gray-100 rounded-md p-8 overflow-hidden">
			<thead class="text-gray-600 border-b-2 border-b-gray-400">
				<tr>
					<th scope="col">Разработчик</th>
					<th scope="col">Свободен с</th>
					<th scope="col">Свободен до</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd:bg-gray-200">
					<td>Комаровский А.</td>
					<td>
						<input
							type="time"
							class="table_input_time"
						/>
					</td>
					<td>
						<input
							type="time"
							class="table_input_time"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts" setup></script>

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
