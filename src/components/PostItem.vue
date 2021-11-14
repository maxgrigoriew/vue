<template>
	<div>
		<div class="post">
			<div class="title">
				<span>Название поста:</span><span>{{ post.title }}</span>
			</div>
			<div class="body">
				<span>Описание поста:</span> <span>{{ post.body }}</span>
			</div>
			<div>
				<MyButton @click.native="$emit('remove', post)">Удалить</MyButton>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {},
	props: ["post"],
	components: {},
}
</script>
<style scoped>
.post {
	border: 1px solid teal;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}
.title,
.body {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.1rem;
	width: 100%;
	border: 1px solid teal;
	padding: 0.5rem;
}
</style>
