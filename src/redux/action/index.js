// import { environment } from "./environment";
import axios from "axios";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import Web3 from "web3";
import store from "../store";

const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
let getuserDividendWithdrawable;
export const dailyCountDown = (Useraccount, txiContract) => async (
  dispatch
) => {
  await txiContract.methods
    .users(Useraccount)
    .call()
    .then((val) => {
      dispatch({
        type: "CHECKPOINT_TIMER",
        payload: val.checkpoint,
      });
    });
};

export const getUserData = (Useraccount, txiContract) => async (dispatch) => {
  // console.log("yes its running");
  if (Useraccount && txiContract) {
    dispatch({
      type: "txiContract",
      payload: txiContract,
    });

    web3.eth.getBalance(Useraccount).then((val) => {
      dispatch({
        type: "WALLET_BALANCE",
        payload: web3.utils.fromWei(val),
      });
    });

    await txiContract.methods
      .getUserTotalDeposits(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "USER_TOTAL_DEPOSIT",
          payload: web3.utils.fromWei(val),
        });

        dispatch({
          type: "USER_METAMASK_ACCOUNT",
          payload: Useraccount,
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "REFERALS",
          payload: val[0],
        });
      });

    let cnt, level;
    for (let a = 0; a >= 0; a++) {
      await txiContract.methods
        .levels(Useraccount, a)
        .call()
        .then((val) => {
          // if (val === true) {
          //   level = a;
          // }
          if (val === false) {
            // console.log("came here", val, a);
            level = a - 1;
            cnt = false;
          }
        });

      if (cnt === false) {
        break;
      }
    }

    if (level != undefined) {
      // console.log("here is the users level====>", level);
      dispatch({
        type: "USER_CURRENT_LEVEL",
        payload: +level + 1,
      });
    }

    // console.log("here is the cnt===>",cnt);

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "THIRTY_PERCENT_REINVESTABLE",
          payload: web3.utils.fromWei(val.reinvestwallet),
        });
      });

    await txiContract.methods
      .getUserDividendsWithdrawable(Useraccount)
      .call()
      .then((val) => {
        getuserDividendWithdrawable = web3.utils.fromWei(val);
        dispatch({
          type: "DAILY_PAYMENT",
          payload: web3.utils.fromWei(val),
        });
      });

    await txiContract.methods
      .getUserDepositInfo(Useraccount, 0)
      .call()
      .then((val) => {
        dispatch({
          type: "AMOUNT_FOR_INSURANCE",
          payload: web3.utils.fromWei(val[0]),
        });
      })
      .catch((err) => {
        console.log("here is the error=====>", err);
      });

    await txiContract.methods
      .getUserStructureDeposits(Useraccount)
      .call()
      .then((val) => {
        // console.log(val);
        dispatch({
          type: "GET_USER_TEAM_DEPOISTS",
          payload: web3.utils.fromWei(val),
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "DIREACT_BOUNS",
          payload: web3.utils.fromWei(val.refBonus),
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "MATCH_BOUNS",
          payload: web3.utils.fromWei(val.UniLevelBonus),
        });
      });

    await txiContract.methods
      .getUserTeamDeposits(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "GETUSER_DEPOSITS",
          payload: web3.utils.fromWei(val),
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "TEAM_COUNT",
          payload: val.teamCount,
        });
      });
    await txiContract.methods
      .getpercent()
      .call()
      .then((val) => {
        // console.log("here is the valuue===>", val);
        dispatch({
          type: "GET_USER_DIVIDEND_WITHDRAWABLE",
          payload: val,
        });
      });

    let GetUserTotatalDepoists;
    await txiContract.methods
      .getUserTotalDeposits(Useraccount)
      .call()
      .then((val) => {
        GetUserTotatalDepoists = web3.utils.fromWei(val);
      });

    let getUserTotalWithDrawn;
    await txiContract.methods
      .getUserTotalWithdrawn(Useraccount)
      .call()
      .then((val) => {
        getUserTotalWithDrawn = web3.utils.fromWei(val);
        dispatch({
          type: "PAYOUT_WITHDRAWN",
          payload: web3.utils.fromWei(val),
        });
      });

    // console.log(+getUserTotalWithDrawn, "llllllllllllllllllll", +GetUserTotatalDepoists)
    if (getuserDividendWithdrawable != undefined) {
      dispatch({
        type: "INCOME_LIMIT_LEFT",
        payload:
          GetUserTotatalDepoists * 2.5 -
          getUserTotalWithDrawn,
      });
    }

    await txiContract.methods
      .owner()
      .call()
      .then((val) => {
        dispatch({
          type: "DEFAULT_ADDRESS",
          payload: val,
        });
      });

    await txiContract.methods
      .getContractBalance()
      .call()
      .then((val) => {
        dispatch({
          type: "GET_CONTRACT_BALANCE",
          payload: web3.utils.fromWei(val),
        });
      });

    await txiContract.methods
      .totalDeposits()
      .call()
      .then((val) => {
        dispatch({
          type: "TotalDeposits",
          payload: val,
        });
      });

    await txiContract.methods
      .getUserTotalWithdrawn(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "TOTAL_WITHDRAWN",
          payload: web3.utils.fromWei(val),
        });
      });

    await txiContract.methods
      .totalUsers()
      .call()

      .then((val) => {
        dispatch({
          type: "TOTAL_USERS",
          payload: val,
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        // dispatch({
        //   type: "CHECKPOINT_TIMER",
        //   payload: val.checkpoint,
        // });
        dispatch({
          type: "PERSONAL_PARTNERS",
          payload: val[0],
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "STRUCTURES",
          payload: val[7],
        });
      });

    await txiContract.methods
      .users(Useraccount)
      .call()
      .then((val) => {
        dispatch({
          type: "YOUR_SPONSOR",
          payload: val.referrer,
        });
        // console.log(val);
        dispatch({
          type: "STRUCTURES_DEPOSITS",
          payload: val[8],
        });
      });
  }
};

