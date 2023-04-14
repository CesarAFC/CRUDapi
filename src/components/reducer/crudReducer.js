import { TYPES } from "./crudActions";

export const crudInitialState = {
    db: null,
}

export function crudReducer (state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA: {
            return {
                ...state,
                db: action.payload
            }
        }
        case TYPES.READ_ONE_DATA: {

        }
        case TYPES.UPDATE_DATA: {
            //Este es un nuevo array con los datos 
            let newData = state.db.map(element => element.id === action.payload.id ? action.payload : element);
            return {
                ...state,
                db: newData
            }
        }
        case TYPES.CREATE_DATA: {
            return {
                ...state,
                db: [...state.db, action.payload]
            }
        }
        case TYPES.DELETE_DATA: {
            let newData = state.db.filter(el => el.id !== action.payload);
            return {
                ...state,
                db: newData,
            }
        }
        case TYPES.NO_DATA: 
            return crudInitialState
        default:
            return state
    }
} 