import "./animatedtext.css"

export default function AnimatedText() {
    return (
        <div className="animated" style={{display:'flex', flexDirection:'row', gap:"0.5rem"}}>
            <div className="text-container">
                <span className="please">Please </span>
                <div className="search-container">
                    <div className="search">
                        <span>Search</span>
                    </div>
                </div>
            </div>
            <div className="dots-container">
                <span className="dot dot1">.</span>
                <span className="dot dot2">.</span>
                <span className="dot dot3">.</span>
            </div>
        </div>
    );
}