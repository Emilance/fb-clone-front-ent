import { ActionTypes } from "../Constant/Action-type"

export const toggleMenu = ()=> {
    return{
        type: ActionTypes.TOGGLE_MENU,
        payload:null
    }
}