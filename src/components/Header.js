import '../assets/css/header.css'
import { FaTimes } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header d-flex justify-content-center">
            <div className="worning-url d-flex justify-content-center align-self-center">
                <span className="worning-topic align-self-center">PHISHING WARNING:</span>
                <span className="worning-content align-self-center">Please make sure you're visiting https://moneydefiswap.net/ - check the URL carefully. </span>
            </div>
            <FaTimes className='worning-cancel align-self-center' />
        </div>
    )
}

export default Header;