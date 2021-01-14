<template>
	<nav class="bg-blue-500 py-4 px-8 mb-4">
		<div class="text-white font-normal" style="font-size: 19px">
			<router-link
				class="pr-3"
				v-for="item in list"
				:key="item.to"
				:to="item.to"
			>
				{{ item.title }}
			</router-link>
			<div
				v-if="!authCheck"
				class="flex float-right cursor-pointer mx-2"
				@click="$emit('login-button')"
			>
				Login
			</div>
			<div v-else @click="Logout()" class="flex float-right cursor-pointer">
				Logout
			</div>
		</div>
	</nav>
</template>

<script>
	import firebase from '../utilities/firebase';
	export default {
		props: ['authCheck'],
		data() {
			return {
				list: [
					{ title: 'Home', to: '/' },
					{ title: 'List', to: '/name-list' },
					{ title: 'Calendar', to: '/calendar' },
					{ title: 'Markdown', to: '/markdown' },
					{ title: 'Sliders', to: '/sliders' },
					{ title: 'Calculator', to: '/calculator' },
					{ title: 'Modals', to: '/reuseable-modals' },
				],
			};
		},
		methods: {
			Logout() {
				firebase
					.auth()
					.signOut()
					.then(() => {
						return (this.isLogin = false);
					});
			},
		},
	};
</script>
