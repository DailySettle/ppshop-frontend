import { createAction, props } from '@ngrx/store';
import {User} from '../../model/user.model';

export const login = createAction(
  '[User] Login User',
  props<{ user: User }>()
);

export const loginSuccess = createAction(
  '[User] Login User Success',
  props<{ payload: any }>()
);

export const loginFailure = createAction(
  '[User] Login User Failure',
  props<{ errorMessage: string }>()
);

export const signUp = createAction(
  '[User] Signup User',
  props<{ user: User }>()
);

export const signUpSuccess = createAction(
  '[User] Signup User Success',
  props<{ payload: any }>()
);

export const signUpFailure = createAction(
  '[User] Signup User Failure',
  props<{ errorMessage: string }>()
);

export const logout = createAction(
  '[User] Logout User'
);
