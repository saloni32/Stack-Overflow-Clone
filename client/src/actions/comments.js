import * as api from '../api/index'

export const addComment = (CommentData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postComment(CommentData)
        dispatch({ type: "ADD_COMMENT", payload: data})
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllQuestions = () => async (disptach) => {
    try {
        const { data } = await api.getAllQuestions()
        disptach({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}