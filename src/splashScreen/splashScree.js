import React from 'react'
import img from './g0R9.gif'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import side from "../../assets/sideLogo.png";

/**
* @author
* @function SplashScreen
**/
// import './splashScreen.css'
const SplashScreenComponent = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <img src={img} style={{ height: "30%" }} />
      {/* <div class="loading"></div> */}
    </div>
  );

}

export default SplashScreenComponent