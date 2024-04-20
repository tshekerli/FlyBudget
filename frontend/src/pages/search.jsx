import { SearchUi } from "../components/SearchUi"
import Navbar from "../components/navbar"

function Search () {
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:"column", gap:"10px"}}>
            <Navbar/>
            <SearchUi/>
        </div>
    )
}

export default Search