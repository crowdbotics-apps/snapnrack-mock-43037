import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_project_info_list = createAsyncThunk("project_infos/api_v1_project_info_list", async payload => {
  const response = await apiService.api_v1_project_info_list(payload);
  return response.data;
});
export const api_v1_project_info_create = createAsyncThunk("project_infos/api_v1_project_info_create", async payload => {
  const response = await apiService.api_v1_project_info_create(payload);
  return response.data;
});
export const api_v1_project_info_retrieve = createAsyncThunk("project_infos/api_v1_project_info_retrieve", async payload => {
  const response = await apiService.api_v1_project_info_retrieve(payload);
  return response.data;
});
export const api_v1_project_info_update = createAsyncThunk("project_infos/api_v1_project_info_update", async payload => {
  const response = await apiService.api_v1_project_info_update(payload);
  return response.data;
});
export const api_v1_project_info_partial_update = createAsyncThunk("project_infos/api_v1_project_info_partial_update", async payload => {
  const response = await apiService.api_v1_project_info_partial_update(payload);
  return response.data;
});
export const api_v1_project_info_destroy = createAsyncThunk("project_infos/api_v1_project_info_destroy", async payload => {
  const response = await apiService.api_v1_project_info_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const project_infosSlice = createSlice({
  name: "project_infos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_project_info_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_project_info_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_project_info_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_project_info_list,
  api_v1_project_info_create,
  api_v1_project_info_retrieve,
  api_v1_project_info_update,
  api_v1_project_info_partial_update,
  api_v1_project_info_destroy,
  slice: project_infosSlice
};