import { Link } from "react-router-dom";
import "./login.scss";
import { api, byId } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import { RegisterNav } from "../navbars/RegisterNav";

export const Register = () => {

    // login
    const addRegister = () => {
        let addData = {
            phone_number: byId("phone_number").value,
            username: byId("username").value,
            password: byId("password").value
        }
        axios.post(api + "register/", addData)
            .then(() => {
                toast.success("Tasdiqlash kodi yuborildi. Kodni kiriting!");
                enterCode();
            })
            .catch(() => {
                toast.warning("Xatolik yuz berdi ma'lumotlarni tekshirib qaytadan urinib ko'ring❓")
            })
    }

    // confirmCode
    const confirmCode = () => {
        let addData = {
            phone_number: byId("phone_number").value,
            verification_code: byId("verification_code").value
        }

        axios.post(`${api}register-verify/`, addData)
            .then(() => {
                toast.success("Registratsiyadan muvaffaqiyatli o'tdingiz✔");
                byId("goLogin").click();
            })
            .catch(() => {
                toast.error("Xatolik yuz berdi. Kodni xato kiritgan bo'lishingiz mumkin!!!");
            })
    }

    // entercode
    const enterCode = () => {
        byId("userName").style.display = "none";
        byId("oldPassword").style.display = "none";
        byId("signUp").style.display = "none";
        byId("virificationCode").style.display = "inline";
        byId("confirmCode").style.display = "inline";
    }

    return (
        <div className="login_section">
            <Link id="goLogin" to="/login"></Link>
            <RegisterNav />
            <section className="login_section-box">
                <div className="login_box">
                    <div className="login_content">
                        <h2>Sign up</h2>
                        <div className="login_form">
                            <div className="login_inputBox" id="userName">
                                <input id="username" required /> <i>Username</i>
                            </div>
                            <div className="login_inputBox" id="phoneNumber">
                                <input id="phone_number" required /> <i>+998 99 999 99 99</i>
                            </div>
                            <div className="login_inputBox" id="oldPassword">
                                <input type="password" id="password" required /> <i>Password</i>
                            </div>
                            <div
                                id="virificationCode"
                                className="login_inputBox"
                                style={{ display: "none" }}>
                                <input id="verification_code" required /> <i>Verification Code</i>
                            </div>
                            <div className="login_links">
                                <Link></Link>
                                <Link></Link>
                            </div>
                            <div className="login_inputBox">
                                <button
                                    id="signUp"
                                    onClick={addRegister}
                                    className="glow-on-hover">Sign up</button>
                                <button
                                    onClick={confirmCode}
                                    id="confirmCode"
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
