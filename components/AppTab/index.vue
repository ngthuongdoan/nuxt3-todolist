<template>
	<nav
		class="flex gap-4 border-b border-gray-100 text-md font-medium px-4 py-2"
	>
		<a
			v-for="tab in tabs"
			:key="tab.name"
			:class="`-mb-px border-b border-transparent  hover:text-black ${
				tab.href === $route.fullPath ? 'text-black' : 'text-gray-400'
			}`"
			:href="tab.href"
		>
			{{ tab.name }}
		</a>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Tab } from "~/@types"

export default defineComponent({
	name: "AppTab",
	props: {
		tabs: {
			type: Array as () => Array<Tab>,
			required: true,
		},
	},
})
</script>
