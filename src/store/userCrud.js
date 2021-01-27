export const userCrud = {
 state: {
  users: [],
  updatedData : []
 },
 mutations: {
 setUsers(state , data) {
   state.users = data;
  },
  setUserInfo(state , data) {
   state.updatedData = data;
  }
 },
 actions: {
 
}
}