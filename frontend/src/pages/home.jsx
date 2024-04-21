import { SearchUi } from "../components/SearchUi"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
function Search () {
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:"column", gap:"10px"}}>
            <Navbar/>
            <SearchUi/>
            <Footer/>

        </div>
    )
}

export default Search