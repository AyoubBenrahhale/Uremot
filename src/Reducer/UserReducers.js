import * as actionsFile from '../action/actionsFile'

const initialState ={
    list:[],
   }

export default(state=initialState,action)=>{
    switch(action.type){
        case actionsFile.GET_REPO:
            return{
                list:action.Repos
            }
        
        default:
        return state
    }
}
