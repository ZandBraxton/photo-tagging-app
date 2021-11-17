import '../styles/nav.css'
export const Navbar = ({board, returnStart, viewLeaderboard, setViewLeaderboard}) => {



return (
    <nav className="nav-bar">
        {board === null ? null 
        : 
        <button 
        className="return"
        onClick={() => returnStart()}
        >Return to Select Screen</button>}
        {viewLeaderboard === undefined ? null 
        : 
        <button 
        className="return"
        onClick={() => returnStart()}
        >Return to Select Screen</button>}
        <h1 className="logo">Console Search</h1>
        <button
        className="view-leaderboard"
        onClick={() => setViewLeaderboard(!viewLeaderboard)}
        >View Leaderboard</button>
    </nav>
)

}