import React from "react";
import "../style/index.css";
import Cards from "./Cards.jsx";
import FooterCard from "./FooterCard.jsx";
import Join from "./Join";
import PersonalStatics from "./PersonalStatics.jsx";
import Statics from "./Statics";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Index({
  Useraccount,
  ConnectToWallet,
  connectBinanceWallet,
}) {
  const CloseModal = () => {
    let idw = (document.getElementById("connect-wallet-modal").style.display =
      "none");
    // document.getElementById("xmain").style.opacity = "0.1"
    console.log(idw);
  };

  React.useEffect(async () => {
    if ((await Useraccount) === undefined) {
      document.getElementById("connect-wallet-modal").style.display = "block";
    } else {
      document.getElementById("connect-wallet-modal").style.display = "none";
    }
  }, [Useraccount]);

  const changeWallet=()=>{
    document.getElementById("connect-wallet-modal").style.display = "block";
  }

  const HideModalComponent = () => {
    document.getElementById("connect-wallet-modal").style.display = "none";
  };

  // const ConnectToWallet = () => {
  //   alert("yes Hassan")
  //   // ()
  //   // window.ethereum.request({ method: 'eth_requestAccounts' });
  // }

  const walletCode = (
    <div
      id="connect-wallet-modal"
      class="modal effect-scale show"
      aria-modal="true"
      role="dialog"
      style={{ paddingRight: "4px", display: "block" }}
    >
      <div role="document" class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-demo">
          <div class="modal-header">
            <h6 class="modal-title">Connect to a wallet</h6>
            <button
              aria-label="Close"
              data-dismiss="modal"
              type="button"
              onClick={CloseModal}
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-body">
                <div class="main-media-list-activity">
                  <div
                    class="media cursor-pointer py-2 px-1 border"
                    onClick={ConnectToWallet}
                  >
                    <div class="media-body mt-2">
                      <h6>MetaMask</h6>
                    </div>
                    <div class="media-icon bg-success-transparent mr-2">
                      <img src="/images/metamask.svg" />
                    </div>
                  </div>
                  <div
                    class="media cursor-pointer py-2 px-1 border"
                    onClick={ConnectToWallet}
                  >
                    <div class="media-body mt-2">
                      <h6>Trust Wallet</h6>
                    </div>
                    <div class="media-icon bg-success-transparent mr-2">
                      <img src="/images/trust.svg" />
                    </div>
                  </div>
                  <div
                    class="media cursor-pointer py-2 px-1 border"
                    onClick={connectBinanceWallet}
                  >
                    <div class="media-body mt-2">
                      <h6>Binance Chain Wallet</h6>
                    </div>
                    <div class="media-icon bg-success-transparent mr-2">
                      <img src="/images/binancechainwallet.svg" />
                    </div>
                  </div>
                  <div
                    class="media cursor-pointer py-2 px-1 border"
                    onClick={ConnectToWallet}
                  >
                    <div class="media-body mt-2">
                      <h6>Safepal Wallet</h6>
                    </div>
                    <div class="media-icon bg-success-transparent mr-2">
                      <svg
                        width="32"
                        height="32"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31 35.4"
                      >
                        <title>形状结合</title>
                        <path
                          d="M31 20.5V23c0 7-10.2 11-13.3 12l-1.1.4v-4.3l.6-.2C22.1 29.1 27 26 27 23v-2.5h4zM15.5 0l4.2 1.3v4.4l-4.2-1.3-.3.1v9.9h4.4v4.1h-4.4v16.8l-1.2-.4c-.5-.2-1.4-.5-2.5-1l-.5-.2V1.3L15.5 0zM9.8 1.8v4.4L4.1 7.9v6.5h5.7v18.9l-1.3-.6c-3.9-2-8.5-5.3-8.5-10v-2.2h4.1v2.2c0 1 .5 2 1.5 3v-7.2H0V4.7l9.8-2.9zm11.1-.1l10 3.1v13.8H25v6s-1.3 1.7-4.1 3.1v-26zm4.2 5.6v7.1h1.8V7.9l-1.8-.6z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#050101"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <h6>
              <a href="#">
                <i class="bx bx-question-mark text-primary"></i> Learn how to
                connect
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );

  const getReducer = useSelector((state) => state.UserReducer);
  const [hoursForPakageOne, sethoursForPakageOne] = React.useState(0);
  const [minutesForPakageOne, setminutesForPakageOne] = React.useState(0);
  const [secondsForPakageOne, setsecondsForPakageOne] = React.useState(0);

  const {
    checkpiontTimer,
    walletBalance,
    getContractBalance,
    bnbToUsd,
  } = getReducer;

  const oneDay = 24 * 60 * 60 * 1000;
  const secondDate = new Date();

  //timer for package one
  const intervalForPackageOne = (countDownDate) => {
    let intervalVarForPkgOne = setInterval(() => {
      const now = new Date().getTime();
      // var today = new Date();
      // today.setHours(today.getHours() + 239, today.getMinutes() + 50);
      // const now = today.getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // setIsButtonTrueForPkgOne(false);
        clearInterval(intervalVarForPkgOne);
      } else {
        // setIsButtonTrueForPkgOne(true);

        // setdaysForPackageOne(days);
        sethoursForPakageOne(hours);
        setminutesForPakageOne(minuts);
        setsecondsForPakageOne(seconds);
      }
    }, 1000);
  };

  const timeFunctionForPkgOne = async (intervalForPackageOne) => {
    const firstDate = moment.unix(checkpiontTimer);
  // console.log("here is the first date===>", firstDate);
    const getAlldays = Math.round(
      Math.abs((+firstDate - +secondDate) / oneDay)
    );

    let tomorrow = moment(firstDate)
      .add(getAlldays + 10, "m")
      .toISOString();
    let check = new Date(tomorrow).getTime();
    intervalForPackageOne(check);
  };

  React.useEffect(() => {
    if (checkpiontTimer) {
      timeFunctionForPkgOne(intervalForPackageOne);
    }
  }, [checkpiontTimer]);

  return (
    // sidenav-toggled
    <>
      <div
        className="main-body app sidebar-mini dark-theme"
        onClick={HideModalComponent}
      >
        <div>
          <div className="page">
            <div className="main-content singlemenu">
              {/* <div class="main-header main-header-fixed" style={{}}>
                <div class="container-fluid">
                  <div
                    class="main-header-center"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <div class="setLogoCenter" style={{ color: "white" }}>
                      <h5 class="mb-1">
                        <img src="/logo (2).png" style={{ width: "50px" }} />
                      </h5>
                    </div>
                    <div class="setLogoCenter" style={{ color: "white" }}>
                      <h1 class="mb-1">
                        Contract Balance:{" "}
                        {getContractBalance ? getContractBalance : 0}
                      </h1>
                    </div>
                    <div
                      class="header-breadcrumb settimeCenter"
                      style={{
                        color: "white",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <h5 class="mb-1" style={{ paddingRight: 10 }}>
                        Daily Income Countdown:{" "}
                        {`${hoursForPakageOne}:${minutesForPakageOne}:${secondsForPakageOne}`}
                      </h5>
                      <h5 class="mb-1">
                        Balance:{" "}
                        {walletBalance
                          ? parseFloat(walletBalance).toFixed(4)
                          : 0}{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="top-header">
                <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                  <img src="/logo (2).png" style={{ width: "50px" }} />
                </div>
                <div>
                  <h1>
                    Contract Balance:{" "}
                    {getContractBalance
                      ? (getContractBalance * bnbToUsd).toFixed(3)
                      : 0}{" "}
                    USD
                  </h1>
                </div>
                <div>
                  <div>
                    Daily Income Countdown:{" "}
                    {`${hoursForPakageOne}:${minutesForPakageOne}:${secondsForPakageOne}`}
                  </div>
                  <div>
                    <h5>
                      Wallet Balance:{" "}
                      {walletBalance ? (parseFloat(walletBalance)*bnbToUsd).toFixed(4) : 0}{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="container-fluid" style={{ color: "white" }}>
                <div className="main-content-body">
                  <div className="main-content-body">
                    <div class="header-title">
                      <div class="mb-0 mb-lg-0 mb-xl-0"></div>
                    </div>

                    <Statics changeWallet={changeWallet} />
                    <Join />
                    <PersonalStatics />
                    {/* <Cards /> */}
                    <FooterCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {walletCode}
      </div>
    </>
  );
}
