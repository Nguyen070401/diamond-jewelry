import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import localStorage from 'localStorage';
import OAuth2Login from 'react-simple-oauth2-login';
import styles from './RegisterPage.module.css';
import { ArrowLeft } from '@material-ui/icons';

export default function RegisterPage() {
    const navigate = useNavigate();

    function onSuccess(response) {
        localStorage.setItem("access_token", response.access_token);
        navigate("/");
    }

    function onFailure(response) {
        console.log(response);
    }

    function validatePhoneNumber() {
        const input = $("input[type='tel']")[0];
        if (!input.value.match(/0(3|5|7|8|9)+([0-9]{8})\b/g)) {
            input.setCustomValidity('Số điện thoại không hợp lệ.');
        }
        else {
            input.setCustomValidity('');
        }
    }
    
    function validateEmail() {
        const input = $("input[type='email']")[0];
        if (!input.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            input.setCustomValidity('Email không hợp lệ.');
        }
        else {
            input.setCustomValidity('');
        }
    }

    function validatePassword() {
        const input = $("input[type='password']")[0];
        if (!input.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g)) {
            input.setCustomValidity('Mật khẩu phải có ít nhất 6 kí tự và bao gồm: chữ thường, chữ hoa, số.');
        }
        else {
            input.setCustomValidity('');
        }

        validateConfirmPassword();
    }

    function validateConfirmPassword() {
        const password = $("input[type='password']")[0];
        const confirmPassword = $("input[type='password']")[1];
        if (password.value === confirmPassword.value) {
            confirmPassword.setCustomValidity('');
        }
        else {
            confirmPassword.setCustomValidity('Mật khẩu và mật khẩu xác nhập phải trùng nhau.');
        }
    }

    return (
        
        <div className={styles.container}>
            <Link className={styles.back_button} to="/dang-nhap">
                <ArrowLeft fontSize="large"></ArrowLeft>
            </Link>
            <div className={styles.wrapper}>
                <form>
                    <h1>Đăng kí tài khoản</h1>
                    <input type='text' placeholder='Họ và tên' required />
                    <input type='date' placeholder='Ngày tháng năm sinh' required />
                    <input type='tel' placeholder='Số điện thoại' pattern='0(3|5|7|8|9)+([0-9]{8})\b' 
                    onChange={validatePhoneNumber} required />
                    <input type='email' placeholder='Email' pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" 
                    onChange={validateEmail} required />
                    <input type='password' placeholder='Mật khẩu' onChange={validatePassword} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$' 
                    required />
                    <input type='password' placeholder='Xác nhận mật khẩu' onChange={validateConfirmPassword} required />
                   
                    <button className={styles.signup_button} type="submit">Đăng kí</button>
                    <div className={styles.third_party_wrapper}>
                        <OAuth2Login
                            className={styles.button}
                            authorizationUrl="https://accounts.google.com/o/oauth2/auth"
                            responseType="token"
                            clientId="633817129267-8ve3g3uk7mhsrdd0elci28as9g7389sr.apps.googleusercontent.com"
                            redirectUri="http://localhost:3000/auth/google/diamonjewelry"
                            scope="profile"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        >
                            <img src={require("../assets/images/google.png")} alt="google-icon" />
                        </OAuth2Login>

                        <OAuth2Login
                            className={styles.button}
                            authorizationUrl="https://www.facebook.com/dialog/oauth"
                            responseType="token"
                            clientId="5374491585936093"
                            redirectUri="http://localhost:3000/auth/facebook/diamonjewelry"
                            scope="public_profile"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        >
                            <img src={require("../assets/images/facebook.png")} alt="facebook-icon" />
                        </OAuth2Login>
                    </div>
                </form>
            </div>
            <div className={styles.banner}>
            </div>
        </div>
    );
}