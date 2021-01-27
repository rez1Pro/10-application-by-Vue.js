export const userInfo ={
    state: {
            showLoginModal : false,
            isLoggedIn: false,
            AuthenticatedUser : ""
        },
        getters: {
            getShowLoginModal(state) {
                return state.showLoginModal = true;
            }            
        },
    mutations: {
        setIsLoggedIn(state , payload) {
            state.isLoggedIn = payload;
        },
        setShowLoginModal(state , payload) {
            state.showLoginModal = payload
        },
       setAuthenticatedUser(state , payload) {
            state.AuthenticatedUser = payload;  
        }
    }
}

