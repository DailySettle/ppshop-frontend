import {Action, createReducer, on} from '@ngrx/store';
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
    (state, {payload}) => ({...state, user: new User(payload.username, ''), isAuthenticated: true})),
  on(UserActions.loginFailure,
    (state, {errorMessage}) => ({...state, errorMessage})),
  on(UserActions.logout,
    (state) => ({...state, isAuthenticated: false})),
);

