import ScrollAnimation from "./scrollanimation2"

export default function AboutCard ({img, text}){

    return(
        <ScrollAnimation>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "center",
          alignItems: "center",
          justifyItems: "center",
          marginTop:"2rem"
        }}
      >
        
        <img src={img} alt="" width={"300px"} />
        
        <p style={{ fontSize: "3rem" }}>
          {text}
        </p>
        
      </div>
      </ScrollAnimation>
    )
}