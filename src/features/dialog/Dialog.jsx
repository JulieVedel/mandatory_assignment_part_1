import { useNavigate } from "react-router-dom"

export default function Dialog() {
    const navigate = useNavigate()

    return (
        <div className="background">
            <div className="popup">
                <h2>Din blog er blevet oprettet!</h2>
                <div className="popupKnapper">
                    <button className="knap">Tilføj ny blog</button>
                    <button className="knap" onClick={() => navigate('/')}>Se alle blogs</button>
                </div>
            </div>
        </div>
    )
}