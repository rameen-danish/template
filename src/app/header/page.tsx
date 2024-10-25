export default function Header(){
    return(
        <div className="header">
        <div className="header-button">
            <div className="pr-10"><img src="Logo.png" alt="cyber-logo"/></div>
            <div className="pr-10"><input type="text" size={40} maxLength={30} placeholder="Search" className="bg-gray-100 rounded p-3" /></div>
            <ul>
                <li className="text-black">Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Blog</li>
            </ul>
            <div className="icons">
                <ul>
                    <li><img src="Favorites.png" alt="fav-logo"/></li>
                    <li><img src="Cart.png" alt="cart-logo"/></li>
                    <li><img src="User.png" alt="user-logo"/></li>
                </ul>
             </div>
        </div>
    </div>
    )
}