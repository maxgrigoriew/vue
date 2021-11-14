<template>
	<div class="form">
		<MyInput
			v-model="post.title"
			class="input"
			type="text"
			placeholder="Введите название"
		></MyInput>

		<MyInput
			v-model="post.body"
			class="input"
			type="text"
			placeholder="Введите описание"
		></MyInput>
		<MyButton @click.native="createPost">Добавить пост</MyButton>
	</div>
</template>
<script>
export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			},
		}
	},
	methods: {
		createPost(e) {
			e.preventDefault()
			this.post.id = Date.now()
			this.$emit("create", this.post)
			this.post = {
				title: "",
				body: "",
			}
		},

		updateInput(event) {
			this.post.title = event
		},
	},
}
</script>
<style scoped>

.form {
	margin-bottom: 2rem;
}
</style>

