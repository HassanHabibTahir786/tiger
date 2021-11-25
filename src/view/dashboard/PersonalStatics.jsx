import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { WithDraw } from '../../redux/action';


export default function PersonalStatics() {
  const getReducer = useSelector((state) => state.UserReducer)
  const {
    userAccountAddress,
    payoutWithdrawn,
    IncomeLeft,
    bnbToUsd,
  } = getReducer;
  const dispatch = useDispatch()
  const [isLoading, setLoading] = React.useState(false);

  const stopLoader = () => {
    setLoading(false);
  };

  const WithDrawFunc = () => {
    setLoading(true);
    dispatch(WithDraw(userAccountAddress, stopLoader));
  }
  return (
    <div>
      <div class="row row-sm mb-3">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="card mb-xl-0">
            <div class="card-body pb-0 border-bottom-0">
              <div class="mb-3">
                <h6 class="card-title mb-2">Payout Statistics</h6>
              </div>
            </div>
            <div class="card-body p-0 pb-3 border-0">
              <div class="browser-stats">
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-log-out text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">Payout Withdrawn</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1 fs-16">
                        {payoutWithdrawn
                          ? (payoutWithdrawn * bnbToUsd).toFixed(2)
                          : 0}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center border-bottom px-3 py-2">
                  <div class="d-flex">
                    <i class="bx bx-log-out text-warning bg-warning-transparent mr-3"></i>
                    <p class="fs-16 mt-1 mb-0">UnWithdrawn Income</p>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <span class="mr-4 mt-1 fs-16">
                        {IncomeLeft
                          ? parseFloat(IncomeLeft * bnbToUsd).toFixed(3)
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
          <div class="card pd-5">
            <div class="card-body border-bottom-0 p-5 m-1">
              <button
                class="btn btn-warning btn-block btn-lg mt-2"
                onClick={WithDrawFunc}
                disabled={isLoading}
              >
                {userAccountAddress
                  ? isLoading
                    ? "please wait for the processing..."
                    : "WithDraw "
                  : "Connect To Wallet"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