export const BNBTOKENBUY = (
  defaultownerAddress,
  amount,
  userAccountAddress,
  stopLoader
) => async (dispatch, getState) => {
  if (defaultownerAddress && amount && getState().UserReducer.texiContract) {
    let getUrl = localStorage.getItem("tiger_ref");

    getState()
      .UserReducer.texiContract.methods.invest(
        getUrl ? getUrl : defaultownerAddress
      )
      .send({
        from: userAccountAddress,
        gas: 2100000,
        gasPrice:30000000000,
        value: web3.utils.toWei(amount),
      })
      .on("confirmation", (confirmationNumber) => {
        // console.log("here is the confirmation number====>", confirmationNumber);
        if (confirmationNumber === 5) {
          toast.success("transaction confirmed!");
          stopLoader();
          window.location.reload();
        }
      })
      .on("error", (err) => {
        toast.error(err.message);
        stopLoader();
      });

    //  .then((val)=>{
    //    console.log("here is the value--->",val);
    //  }).catch((err)=>{
    //    toast.error(err.message);
    //  })
  }
};

export const WithDraw = (userAccountAddress, stopLoader) => async (
  dispatch,
  getState
) => {
  // console.log("withDraw Func", userAccountAddress);
  if (getState().UserReducer.texiContract) {
    try {
      getState()
        .UserReducer.texiContract.methods.withdraw()
        .send({
          from: userAccountAddress,
          gas: 2100000,
          gasPrice: 30000000000,
          // value: amount
        })
        .on("confirmation", (confirmationNumber) => {
          // console.log("here is the confirmation number====>", confirmationNumber);
          if (confirmationNumber === 5) {
            toast.success("transaction confirmed!");
            stopLoader();
            window.location.reload();
          }
        })
        .on("error", (err) => {
          toast.error(err.message);
          stopLoader();
        });
    } catch (err) {
      toast.error(err.message);
    }
  }
};

export const JustSwapApi = () => async (dispatch) => {
  let getData = await axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD")
    .then((val) => {
      // console.log(val.data.USD);
      dispatch({
        type: "BNB_REAL_TIME_PRICE_IN_USD",
        payload: val.data.USD,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
