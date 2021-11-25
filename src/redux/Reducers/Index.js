let initState = {};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DAILY_PAYMENT":
      return {
        ...state,
        dailyPayment: payload,
      };
    case "USER_CURRENT_LEVEL":
      return {
        ...state,
        userCurrentLevel: payload,
      };
    case "BNB_REAL_TIME_PRICE_IN_USD":
      return {
        ...state,
        bnbToUsd: payload,
      };
    case "WALLET_BALANCE":
      return {
        ...state,
        walletBalance: payload,
      };
    case "THIRTY_PERCENT_REINVESTABLE":
      return {
        ...state,
        thirtyPercentReinvestable: payload,
      };
    case "AMOUNT_FOR_INSURANCE":
      return {
        ...state,
        amountForInsurance: payload,
      };
    case "CHECKPOINT_TIMER":
      return {
        ...state,
        checkpiontTimer: payload,
      };
    case "YOUR_SPONSOR":
      return {
        ...state,
        yourSponsor: payload,
      };
    case "PAYOUT_WITHDRAWN":
      return {
        ...state,
        payoutWithdrawn: payload,
      };
    case "USER_TOTAL_DEPOSIT":
      return {
        ...state,
        userTotalDeposit: payload,
      };
    case "txiContract":
      return {
        ...state,
        texiContract: payload,
      };

    case "USER_METAMASK_ACCOUNT":
      return {
        ...state,
        userAccountAddress: payload,
      };
    case "USER_TOTAL_DEPOSITS":
      return {
        ...state,
        deposits: payload,
      };

    case "REFERALS":
      return {
        ...state,
        referals: payload,
      };
    case "GET_USER_TEAM_DEPOISTS":
      return {
        ...state,
        getuserteamDepoists: payload,
      };
    case "DIREACT_BOUNS":
      return {
        ...state,
        direactbouns: payload,
      };
    case "MATCH_BOUNS":
      return {
        ...state,
        matchbouns: payload,
      };
    case "GETUSER_DEPOSITS":
      return {
        ...state,
        totalteamDeposits: payload,
      };
    case "TEAM_COUNT":
      return {
        ...state,
        teamCount: payload,
      };
    case "GET_USER_DIVIDEND_WITHDRAWABLE":
      return {
        ...state,
        getUserDividend_withdrawable: payload,
      };
    case "INCOME_LIMIT_LEFT":
      return {
        ...state,
        IncomeLeft: payload,
      };
    case "DEFAULT_ADDRESS":
      return {
        ...state,
        defaultownerAddress: payload,
      };

    case "GET_CONTRACT_BALANCE":
      return {
        ...state,
        getContractBalance: payload,
      };
    case "TotalDeposits":
      return {
        ...state,
        totalDeposts: payload,
      };
    case "TOTAL_WITHDRAWN":
      return {
        ...state,
        totalwithDrawn: payload,
      };
    case "TOTAL_USERS":
      return {
        ...state,
        toatal_Users: payload,
      };
    case "PERSONAL_PARTNERS":
      return {
        ...state,
        personalPartners: payload,
      };
    case "STRUCTURES":
      return {
        ...state,
        structures: payload,
      };
    case "STRUCTURES_DEPOSITS":
      return {
        ...state,
        structureDepoists: payload,
      };
    // case "METAMASK_DECENTRALIZED":
    //   return {
    //     ...state,
    //     metaMaskDecentralized: payload,
    //   };

    // case "AUTHENTICATED_FAILED":
    //   return {
    //     ...state,
    //     isUserAuthenticated: false,
    //     currentUserStatus: "not done",

    //   };

    // case "LOGOUT":
    //   return {
    //     ...state,
    //     isUserAuthenticated: false,
    //     currentUserStatus: "not done",
    //   };
    default:
      return state;
  }
};
