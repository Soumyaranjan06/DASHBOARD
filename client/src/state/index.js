// import { createSlice } from "@reduxjs/toolkit";

// const intialState={
//     mode:"dark"
// };

// export const globalSlice=createSlice({
//     name:"global",
//     intialState,
//     reducers:{
//         setMode:(state)=>{
//               state.mode=state.mode==='light' ? "dark" : "light";
//         }
//     }
// })

// export const {setMode}=globalSlice.actions;
// export default globalSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {  // Corrected spelling here
    mode: "dark",
    userId:"63701cc1f03239b7f700000e"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,  // Corrected spelling here
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
