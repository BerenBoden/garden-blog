import Link from "next/link";
import {useState, useEffect} from 'react';
import Layout from "./../components/layout/layout";
import {signIn} from 'next-auth/react';
import { useRouter } from "next/router";

function Login() {
    const [userInfo, setUserInfo] = useState({email: "", password: ""});
    const router = useRouter();

    useEffect(() => {
        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(userInfo.email, userInfo.password)

        const result = await signIn('credentials', {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false
        })
        console.log(result)
        if(result.status === 200){
            router.push('/dashboard')
        }
    }

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
                                                Login
                                            </h3>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    required=""
                                                    className="form-control"
                                                    name="email"
                                                    value={userInfo.email}
                                                    onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    required=""
                                                    value={userInfo.password}
                                                    onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
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
                                                            <span>
                                                                Remember me
                                                            </span>
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
                                                <a
                                                    href="#"
                                                    className="btn btn-facebook"
                                                >
                                                    <i className="elegant-icon social_facebook  mr-5"></i>
                                                    Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="btn btn-google"
                                                >
                                                    <i className="elegant-icon social_googleplus mr-5"></i>
                                                    Google
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="text-muted text-center">
                                            Don't Have an Account?{" "}
                                            <Link href="/page-register">
                                                <a>
                                                    Sign up now
                                                </a>
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