<template>
	<div>
		<div v-if="posts.length > 0">
			<h4>Список пользователей:</h4>
			<PostItem
				v-for="post in posts"
				:key="post"
				v-bind:post="post"
				@remove="$emit('remove', post)"
			/>
		</div>

		<h2 v-else style="color: red; text-align: center">Список пользователей пуст</h2>
	</div>
</template>
<script>
import PostItem from "@/components/PostItem.vue"
export default {
	props: ["posts"],
	components: {
		PostItem,
	},
}
</script>
<style scoped></style>
