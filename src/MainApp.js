import React from "react";
import Web3 from "web3";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./components/history";
import txAbi from "./util/contract/txAbi.json";
import binanceAbi from "./util/contract/binanceABI.json";
import Envirnment from "./util/environment";
import { useDispatch } from "react-redux";
import { BscConnector } from "@binance-chain/bsc-connector";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export default function MainApp() {
  const dispatch = useDispatch();
  const [Useraccount, setAccount] = React.useState();
  const [txcontract, settxContract] = React.useState();

  const ConnectToWallet = () => {
    Ethereum();
    async function Ethereum() {
      // window.ethereum && window.ethereum.enable();
      window.ethereum.request({ method: "eth_requestAccounts" });
      if (typeof window.ethereum !== "undefined") {
        let connectAccount = setInterval(async () => {
          // const web3 = new Web3(Web3.givenProvider || "http://localhost8545");
          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          // console.log("here are the accounts====>", account);

          if (account) {
            setAccount(account[0]);
            localStorage.setItem("metamask", "metamask");
            localStorage.removeItem("binance");
            const Contract = new web3.eth.Contract(
              txAbi,
              Envirnment.contractAddress
            );
            settxContract(Contract);
          }

          clearInterval(connectAccount);
        }, 500);
      }
    }
  };

  //   React.useLayoutEffect(() => {
  //   }, []);
  const bsc = new BscConnector({
    supportedChainIds: [56, 97], // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
  });

  const connectBinanceWallet = () => {
    if (window && window.BinanceChain) {
      main();
    }
  };

  const main = async () => {
    // await bsc.activate().then((i) => {
    //   console.log("====>", i);
    // });
    await bsc.getAccount().then((val) => {
      if (val) {
        setAccount(val);
        localStorage.setItem("binance", "binance");
        localStorage.removeItem("metamask");
        const web3 = new Web3(window.BinanceChain);

        const Contract = new web3.eth.Contract(
          txAbi,
          Envirnment.contractAddress
        );
        settxContract(Contract);
      }
    });
  };

  let getBinance = localStorage.getItem("binance");
  React.useEffect(() => {
    if (getBinance) {
      connectBinanceWallet();
    }
  }, [getBinance]);

  let getMetaMask = localStorage.getItem("metamask");
  React.useEffect(() => {
    if (getMetaMask) {
      ConnectToWallet();
    }
  }, [getMetaMask]);

  let final;
  const Init = async () => {
    //
    try {
      Ethereum();
      async function Ethereum() {
        window.ethereum.on("accountsChanged", (accounts) => {
          final = Web3.utils.toChecksumAddress(accounts[0]);
          setAccount(final);
        });
      }
    } catch (err) {}
  };

  React.useLayoutEffect(() => {
    Init();
  }, [final]);

  return (
    <Router history={history}>
      <App
        Useraccount={Useraccount}
        txiContract={txcontract}
        ConnectToWallet={ConnectToWallet}
        connectBinanceWallet={connectBinanceWallet}
      />
    </Router>
  );
}
