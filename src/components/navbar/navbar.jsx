import './navbar.css'
import logo from '@/assets/images/TrollFace.svg'

const Navbar = () => {
    return(
        <nav>
            <div className='logo'><img src={logo} alt="" /><h2>Meme Generator</h2></div>
            <div><p>React Course - Project 3</p></div>
        </nav>
    )
}

export default Navbar