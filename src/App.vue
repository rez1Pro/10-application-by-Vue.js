<template>
	<Header :authCheck="isLoggin" @login-button="showModel = true" />
	<router-view></router-view>
	<teleport to="#login-modal">
		<Login v-if="showModel" @close-login-model="showModel = false" />
	</teleport>
</template>
<script>
	import Header from './components/Header.vue';
	import Login from './components/Login.vue';
	import firebase from './utilities/firebase';

	export default {
		components: { Login, Header },
		data() {
			return {
				showModel: false,
				isLoggin: false,
			};
		},
		mounted() {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					this.isLoggin = true;
					this.showModel = false;
				} else {
					this.isLoggin = false;
					this.showModel = true;
				}
			});
		},
		methods: {},
	};
</script>

<style></style>
