import { SearchUi } from "../components/SearchUi"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ScrollAnimation from "../components/scrollanimation"
function Search () {
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:"column", gap:"10px"}}>
            <ScrollAnimation>
            <Navbar/>
            <SearchUi/>
            <Footer/>
            </ScrollAnimation>

        </div>
    )
}

export default Search