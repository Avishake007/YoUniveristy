import React, { useState } from "react";
import styles from "./signup.module.css";

import { Link } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    roll: "",
    stream: "",
    semester: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const rightmove = () => {
    let nextMove = document.getElementById("fig");

    nextMove.style.left = `${-100}%`;
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className={`${styles.container_signup}`}>
        <div className={`${styles.form_outer}`}>
          <div className={`${styles.form_inner}`}>
            <p className={`${styles.reg}`}>Register</p>
            <div className={`${styles.formpng}`}>
              <div className={`${styles.form_inner_inner}`}>
                <form action="login" method="POST">
                  <div className={`${styles.slide}`}>
                    <figure className={`${styles.fig}`} id="fig">
                      <div id="firp" className={`${styles.lop}`}>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-user ${styles.fa_user}`}
                            aria-hidden="true"
                          ></i>

                          <div className={`${styles.col}`}>
                            <input
                              type="text"
                              className={`${styles.form_control}`}
                              value={user.name}
                              onChange={handleInputs}
                              placeholder="Enter your name"
                              name="name"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-user ${styles.fa_user}`}
                            aria-hidden="true"
                          ></i>

                          <div className={`${styles.col}`}>
                            <input
                              type="text"
                              className={`${styles.form_control}`}
                              value={user.roll}
                              onChange={handleInputs}
                              placeholder="Enter your Roll Number "
                              name="roll"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-user ${styles.fa_user}`}
                            aria-hidden="true"
                          ></i>

                          <div className={`${styles.col}`}>
                            <input
                              type="text"
                              className={`${styles.form_control}`}
                              value={user.stream}
                              onChange={handleInputs}
                              placeholder="Enter your Stream"
                              name="stream"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-user ${styles.fa_user}`}
                            aria-hidden="true"
                          ></i>

                          <div className={`${styles.col}`}>
                            <input
                              type="text"
                              className={`${styles.form_control}`}
                              value={user.semester}
                              onChange={handleInputs}
                              placeholder="Enter your Semester"
                              name="semester"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.move_right}`}>
                          <div
                            className="btn btn-primary"
                            id="nextMove"
                            style={{ width: "100%" }}
                            onClick={() => rightmove()}
                          >
                            Next
                          </div>
                        </div>
                      </div>
                      <div id="firp" class="lop">
                        <div className={`${styles.form_row}`}>
                          <i
                            class={`fas fa-envelope ${styles.fa_envelope}`}
                          ></i>

                          <div className={`${styles.col}`}>
                            <input
                              type="email"
                              className={`${styles.form_control}`}
                              value={user.email}
                              onChange={handleInputs}
                              placeholder="Enter your email"
                              name="email"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-lock ${styles.fa_lock}`}
                            aria-hidden="true"
                          ></i>
                          <div className={`${styles.col}`}>
                            <input
                              type="password"
                              className={`${styles.form_control}`}
                              value={user.password}
                              pattern="[A-Za-Z0-9]{7,}"
                              title="Password must start with a captital "
                              name="password"
                              onChange={handleInputs}
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.form_row}`}>
                          <i
                            className={`fa fa-lock ${styles.fa_lock}`}
                            aria-hidden="true"
                          ></i>
                          <div className={`${styles.col}`}>
                            <input
                              type="password"
                              className={`${styles.form_control}`}
                              value={user.confirmpassword}
                              name="confirmpassword"
                              onChange={handleInputs}
                              pattern="[A-Za-Z0-9]{7,}"
                              title="Password must start with a captital "
                              placeholder="Confirm your password"
                              required
                            />
                          </div>
                        </div>
                        <div className={`${styles.btner}`}>
                          <input
                            type="submit"
                            className={`btn btn-danger ${styles.login}`}
                            value="Register"
                          />
                        </div>
                      </div>
                    </figure>
                  </div>
                </form>
                <div className={`${styles.has_account}`}>
                  Already have an account ?
                  <Link
                    style={{
                      marginLeft: "14px",
                      cursor: "pointer",
                      color: "rgb(6 31 132)",
                    }}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </div>
              </div>
              <div className={`${styles.form_inner_inner}`}>
                <img
                  className={`${styles.login_png}`}
                  src="/assets/img/register.svg"
                  alt="login_photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
