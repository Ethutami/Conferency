import { Event } from "@/interfaces/events.interface";
import { fetchCategoriesById } from "@/services/categories.service";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const categoryFilter = createAsyncThunk(
  "events/eventsSlice",
  async (id: number) => {
    const data = await fetchCategoriesById(id);
    return data;
  }
);

interface EventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryFilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(categoryFilter.fulfilled, (state, action: PayloadAction<Event[]>) => {
        state.loading = false;
        state.events = action.payload; // simpan hasil fetch terbaru
      })
      .addCase(categoryFilter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch category";
      });
  },
});

export default eventsSlice.reducer;