import { createAction, props } from '@ngrx/store';
import {User} from '../../model/user.model';

export const login = createAction(
  '[UserModel] Login UserModel',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[UserModel] Login UserModel Success',
  props<{ payload: any }>()
);

export const loginFailure = createAction(
  '[UserModel] Login UserModel Failure',
  props<{ errorMessage: string }>()
);


export const singUp = createAction(
  '[UserModel] Signup UserModel',
  props<{ user: User }>()
);

export const signUpSuccess = createAction(
  '[UserModel] Signup UserModel Success',
  props<{ payload: any }>()
);

export const signUpFailure = createAction(
  '[UserModel] Signup UserModel Failure',
  props<{ errorMessage: string }>()
);
