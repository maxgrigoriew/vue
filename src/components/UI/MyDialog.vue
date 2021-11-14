<template>
	<div class="dialog" v-show="dialogsVisible" v-bind="dialogVisible" @click.native="hideDialog">
		<div @click.stop class="dialog-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "my-dialog",
	data() {
		return {
			// dialogVisible: false,
		}
	},
	props: {
		dialogsVisible: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		hideDialog() {
			this.$emit("hideDialog", false)
		},
	},
}
</script>
<style scoped>
.dialog {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.5);
}
.dialog-content {
	padding: 10px;
	border: 1px solid teal;
	background: #fff;
	min-height: 100px;
	min-width: 400px;
}
</style>
