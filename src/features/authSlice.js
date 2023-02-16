import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialLoginState = {
  user: null,
  userData: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
};

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, {
      username: user.username,
      email: user.email,
      password: user.password,
      roleuser: user.roleuser
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    } else if (error.request) {
      const message = error.request.data.msg;
      return thunkAPI.rejectWithValue(message);
    } else if (error.message) {
      const message = error.message.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, {
      identifier: user.email,
      password: user.password
    });
    localStorage.setItem('jwt', response.data.jwt);

    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMe = createAsyncThunk('user/getMe', async (jwt, thunkAPI) => {
  const options = {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  };
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/me?populate=img`,
      options
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logoutUser = createAsyncThunk('user/logoutuser', async () => {
  const jwt = localStorage.getItem('jwt');
  const user = localStorage.getItem('user');
  if (jwt && user) {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    reset: (reset) => initialLoginState
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    /* get status login */
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    /* register state */
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
