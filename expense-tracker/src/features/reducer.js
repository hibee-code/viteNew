import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tracks:[],
  track:{}
}

export const counterSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    //action = CRUD- create(add,,read,update,delete)

    add:function (initialState, action){
        return{ tracks: [...initialState.tracks, action.payload], track:{} };
    }

    
  }
})

// Action creators are generated for each case reducer function
export const { add, read, updating, remove } = counterSlice.actions //name export

export default counterSlice.reducer //default export