import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdContentCopy } from "react-icons/md";
import { AiFillCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import moment from "moment";
import { JustSwapApi } from "../../redux/action";
import { toast } from "react-toastify";
export default function Statics({ changeWallet }) {
  const getReducer = useSelector((state) => state.UserReducer);

  // const [daysForPakageOne, setdaysForPackageOne] = React.useState(0);
  const [hoursForPakageOne, sethoursForPakageOne] = React.useState(0);
  const [minutesForPakageOne, setminutesForPakageOne] = React.useState(0);
  const [secondsForPakageOne, setsecondsForPakageOne] = React.useState(0);

  const {
    deposits,
    referals,
    getuserteamDepoists,
    userAccountAddress,
    direactbouns,
    matchbouns,
    dailyPayment,
    totalteamDeposits,
    teamCount,
    getUserDividend_withdrawable,
    IncomeLeft,
    userTotalDeposit,
    totalwithDrawn,
    checkpiontTimer,
    amountForInsurance,
    thirtyPercentReinvestable,
    bnbToUsd,
    userCurrentLevel,
    walletBalance
  } = getReducer;

  const dispatch = useDispatch();
  // const oneDay = 24 * 60 * 60 * 1000;
  // const secondDate = new Date();

  // //timer for package one
  // const intervalForPackageOne = (countDownDate) => {
  //   let intervalVarForPkgOne = setInterval(() => {
  //     const now = new Date().getTime();
  //     // var today = new Date();
  //     // today.setHours(today.getHours() + 239, today.getMinutes() + 50);
  //     // const now = today.getTime();

  //     const distance = countDownDate - now;
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       // setIsButtonTrueForPkgOne(false);
  //       clearInterval(intervalVarForPkgOne);
  //     } else {
  //       // setIsButtonTrueForPkgOne(true);

  //       // setdaysForPackageOne(days);
  //       sethoursForPakageOne(hours);
  //       setminutesForPakageOne(minuts);
  //       setsecondsForPakageOne(seconds);
  //     }
  //   }, 1000);
  // };

  // const timeFunctionForPkgOne = async (intervalForPackageOne) => {
  //   const firstDate = moment.unix(checkpiontTimer);
  //   const getAlldays = Math.round(
  //     Math.abs((+firstDate - +secondDate) / oneDay)
  //   );

  //   let tomorrow = moment(firstDate)
  //     .add(getAlldays + 1, "d")
  //     .toISOString();
  //   let check = new Date(tomorrow).getTime();
  //   intervalForPackageOne(check);
  // };

  // React.useEffect(() => {
  //   if (checkpiontTimer) {
  //     timeFunctionForPkgOne(intervalForPackageOne);
  //   }
  // }, [checkpiontTimer]);

  React.useEffect(() => {
    dispatch(JustSwapApi());
  }, []);

  return (
    <div>
      <div className="row row-sm mb-3">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="card mb-xl-0" style={{ height: "100%" }}>
            <div class="card-body pb-0 border-bottom-0">
              <div class="mb-3">
                <h6 class="card-title mb-2">Personal Statistics</h6>
              </div>
            </div>
            <div class="card-body p-0 pb-3 border-0">
              <div class="browser-stats">
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i
                      class=" text-warning bg-warning-transparent mr-3"
                      style={{ fill: "white !important", fontSize: "1.5em" }}
                    >
                      {" "}
                      <AiFillCopy />
                    </i>
                    <p class="fs-16 mt-1 mb-0">My Address</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      {/* <a href="//bscscan.com/address/" target="_blank"> */}
                      <span class="mr-4 mt-1 fs-16">
                        {userAccountAddress
                          ? userAccountAddress.slice(0, 5) +
                            "...." +
                            userAccountAddress.slice(35, 43)
                          : "...."}
                      </span>
                      {/* </a> */}
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-log-in text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Deposit</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {userTotalDeposit
                          ? (bnbToUsd * userTotalDeposit).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="fab fa-edge text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Invitation Link</p>
                  </div>
                  <CopyToClipboard
                    onCopy={() => toast.success("copied!")}
                    text={
                      window.location.origin + "/?ref=" + userAccountAddress
                    }
                    // onCopy={() => toast.success("Link Copied!")}
                  >
                    <div class="ml-auto">
                      <div class="d-flex">
                        <span class="mr-4 mt-1 cursor-pointer">
                          <i
                            title="Copy invitation link"
                            class="bx bx-copy text-warning"
                            style={{ fontSize: "25px" }}
                          >
                            <MdContentCopy />
                          </i>
                        </span>
                      </div>
                    </div>
                  </CopyToClipboard>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-group text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Direct Partners</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">{referals} </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-log-in text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Total Deposit by Direct</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {totalteamDeposits
                          ? (totalteamDeposits * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-group text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Total Team</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">{teamCount}</span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-log-in-circle text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Total deposits by team</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {getuserteamDepoists
                          ? (getuserteamDepoists * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="card mb-xl-0" style={{ height: "100%" }}>
            <div class="card-body pb-0 border-bottom-0">
              <div
                class="mb-3"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h6 class="card-title mb-2">Income Statistics</h6>
                {/* <h6 class="card-title mb-2">
                  {" "}
                  <button
                    class="btn btn-warning btn-block btn-lg mt-2"
                    onClick={changeWallet}
                  >
                    Change Wallet
                  </button>
                </h6> */}
              </div>
            </div>
            <div class="card-body p-0 pb-3 border-0">
              <div class="browser-stats">
                {/* <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-time text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Weekly Pool Countdown</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1 fs-16">00:00:00</span>
                    </div>
                  </div>
                </div> */}
                {/* <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-timer text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Daily Income Countdown</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1 fs-16">
                        {`${hoursForPakageOne}:${minutesForPakageOne}:${secondsForPakageOne}`}
                      </span>
                    </div>
                  </div>
                </div> */}
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Income Limit Left</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {IncomeLeft ? (bnbToUsd * IncomeLeft).toFixed(2) : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">2.5 to 5 Daily Income Percent</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {" "}
                        {getUserDividend_withdrawable
                          ? getUserDividend_withdrawable / 10
                          : 0}{" "}
                        %
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Direct Bonus</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {direactbouns
                          ? (direactbouns * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Match Bonus</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {matchbouns ? (matchbouns * bnbToUsd).toFixed(2) : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">daily payment</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {dailyPayment
                          ? (dailyPayment * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">
                      First income amount for insurance
                    </p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {amountForInsurance ? amountForInsurance : 0}
                      </span>
                    </div>
                  </div>
                </div> */}
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">30% Reinvest</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {thirtyPercentReinvestable
                          ? parseFloat(
                              thirtyPercentReinvestable * bnbToUsd
                            ).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Total Withdrawals</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {totalwithDrawn
                          ? parseFloat(totalwithDrawn * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div> */}
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-money text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">your level is</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1">
                        {userCurrentLevel ? userCurrentLevel : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
