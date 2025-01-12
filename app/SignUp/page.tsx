"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./SignUp.css";
import rightIcon from "../../public/icons/arrow-right.png";
import leftIcon from "../../public/icons/arrow-left.png";
import profileIcon from "@/public/icons/icon _profile circled_.png";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import SocialButton from "../../components/ui/SocialButton/SocialButton";
import InputField from "../../components/ui/InputField/InputField";

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [locationTouched, setLocationTouched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isPasswordValid = (password: string) =>
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !username
    ) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    alert("تم إنشاء الحساب بنجاح!");
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailTouched(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordTouched(true);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordTouched(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h1>قم بإنشاء حسابك على الأكاديمية!</h1>
                <InputField
                  id="email"
                  label="عنوان البريد الإلكتروني"
                  placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
                  iconSrc="/icons/envelope.svg"
                  errorMessage={
                    (isSubmitted || emailTouched) && !email
                      ? "عنوان البريد الإلكترونى هذا مسجل بالفعل. حاول تسجيل الدخول باستخدام بريدًا إلكترونيًا مختلفًا"
                      : ""
                  }
                  onFocus={() => setEmailTouched(true)}
                  value={email}
                  onChange={handleEmailChange}
                />
                <InputField
                  id="password"
                  label="كلمة المرور"
                  placeholder="قم بإنشاء كلمة سر قوية"
                  iconSrc="/icons/lock.svg"
                  showEyeIcon={true}
                  errorMessage={
                    (isSubmitted || passwordTouched) &&
                    !isPasswordValid(password)
                      ? "يجب أن تتضمن كلمة المرور حرفًا كبيرًا واحدًا ورقمًا واحدًا وحرفًا خاصًا واحدًا على الأقل"
                      : ""
                  }
                  onFocus={() => setPasswordTouched(true)}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <InputField
                  id="confirm-password"
                  label="تأكيد كلمة المرور"
                  placeholder="كلمات المرور غير متطابقة. يرجى المحاولة مرة أخرى"
                  iconSrc="/icons/lock.svg"
                  showEyeIcon={true}
                  errorMessage={
                    (isSubmitted || confirmPasswordTouched) &&
                    confirmPassword !== password
                      ? "كلمات المرور غير متطابقة. يرجى المحاولة مرة أخرى"
                      : ""
                  }
                  onFocus={() => setConfirmPasswordTouched(true)}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div className="button-group">
                  <CustomButton
                    text="التالي"
                    icon={
                      <Image
                        src={leftIcon}
                        alt="Next Step"
                        width={20}
                        height={20}
                      />
                    }
                    buttonType="secondaryOne"
                    color="green"
                    onClick={handleNext}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1>أنت على بعد خطوة واحدة فقط من الانضمام إلينا!</h1>
                <h1>أنشئ ملف التعريف الخاص بك </h1>

                <div className="inputs-group">
                  <InputField
                    id="last-name"
                    label="الاسم الأخير"
                    placeholder="أدخل اسمك الأخير"
                    iconSrc="/icons/user-check.svg"
                    errorMessage={
                      (isSubmitted || lastNameTouched) && !lastName
                        ? "الرجاء إدخال اسمك الأخير"
                        : ""
                    }
                    onFocus={() => setLastNameTouched(true)}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <InputField
                    id="first-name"
                    label="الاسم الأول"
                    placeholder="أدخل اسمك الأول"
                    iconSrc="/icons/user-check.svg"
                    errorMessage={
                      (isSubmitted || firstNameTouched) && !firstName
                        ? "الرجاء إدخال اسمك الأول"
                        : ""
                    }
                    onFocus={() => setFirstNameTouched(true)}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <InputField
                  id="username"
                  label="اسم المستخدم"
                  placeholder="أدخل اسم المستخدم"
                  iconSrc="/icons/user-alt.svg"
                  errorMessage={
                    (isSubmitted || usernameTouched) && !username
                      ? "الرجاء إدخال اسم المستخدم"
                      : ""
                  }
                  onFocus={() => setUsernameTouched(true)}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                  id="location"
                  label="بلد الإقامة"
                  placeholder="اختر بلدك"
                  iconSrc="/icons/vector.svg"
                  errorMessage={
                    (isSubmitted || locationTouched) && !location
                      ? "يرجى اختيار بلد إقامتك"
                      : ""
                  }
                  onFocus={() => setLocationTouched(true)}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  isDropdown
                />

                <div className="checkbox-group">
                  <label htmlFor="remember">
                    يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا
                  </label>
                  <input type="checkbox" id="remember" />
                </div>
                <div className="button-group">
                  <CustomButton
                    text="رجوع"
                    icon={
                      <Image
                        src={rightIcon}
                        alt="Back Step"
                        width={20}
                        height={20}
                      />
                    }
                    buttonType="secondaryOne"
                    color="orange"
                    onClick={handleBack}
                  />
                  <CustomButton
                    text="إنشاء حسابي"
                    icon={
                      <Image
                        src={profileIcon}
                        alt="Submit"
                        width={20}
                        height={20}
                      />
                    }
                    buttonType="secondaryOne"
                    color="green"
                  />
                </div>
              </>
            )}

            <div className="have-account">
              <text>لديك حساب مسبقاً</text>
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

export default SignUp;
