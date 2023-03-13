import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Comment.css'
import { addComment } from '../../actions/comments'
const Comment=()=>
{
    const [ comment, setComment ] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment({comment, userPosted: User.result.name }, navigate))
    }
    return(
        <div>
            <div>
                <h1>Comment</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="add-comment">
                            <h4>Add your comment</h4>
                            <input type="text" id='add-comment' onChange={(e) => {setComment(e.target.value)}} placeholder='comment'/>
                    </label>
                    <input type="submit" value='Add' className='review-btn'/>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Comment