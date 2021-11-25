import React from "react";

import Index from "./view/dashboard";
import { getUserData, dailyCountDown } from "./redux/action/index";
import { useDispatch } from "react-redux";
import SplashScreenComponent from "./splashScreen/splashScree";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({
  Useraccount,
  txiContract,
  ConnectToWallet,
  connectBinanceWallet,
}) {
  const dispatch = useDispatch();
  const [splash, setSplashScren] = React.useState(true);

  React.useEffect(() => {
    if (Useraccount !== undefined && txiContract !== undefined) {
      setInterval(async () => {
      dispatch(getUserData(Useraccount, txiContract));
      }, 500)
    }
  });

  React.useEffect(() => {
    if (Useraccount !== undefined && txiContract !== undefined) {
      dispatch(dailyCountDown(Useraccount, txiContract));
    }
  }, [Useraccount, txiContract]);

  React.useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 42);
      localStorage.setItem("tiger_ref", final);
    }
  }, []);

  // console.log("Useraccount===App.js", Useraccount);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScren(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (splash) {
    return <SplashScreenComponent />;
  } else
    return (
      <div>
        <ToastContainer />

        <Index
          Useraccount={Useraccount}
          ConnectToWallet={ConnectToWallet}
          connectBinanceWallet={connectBinanceWallet}
        />
      </div>
    );
}

export default App;
