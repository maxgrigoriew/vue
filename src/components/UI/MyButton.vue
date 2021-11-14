<template>
	<button type="button" class="btn">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: "MyButton",

	// methods: {},
}
</script>
<style scoped>
.btn {
	border: 1px solid teal;
	background: transparent;
	margin-top: 0.5rem;
}
</style>
