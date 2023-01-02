import Link from "next/link";
import Layout from "./../components/layout/layout";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/register", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
        name: userInfo.name,
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setResult(error.response.data.error);
      }
    }
  };
  return (
    <>
      <Layout>
        <main className="bg-grey pt-80 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap widget-taber-content p-30 bg-white border-radius-10">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1 text-center">
                      <h3 className="mb-30 font-weight-900">
                        Create an account
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        {result.name && <label className="text-red-500">{result.name}</label>}
                        <input
                          value={userInfo.name}
                          className="form-control"
                          style={{ borderColor: result.name ? "rgb(239,68,68)" : "" }}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, name: target.value })
                          }
                          type="text"
                          required=""
                          name="name"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="form-group">
                        {result.username && <label className="text-red-500">{result.username}</label>}
                        <input
                          className="form-control"
                          style={{ borderColor: result.username ? "rgb(239,68,68)" : "" }}
                          value={userInfo.username}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, username: target.value })
                          }
                          type="text"
                          name="username"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group ">
                        {result.email && <label className="text-red-500">{result.email}</label>}
                        <input
                          value={userInfo.email}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, email: target.value })
                          }
                          type="text"
                          required=""
                          style={{ borderColor: result.email ? "rgb(239,68,68)" : "" }}
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                      {result.password && <label className="text-red-500">{result.password}</label>}
                        <input
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, password: target.value })
                          }
                          style={{ borderColor: result.password ? "rgb(239,68,68)" : "" }}
                          className="form-control"
                          required=""
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                      {result.password2 && <label className="text-red-500">{result.password2}</label>}
                        <input
                          className="form-control"
                          required=""
                          style={{ borderColor: result.password2 ? "rgb(239,68,68)" : "" }}
                          type="password"
                          name="password"
                          placeholder="Confirm password"
                        />
                      </div>
                      <div className="login_footer form-group">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="exampleCheckbox1"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheckbox1"
                            >
                              <span>I agree to terms &amp; Policy.</span>
                            </label>
                          </div>
                        </div>
                        <a className="text-muted" href="#">
                          Lean more
                        </a>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="button button-contactForm btn-block"
                        >
                          Submit &amp; Register
                        </button>
                      </div>
                    </form>
                    <div className="divider-text-center mt-15 mb-15">
                      <span> or</span>
                    </div>
                    <ul className="btn-login list_none text-center mb-15">
                      <li>
                        <a href="#" className="btn btn-facebook">
                          <i className="elegant-icon social_facebook  mr-5"></i>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-google">
                          <i className="elegant-icon social_googleplus mr-5"></i>
                          Google
                        </a>
                      </li>
                    </ul>
                    <div className="text-muted text-center">
                      Already have an account?{" "}
                      <Link href="/login">
                        <a href="#">Log in now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default Register;
