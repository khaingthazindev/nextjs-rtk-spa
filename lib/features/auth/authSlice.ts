import {createAppSlice} from "@/lib/createAppSlice";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {API_URL} from "@/lib/config";

export interface AuthState {
  token: string;
}
const initialState: AuthState = {
  token: '',
};

export interface AuthUser {
  username: string;
  password: string;
}

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    loginAsync: create.asyncThunk(
      async (user: AuthUser, {rejectWithValue}) => {
        const response = await fetch(`${API_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const json = await response.json();
        if (json.token) {
          return (json as AuthState);
        }
        return rejectWithValue(json);
      },
      {
        pending: (state) => {
        
        },
        fulfilled: (state, action) => {
          console.log('fulfilled action: ', action);
          state.token = action?.payload?.token??'';
        },
        rejected: (state, action) => {
          console.log('rejected: ', action);
          state.token = '';
        },
      },
    ),
    logout: create.reducer((state) => {
      state.token = '';
    }),
  }),
  selectors: {
    selectAuth: (state) => state.token,
  },
});

export const {loginAsync, logout} = authSlice.actions;
export const {selectAuth} = authSlice.selectors;