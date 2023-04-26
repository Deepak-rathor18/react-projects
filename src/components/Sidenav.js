const Sidenav = () => {
    let imgstyle ={
        width: "100px",
        height:"100px",
        borderRadius:"100%",
    }
    return(
        <div className="sidenav">
            <div><img style={imgstyle} src="https://media.licdn.com/dms/image/D4D03AQHwY1GdVgOHCQ/profile-displayphoto-shrink_400_400/0/1670752710351?e=1687996800&v=beta&t=jcWeLHwiIz2NHa4jBzK0E2jn2MdltnNr6NSNXuWQ89Y"/></div>
            <div className="Div">Home</div>
            <div className="Div">Student</div>
            <div className="Div">Teachers</div>
            <div className="Div">Result</div>
            <div className="Div">Logout</div>
        </div>
    )
}
export default Sidenav