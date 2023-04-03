import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <div id="navbarDiv">
            <nav id="navbar">
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/create'>Create blog</Link>
                    <Link to='/about'>About</Link>
                </div>
                <h1>Julies Blog-base</h1>
            </nav>
        </div>
    )
}