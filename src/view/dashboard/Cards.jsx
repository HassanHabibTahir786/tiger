import React from 'react'
import { useSelector } from 'react-redux';


export default function Cards() {
  const getReducer = useSelector((state) => state.UserReducer)
  const { getContractBalance, totalDeposts, totalwithDrawn, toatal_Users, personalPartners, structures, structureDepoists } = getReducer

  return (
    <div>
      <div class="row row-sm">
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Smart Contract Balance</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-file text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {" "}
                    {getContractBalance
                      ? parseFloat(getContractBalance).toFixed(4)
                      : 0}{" "}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    {" "}
                    BNB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">All Time Deposit</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-log-in text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {totalDeposts ? totalDeposts : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    BNB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Total Withdrawals</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-money text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {totalwithDrawn ? totalwithDrawn : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    BNB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Participants</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-group text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {toatal_Users ? toatal_Users : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Personal Partners</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-group text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {personalPartners ? personalPartners : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Structure</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-group text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {structures ? structures : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Structure Deposits</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-log-in-circle text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">
                    {structureDepoists ? structureDepoists : 0}
                  </h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    BNB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-3 col-md-6 col-12">
          <div class="card">
            <div class="card-body">
              <div class="tx-16">
                <h5 class="mb-3">Pool Balance</h5>
              </div>
              <div class="d-flex">
                <div class="chart-icon border-0 mr-2 bg-warning-transparent">
                  <i class="bx bx-money text-warning"></i>
                </div>
                <div class="ml-auto float-right">
                  <h3 class="mb-1 font-weight-bold tx-22">0</h3>
                  <div class="mb-0 d-flex text-muted tx-12 mt-auto float-right">
                    BNB
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
