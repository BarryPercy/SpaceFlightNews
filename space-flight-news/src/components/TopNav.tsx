import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopNav=()=>{
    return(
        <Navbar bg="dark" className="navbar-dark" expand="lg">
            <Navbar.Brand href="#home"><Link to="/" className="nav-link">Space Flight News</Link></Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
        </Navbar>
    )
}

export default TopNav