import { residentsReducer } from "./residents.reducer";
import { ActionReducerMap } from "@ngrx/store/src/models";



export const reducers: ActionReducerMap<any> = {
  residentsReducer: residentsReducer
};