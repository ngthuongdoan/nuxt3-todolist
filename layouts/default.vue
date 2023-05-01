<template>
	<main class="w-screen h-screen flex items-center justify-center bg-[#efeef5]">
		<slot />
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "DefaultLayout",
})
</script>
