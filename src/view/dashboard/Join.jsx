import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BNBTOKENBUY } from "../../redux/action";

export default function Join() {
  const [amount, setAmount] = useState();
  const getReducer = useSelector((state) => state.UserReducer);
  const { defaultownerAddress, userAccountAddress } = getReducer;
  const [isLoading, setLoading] = React.useState(false);

  const stopLoader = () => {
    setLoading(false);
  };

  const dispatch = useDispatch();

  const querys = new URLSearchParams(window.location.search);
  const refAddress = querys.get("ref");
  const refAddresspasstoFunction = refAddress
    ? refAddress
    : defaultownerAddress;

  const BuyBnb = async () => {
    if (amount && defaultownerAddress) {
      setLoading(true);
      dispatch(
        BNBTOKENBUY(defaultownerAddress, amount, userAccountAddress, stopLoader)
      );
    }
  };

  return (
    <div>
      <div class="row row-sm ">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="card audiencemetric join_box">
            <div class="card-body pb-3 ">
              <div class="main-content-label mg-b-5">Join</div>
              <p class="mg-b-20">It is Very Easy to Join.</p>
              <div class="pd-xl-40 bg-gray-200 join_form">
                <div class="row">
                  <div class="col-12 mx-auto d-block">
                    <div class="card card-body pd-20  mb-0 pd-md-40 border shadow-none">
                      <div class="form-group">
                        <label class="main-content-label tx-11 tx-medium tx-gray-600">
                          Enter Amount In BNB
                        </label>
                        <div class="pos-relative">
                          <input
                            required="required"
                            type="text"
                            placeholder="0.05 - 100000"
                            class="form-control form-control-lg pd-r-80"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                          <div class="d-flex pos-absolute t-10 r-10">
                            <span>BNB</span>
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-warning btn-block btn-lg mt-2"
                        onClick={BuyBnb}
                        disabled={isLoading}
                      >
                        {" "}
                        {userAccountAddress
                          ? isLoading
                            ? "please wait for the processing..."
                            : "INVEST "
                          : "Connect To Wallet"}
                      </button>
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
