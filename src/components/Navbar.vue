<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav w-100">
				<li class="ml-auto nav-item active">
					<router-link class="nav-link" to="/">Главная</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about">Описание</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
