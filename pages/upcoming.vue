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
import { faker } from "@faker-js/faker"
import { Tab, Todo } from "~/@types"

export default defineComponent({
	name: "UpcomingPage",
	setup() {
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

		const todos: Array<Todo> = []
		for (let i = 0; i < 10; i++) {
			const todo: Todo = {
				id: faker.datatype.uuid(),
				title: faker.lorem.words(),
				description: faker.lorem.sentence(),
				completed: faker.datatype.boolean(),
				author: faker.name.fullName(),
				dueDate: faker.date.future(),
			}
			todos.push(todo)
		}

		return {
			tabs,
			todos,
		}
	},
})
</script>
