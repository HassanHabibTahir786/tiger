import React from "react";
import { useSelector } from "react-redux";

import Envirnment from "../../util/environment";
export default function FooterCard() {
  const getReducer = useSelector((state) => state.UserReducer);
  const { yourSponsor } = getReducer;

  return (
    <div>
      <div className="row row-sm mb-3">
        <div class="col-xl-12">
          <div class="row row-sm mb-3">
            <div class="col-lg-6 col-xl-6 col-md-12 col-12 mb-2">
              <div class="card mb-xl-0">
                <div class="card-body pb-0 border-bottom-0">
                  <div class="mb-3">
                    <h6 class="card-title mb-2">Tiger-Bn Contract</h6>
                  </div>
                </div>
                <div class="card-body p-0 pb-3 border-0">
                  <div class="browser-stats">
                    <div class="d-flex align-items-center border-bottom px-3 py-2">
                      <div class="d-flex">
                        <i class="bx bx-file text-warning bg-warning-transparent mr-3"></i>
                        <p class="fs-16 mt-1 mb-0">Contract Address</p>
                      </div>
                      <div class="ml-auto">
                        <div class="d-flex">
                          <a
                            href={`https://testnet.bscscan.com/address/${Envirnment.contractAddress}`}
                            target="_blank"
                          >
                            <span class="mr-4 mt-1 fs-16">
                              {Envirnment.contractAddress.slice(0, 10) +
                                "...." +
                                Envirnment.contractAddress.slice(35, 42)}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-md-12 col-12 mb-2">
              <div class="card mb-xl-0">
                <div class="card-body pb-0 border-bottom-0">
                  <div class="mb-3">
                    <h6 class="card-title mb-2">Your Sponsor</h6>
                  </div>
                </div>
                <div class="card-body p-0 pb-3 border-0">
                  <div class="browser-stats">
                    <div class="d-flex align-items-center border-bottom px-3 py-2">
                      <div class="d-flex">
                        <i class="bx bx-file text-warning bg-warning-transparent mr-3"></i>
                        {/* <p class="fs-16 mt-1 mb-0">Contract Address</p> */}
                      {/* <div class="ml-auto"> */}
                        <div class="d-flex">
                          <a href="#" target="_blank">
                            <span class="mr-4 mt-1 fs-16">{yourSponsor}</span>
                          </a>
                        {/* </div> */}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-12 mb-3">
              <div class="card mb-xl-2 mt-2">
                <div class="card-body pb-3 border-bottom-0">
                  <div class="mb-3">
                    <h6 class="card-title mb-2">Your Sponsor</h6>
                  </div>
                </div>
                <div class="card-body p-0 pb-3 border-0">
                  <div class="browser-stats">
                    <div class="d-flex align-items-center border-bottom px-3 py-2">
                      <div class="d-flex mx-auto">
                        <a href="#" target="_blank">
                          <span class="mr-4 mt-1 fs-16">{yourSponsor}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
