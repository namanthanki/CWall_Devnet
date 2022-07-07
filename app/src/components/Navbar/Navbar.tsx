import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/" className="navbar-logo">CWall</a>
            </div>
            <div className="navbar-links">
                <a href="/create" className="navbar-item">Create</a>
                <a href="/explore" className="navbar-item">Explore</a>
                <a href="/community" className="navbar-item">Community</a>
                <a href="/faq" className="navbar-item">FAQs</a>
                <a href="/contact" className="navbar-item">Contact</a>
                <a href="/about" className="navbar-item">About</a>
            </div>
        </nav>
    )
}

export default Navbar;