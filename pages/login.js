import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "./../components/layout/layout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from "cookies-next";

function Login() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [result, setResult] = useState();
  const { status, data } = useSession();
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push({
  //       pathname: 'http://localhost:3001/dashboard',
  //       state: { session: data },
  //     })
  //   }
  // }, [status]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    setResult(result);

    if (result.status === 200) {
      // Login request to the Strapi API
      axios
        .post("https://strapi-production-15df.up.railway.app/api/auth/local", {
          identifier: userInfo.email,
          password: userInfo.password,
        })
        .then((response) => {
          // Save the JWT token in cookies or local storage
          setCookie("Authorization", `Bearer ${response.data.jwt}`, {
            expires: new Date(Date.now() + 86400 * 1000),
            path: "/",
          });
        })
        .catch((error) => {
          console.log(
            "An error occurred while logging in to the Strapi API:",
            error
          );
        });
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
                      <h3 className="mb-30 font-weight-900">Login</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        {result?.error && (
                          <label className="text-red-500">{result.error}</label>
                        )}
                        <input
                          type="text"
                          required=""
                          className="form-control"
                          name="email"
                          style={{
                            borderColor: result?.error ? "rgb(239,68,68)" : "",
                          }}
                          value={userInfo.email}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, email: target.value })
                          }
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          required=""
                          style={{
                            borderColor: result?.error ? "rgb(239,68,68)" : "",
                          }}
                          value={userInfo.password}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, password: target.value })
                          }
                          type="password"
                          name="password"
                          placeholder="Password"
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
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheckbox1"
                            >
                              <span>Remember me</span>
                            </label>
                          </div>
                        </div>
                        <a className="text-muted" href="#">
                          Forgot password?
                        </a>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="button button-contactForm btn-block"
                        >
                          Log in
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
                      Don't Have an Account?{" "}
                      <Link href="/register">
                        <a>Sign up now</a>
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
export default Login;
