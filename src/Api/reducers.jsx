import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return res?.json();
 });
 export const AddProduct = createAsyncThunk("AddProduct", async (data) => {
  
    const res = await axios.post(` https://jsonplaceholder.typicode.com/posts`,data);
    return res;
 });
 export const UpdateProduct = createAsyncThunk("UpdateProduct", async (data) => {
  
   // let id=id.formData.id
    const res = await axios.put(` https://jsonplaceholder.typicode.com//posts/${data}
    `,data);
     return res?.json();
 });
 export const DeleteProduct = createAsyncThunk("DeleteProduct", async (data) => {
   
    const res = await axios.delete(` https://jsonplaceholder.typicode.com/posts/${data}`);
    console.log(res,"ress")
    return res;
 });

 const Tableslice= createSlice({
name:"table",

initialState:{
    isLoading:false,
    data:[],
    isError:false
},  reducers: {},

extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
     state.isLoading = true;
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
     state.isLoading = false;
     state.data = action.payload;
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
     state.isError = true;
    })
    builder.addCase(AddProduct.pending, (state, action) => {
        state.isLoading = true;
       })
       builder.addCase(AddProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       builder.addCase(AddProduct.rejected, (state, action) => {
         console.log(state,action,"action")
        state.isError = true;
       })
       builder.addCase(UpdateProduct.pending, (state, action) => {
        state.isLoading = true;
       })
       builder.addCase(UpdateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       builder.addCase(UpdateProduct.rejected, (state, action) => {
        state.isError = true;
       })
       builder.addCase(DeleteProduct.pending, (state, action) => {
        state.isLoading = true;
       })
       builder.addCase(DeleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
       })
       builder.addCase(DeleteProduct.rejected, (state, action) => {
        state.isError = true;
       })
   }
 })
 export default Tableslice.reducer;
