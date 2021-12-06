import {configureStore} from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
// ...
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
export const store = configureStore({
  reducer: {
    //@ts-ignore
    router: connectRouter(history)
  }
  // The thunk middleware was automatically added by reduxjs/toolkit
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 