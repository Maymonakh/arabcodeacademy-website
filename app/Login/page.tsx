"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Login.css";
import logIcon from "../../public/icons/icon _log in_.svg";
import profileIcon from "../../public/icons/icon _profile circled_.svg";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import SocialButton from "../../components/ui/SocialButton/SocialButton";
import InputField from "../../components/ui/InputField/InputField";
import Link from "next/link";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!username || !password) {
      return;
    }

    alert("تم التقديم بنجاح");
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameTouched(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordTouched(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="image-section">
          <Image src="/images/login.svg" alt="Login" width={500} height={500} />
        </div>

        <div className="form-section">
          <h1>تسجيل الدخول</h1>
          <form onSubmit={handleFormSubmit}>
            <InputField
              id="username"
              label="اسم المستخدم أو البريد الإلكتروني*"
              placeholder="اسم المستخدم أو البريد الإلكتروني"
              iconSrc="/icons/envelope.svg"
              errorMessage={
                isSubmitted || usernameTouched
                  ? username
                    ? ""
                    : "اسم المستخدم غير صحيح"
                  : ""
              }
              onFocus={() => setUsernameTouched(true)}
              value={username}
              onChange={handleUsernameChange}
            />

            <InputField
              id="password"
              label="كلمة المرور*"
              placeholder="أدخل كلمة المرور"
              iconSrc="/icons/lock.svg"
              showEyeIcon={true}
              errorMessage={
                isSubmitted || passwordTouched
                  ? password
                    ? ""
                    : "كلمة المرور غير صحيحة"
                  : ""
              }
              onFocus={() => setPasswordTouched(true)}
              value={password}
              onChange={handlePasswordChange}
            />

            <div className="forget-pass">
              <text>نسيت كلمة المرور؟</text>
            </div>

            <div className="checkbox-group">
              <label htmlFor="remember">البقاء متصلًا</label>
              <input type="checkbox" id="remember" />
            </div>

            <div className="button-group">
              <CustomButton
                text="تسجيل الدخول"
                icon={
                  <Image
                    src={logIcon}
                    alt="More Options"
                    width={20}
                    height={20}
                  />
                }
                buttonType="secondaryOne"
                color="green"
              />
              <Link href={"/SignUp"}>
                <CustomButton
                  text="إنشاء حساب جديد"
                  icon={
                    <Image
                      src={profileIcon}
                      alt="More Options"
                      width={20}
                      height={20}
                    />
                  }
                  buttonType="secondaryOne"
                  color="orange"
                />
              </Link>
            </div>

            <div className="social-login">
              <span>يمكنك تسجيل الدخول باستخدام</span>
            </div>

            <div className="social-login-buttons">
              <SocialButton
                iconClass="icon-google"
                buttonClass="social-google"
                text="Google"
              />
              <SocialButton
                iconClass="icon-facebook"
                buttonClass="social-facebook"
                text="Facebook"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
