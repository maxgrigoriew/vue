<template>
	<div>
		<input type="text" placeholder="tests" :value="text" @input="text = $event.target.value" />
		<p>{{ text }}</p>
	</div>
</template>
<script>
export default {
	data: () => ({
		text: "12",
	}),
}
</script>
