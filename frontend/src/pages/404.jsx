import NotFoundImage from "../img/404404.png"
import ButtonComponent from '../components/button';
import { useNavigate } from 'react-router-dom';




function NotFoundPage () {
    const navigate = useNavigate();

    const TakeMeHome = () => {
        
        navigate('/')}

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", flexDirection:"column", gap:"2rem"}}>
            <img src={NotFoundImage} width={"500px"} alt="" style={{borderRadius: "10%"}} />
            <ButtonComponent id="takemehome" text={"Take Me Home, Country Roads "} onClick={TakeMeHome} style={{borderRadius:"500px", color:"#747474", fontSize:"1.25rem"}}/>
        </div>
    )
}

export default NotFoundPage