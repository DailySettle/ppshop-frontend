import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {User} from '../../model/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  errorMessage: string | null;
}

export const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  errorMessage: null
};


export const reducer = createReducer(
  initialState,

  on(UserActions.loginSuccess,
    (state, action) => ({...state, user: new User(action.payload.username, ''), isAuthenticated: true})),
  on(UserActions.loginFailure,
    (state, action) => ({...state, errorMessage: action.errorMessage})),

);

