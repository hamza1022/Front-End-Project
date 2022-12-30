import { createSlice,current } from "@reduxjs/toolkit";

type userType = {
    firstName:string,
    lastName:string,
    userName:string,
    email:string,
    phoneNumber:string,
    password:string,
}

type initialStateType = {
    
    usersList : userType[] 

} 
const initialState:initialStateType = {
    usersList : []

}



export const UserSlice = createSlice ({
    name: "Users",
    initialState,

    reducers:{
        addUserInfo(state,action){

            state.usersList.push(action.payload)

        }
        

    }
})
export const {addUserInfo} = UserSlice.actions
export default UserSlice.reducer