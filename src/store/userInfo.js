    export const userInfo ={
    state: {
        showLoginModal : false,
         isLoggedIn: false,
         AuthenticatedUser : ""
    },
    getters: {
        changeShowLoginModal(state) {
            state.showLoginModal = true;
      }  
    },
    mutations: {
     setAuthenticatedUser(state , payload) {
      state.isLoggedIn = true;
      state.AuthenticatedUser = payload;
     }
    }
}

