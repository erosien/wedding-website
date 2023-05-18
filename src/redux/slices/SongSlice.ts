import { createSlice } from '@reduxjs/toolkit'

const songSlice = createSlice({
    name: "song",
    initialState: {
        title: "Title",
        artist: "Artist",
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseArtist: (state, action) => { state.artist = action.payload },
    }
})

export const reducer = songSlice.reducer
export const { chooseTitle, chooseArtist } = songSlice.actions