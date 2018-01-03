import { ActionReducerMap } from "@ngrx/store/src/models";
import { residentsReducer } from "./residents.reducer";



export const reducers: ActionReducerMap<any> = {
  residents: residentsReducer
};[]