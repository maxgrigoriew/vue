<template>
	<input :value="value" v-on:input="updateInput" @input="updateInput" class="input" type="text" />
</template>
<script>
export default {
	name: "MyInput",
	props: ["value"],
	methods: {
		updateInput(event) {
			this.$emit("input", event.target.value)
		},
	},
}
</script>
<style scoped>
.input {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.1rem;
	width: 100%;
	border: 1px solid teal;
	padding: 0.5rem;
	height: 50px;
}
</style>
