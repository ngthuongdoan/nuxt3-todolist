<template>
	<div>
		<hr v-show="index !== 0" class="w-full bg-gray400 h-1" />
		<div class="flex py-4 gap-4 align-top">
			<label class="checkbox-container">
				<input
					type="checkbox"
					class="rounded-checkbox"
					:checked="todo.completed"
				/>
				<span class="checkmark bg-white border"></span>
			</label>
			<div class="flex flex-col gap-1">
				<h3 class="text-sm text-black font-semibold">{{ todo.title }}</h3>
				<p class="text-sm text-gray-400">{{ todo.description }}</p>
				<div class="flex gap-4 mt-1">
					<div class="flex gap-1 align-middle">
						<img
							src="https://img.icons8.com/material-two-tone/24/null/calendar--v1.png"
							class="w-4 h-4"
						/>
						<p class="text-xs text-red-400">{{ dueDate }}</p>
					</div>
					<div class="flex gap-1 align-middle">
						<img
							src="https://img.icons8.com/windows/32/null/person-male.png"
							class="w-4 h-4"
						/>
						<p class="text-xs text-gray-400">{{ todo.author }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import dayjs from "dayjs"
import { Todo } from "~/@types"
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat)
export default defineComponent({
	name: "AppCard",
	props: {
		todo: {
			type: Object as () => Todo,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	setup(props) {
		const dueDate = computed<string>(() =>
			dayjs(props.todo.dueDate || new Date(), "YYYY-MM-DD").format(
				"DD MMM YYYY"
			)
		)
		return {
			dueDate,
		}
	},
})
</script>
<style lang="scss">
.checkbox-container {
	display: inline-block;
	position: relative;
	padding-left: 25px;
	margin-bottom: 12px;
	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 20px;
	width: 20px;
	border-radius: 50%;
}

.rounded-checkbox:checked + .checkmark {
	background-color: #2196f3;
}
</style>
