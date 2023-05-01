<template>
	<AppContainer class="relative">
		<AppTab :tabs="tabs"></AppTab>
		<div class="px-4">
			<AppCard
				v-for="(todo, index) in todos"
				:key="todo.id"
				:todo="todo"
				:index="index"
			>
			</AppCard>
		</div>
	</AppContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Tab, Todo } from "~/@types"
export default defineComponent({
	name: "IndexPage",
	async setup() {
		const tabs: Array<Tab> = [
			{
				name: "Todo",
				href: "/",
			},
			{
				name: "Upcoming",
				href: "/upcoming",
			},
		]

		const query = gql`
			{
				todo {
					id
					title
					dueDate
					author
					completed
					description
				}
			}
		`
		const {
			data: { value },
		} = await useAsyncQuery(query)

		return {
			tabs,
			todos: (value as any).todo || [],
		}
	},
})
</script>
