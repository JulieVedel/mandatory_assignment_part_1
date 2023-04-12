import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { closeDialog } from '../create/createBlogSlice'

export default function Dialog() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isVisibleFlag = useSelector((state) => state.createBlog.isVisible)
    

    if (isVisibleFlag === false) {
        return null
    }

    function handleClick() {
        dispatch(closeDialog())
        navigate('/')
    }

    function handleSubmit() {
        dispatch(closeDialog())
    }

    return (
        <div className="background">
            <div className="popup">
                <h2>Din blog er blevet oprettet!</h2>
                <div className="popupKnapper">
                    <button className="knap" onClick={handleSubmit}>Tilføj ny blog</button>
                    <button className="knap" onClick={handleClick}>Se alle blogs</button>
                </div>
            </div>
        </div>
    )
}