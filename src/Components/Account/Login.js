import React from "react";
import "../../Components/Account/Login.js";
import "../../Assets/CSS/Account/login.css";
import { Form } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <div className="container backgroundColor-red">
        <div className="row col-12 log-body">

          <div className="lef-log col-md-5">

            <form className="log-m-body">
              <h1 className="log-head">Administrator log in</h1>

              <div class="label-log ">
                <label for="inputNumber" class="label-text">Phone</label>
                <div class="input-log text-center">
                  <input type="phone" class="form-control text-center in-log" id="inputNumber"  placeholder="01732-955937" />
                </div>
              </div>

              <div class="label-log ">
                <label for="inputPassword" class="label-text">Password</label>
                  <div class="input-log text-center">
                    <input type="password" class="form-control text-center" id="inputPassword"  placeholder="!h0%hy*2gf!0" />
                  </div>
                </div>

                <div class="label-log ">
                  <label for="inputPassword" class="label-text">Confirm Password</label>
                    <div class="input-log text-center">
                      <input type="password" class="form-control text-center" id="inputPassword"  placeholder="!h0%hy*2gf!0" />
                    </div>
                </div>

            </form>

          </div>

          <div className="right-log col-md-3">
            <h1 className="log-head">An OTP is just sent to your mobile 01827-007441</h1>
              <p className="Otp-log">Enter the OTP here</p>

              <form className="otp-log-body">
                <div class="otp-log-main ">
                  <label for="inputNumber" class="label-text">OTP Verification</label>
                  <div class="text-center">
                    <input type="phone" class="form-control text-center input-log " id="inputNumber"  placeholder="5021" />
                  </div>

                  <div className="btn-otp-l"><button>Resend</button></div>
                    <div className="btn-otp-r"><button>Verify</button></div>
                  </div>
              </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
