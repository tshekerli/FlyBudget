import NotFoundImage from "../img/404404.png";
import ButtonComponent from "../components/button";
import { useNavigate } from "react-router-dom";
import SlidingImage from "../components/Sliding404image";
import Footer from "../components/footer";
import { WidthFull } from "@mui/icons-material";
import Navbar from "../components/navbar";
import ScrollAnimation from "../components/scrollanimation";

function NotFoundPage() {
  const navigate = useNavigate();

  const TakeMeHome = () => {
    navigate("/");
  };

  return (
    <ScrollAnimation>
    <div className="page404"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh",
        flexDirection: "column",
        gap: "2rem",
        margin: "0",
        overflow:"hidden"
        
      }}
    >
        
      <div className="img404">
        <SlidingImage />
      </div>
      <div style={{height:"150px"}}>
        <ButtonComponent
          id="takemehome"
          text={"Take Me Home, Country Roads "}
          onClick={TakeMeHome}
          style={{
            borderRadius: "500px",
            color: "#747474",
            fontSize: "1.25rem",
          }}
        />
      </div>
      <div style={{ width: "100%", alignSelf:"flex-end" }}>
        <Footer />
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default NotFoundPage;
