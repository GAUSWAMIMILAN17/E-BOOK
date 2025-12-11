import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allBooks: [],
    allAdminBooks: [],
    singleBook: null,
    searchBookByText: [],
    setAllOrders: [],
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setAllBooks(state, action) {
            state.allBooks = action.payload;
        },
        setSingleBook(state, action) {
            state.singleBook = action.payload
        },
        setAllAdminBooks(state, action) {
            state.allAdminBooks = action.payload
        },
        setAllOrders(state, action) {
            state.allPlacedBooks = action.payload
        },
        setSearchBookByText(state, text){
            state.searchBookByText = action.payload
        }
    }
})

export const {setAllAdminBooks,setAllBooks,setSingleBook,setSearchBookByText,setAllPlacedBook} = bookSlice.actions

export default bookSlice.reducer