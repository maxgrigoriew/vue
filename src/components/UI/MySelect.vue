<template>
	<select class="select" v-model="value" @change.native="selectChange">
		<option value="" disabled>Выберите сортировку</option>
		<option v-for="option in optionsArray" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>
<script>
export default {
	props: {
		value: {
			type: String,
			default: "",
		},
		optionsArray: [],
	},
	methods: {
		selectChange(event) {
			this.$emit("select", event.target.value)
		},
	},
}
</script>
<style scoped>
.select {
	min-width: 150px;
	height: 40px;
	border: 1px solid teal;
	border-radius: 5px;
	background: transparent;
	padding: 0.5rem;
}
</style>
