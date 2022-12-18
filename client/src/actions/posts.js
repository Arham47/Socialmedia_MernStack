import * as api from "../api"
//action creator 
export const getPost=()=>async (dispatch)=>{
    try {
        const {data}= await api.fetchPost();
        dispatch({type:"FETCH_ALL",payload:data})

    } catch (error) {
        console.log(error.message)
        
    }
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}= await api.createPost(post);
        dispatch({type:"Create",payload:data})

    } catch (error) {
        console.log(error.message)
        
    }

}