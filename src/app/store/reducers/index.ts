import { ActionReducerMap } from "@ngrx/store/src/models";
import { residentsReducer } from "./residents.reducer";
import { facilitiesReducer } from "./facilities.reducer";



export const reducers: ActionReducerMap<any> = {
  residents: residentsReducer,
  facilities: facilitiesReducer
};