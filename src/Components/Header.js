
import '../Styles/Header.css'
const Header =({PagesLayout}) => {
    return (
        <div className="header">
            <h1>{PagesLayout.header}</h1>
        </div>
    ) 
}

export default Header;