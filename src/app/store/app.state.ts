import { PostState } from '../posts/state/posts.state';
import { counterReducer } from '../state/counter.reducer';
import { postsReducer } from '../posts/state/posts.reducer';
import { CounterState } from '../state/counter.state';

//states of the app
export interface AppState {
  counter: CounterState;
  posts: PostState;
}

//reducers of the app
export const appReducer = {
  counter: counterReducer,
  posts: postsReducer
};
