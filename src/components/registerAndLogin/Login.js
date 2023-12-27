import { Link } from "react-router-dom";
import "./login.scss";
import { api, byId } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import { LoginNav } from "../navbars/LoginNav";

export const Login = () => {

    // login
    const addLogin = () => {
        let addData = {
            phone_number: byId("phone_number").value,
            password: byId("password").value
        }
        axios.post(api + "login/", addData)
            .then(res => {
                toast.success("Tizimga muvaffaqiyatli kiridingiz✔");
                sessionStorage.setItem("jwtToken", `Bearer ${res.data.access_token}`);
                sessionStorage.setItem("logOutToken", `Bearer ${res.data.refresh_token}`);
                byId("goHomePage").click();
            })
            .catch((error) => {
                toast.error("Xatolik yuz berdi ma'lumotlarni tekshirib qaytadan urinib ko'ring❓")
            })
    }

    // forgetPassword
    const forgotPassword = () => {
        byId("loginBtn").style.display = "none";
        byId("oldPassword").style.display = "none";
        byId("newPassword").style.display = "inline";
        byId("confirmPassword").style.display = "inline";
        byId("confirmBtn").style.display = "inline"
    }

    // passwordCode
    const passwordCode = () => {
        byId("phoneNumber").style.display = "none";
        byId("newPassword").style.display = "none";
        byId("confirmPassword").style.display = "none";
        byId("confirmBtn").style.display = "none";
        byId("verificationCode").style.display = "inline";
        byId("verificationCodeBtn").style.display = "inline";
    }

    // confirmCode
    const confirmCode = () => {
        sessionStorage.setItem("phone_number", byId("phone_number").value);
        sessionStorage.setItem("new_password", byId("new_password").value);
        sessionStorage.setItem("confirm_password", byId("confirm_password").value);

        axios.post(api + "forgot-password/", {
            phone_number: sessionStorage.getItem("phone_number")
        })
            .then(() => {
                toast.success(`${sessionStorage.getItem("phone_number")} raqamiga tasdiqlash kodi yuborildi. Kodni kiriting.`);
            })
            .catch(() => {
                toast.error("Xatolik yuz berdi!!!");
            })
    }

    // enterCode
    const enterCode = () => {
        const addEnterCode = {
            phone_number: sessionStorage.getItem("phone_number"),
            new_password: sessionStorage.getItem("new_password"),
            confirm_password: sessionStorage.getItem("confirm_password"),
            verification_code: byId("verification_code").value
        }
        axios.post(api + "veriy-forgot-password/", addEnterCode)
            .then(() => {
                toast.success("Parolingiz muvaffaqiyatli o'zgartirildi✔");
                backLoginPage();
            })
            .catch(() => {
                toast.error("Nimadur xato ketdi. Qaytadan tekshirib ko'ring!!!");
            })
    }

    // back login page
    const backLoginPage = () => {
        byId("phoneNumber").style.display = "inline";
        byId("oldPassword").style.display = "inline";
        byId("loginBtn").style.display = "inline";
        byId("verificationCode").style.display = "none";
        byId("verificationCodeBtn").style.display = "none";
    }

    return (
        <div className="login_section">
            <Link id="goHomePage" to="/Lost and Found"></Link>
            <LoginNav />
            <section className="login_section-box">
                <div className="login_box">
                    <div className="login_content">
                        <h2>Sign In</h2>
                        <div className="login_form">
                            <div className="login_inputBox" id="phoneNumber">
                                <input id="phone_number" required /> <i>+998 99 999 99 99</i>
                            </div>
                            <div className="login_inputBox" id="oldPassword">
                                <input type="password" id="password" required /> <i>Password</i>
                            </div>
                            <div
                                style={{ display: "none" }}
                                id="newPassword"
                                className="login_inputBox">
                                <input type="password" id="new_password" required /> <i>New Password</i>
                            </div>
                            <div
                                className="login_inputBox"
                                id="confirmPassword"
                                style={{ display: "none" }}>
                                <input type="password" id="confirm_password" required /> <i>Confirm Password</i>
                            </div>
                            <div
                                id="verificationCode"
                                style={{ display: "none" }}
                                className="login_inputBox">
                                <input id="verification_code" required /> <i>verification code</i>
                            </div>
                            <div className="login_links">
                                <Link to="/register">Create new account</Link>
                                <Link onClick={forgotPassword}>Forgot password?</Link>
                            </div>
                            <div className="login_inputBox">
                                <button
                                    onClick={addLogin}
                                    id="loginBtn"
                                    className="glow-on-hover">Sign in</button>
                                <button
                                    onClick={() => {
                                        passwordCode();
                                        confirmCode();
                                    }}
                                    id="confirmBtn"
                                    style={{ display: "none" }}
                                    className="glow-on-hover">Confirm</button>
                                <button
                                    onClick={enterCode}
                                    id="verificationCodeBtn"
                                    style={{ display: "none" }}
                                    className="glow-on-hover">Confirm Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
