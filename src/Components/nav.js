import '../styles/nav.css'

export const Navbar = ({board, returnStart}) => {



return (
    <nav className="nav-bar">
        {board === null ? null 
        : 
        <button 
        className="return"
        onClick={() => returnStart()}
        >Return to Select Screen</button>}
        <h1 className="logo">Console Search</h1>
    </nav>
)

}