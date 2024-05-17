import {Link} from 'react-router-dom'
import {NavBar} from '../styles/Header'

const Header = () => {
    
    return(
        <NavBar>
            <Link to={"/"}>Home</Link>
            <Link to={"/tracks"}>To Tracks</Link>
            <Link to={"/artist"}>To Artist</Link>
        </NavBar>
    )
}





export default Header