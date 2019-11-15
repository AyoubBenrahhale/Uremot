import * as actionsFiles from './actionsFile'

export const updateListRepo =(Repos)=>dispatch =>{
    dispatch({
        type:actionsFiles.GET_REPO,
        Repos:Repos
    })
}

