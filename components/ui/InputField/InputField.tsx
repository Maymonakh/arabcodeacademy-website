import React, { useState } from "react";
import Image from "next/image";
import "./InputField.css";

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  iconSrc: string;
  showEyeIcon?: boolean;
  errorMessage?: string;
  onFocus?: () => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDropdown?: boolean;
  type?: "text" | "password";
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  placeholder,
  iconSrc,
  showEyeIcon = false,
  errorMessage,
  onFocus,
  value,
  onChange,
  isDropdown = false,
  type = "text",
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const countries = ["فلسطين", "الأردن", "مصر", "سوريا"];

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleOptionSelect = (country: string) => {
    const syntheticEvent = {
      target: { value: country } as HTMLInputElement,
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
    setIsDropdownVisible(false);
  };

  const labelClass = errorMessage ? "label-with-icon error" : "label-with-icon";

  return (
    <div className="form-group">
      <label htmlFor={id} className={labelClass}>
        <Image src={iconSrc} alt="icon" width={15} height={15} />
        {label}
      </label>
      <div
        className={`input-container ${isDropdown ? "dropdown" : ""}`}
        onClick={isDropdown ? handleDropdownToggle : undefined}
      >
        <input
          type={isDropdown ? "text" : type}
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          value={value}
          onChange={(e) => onChange(e)}
          readOnly={isDropdown}
          className={`input ${errorMessage ? "error" : ""}`}
        />
        {isDropdown && (
          <span className="arrow-icon">
            <Image
              src="/icons/angle-down.svg"
              alt="arrow"
              width={25}
              height={25}
            />
          </span>
        )}
        {showEyeIcon && !isDropdown && (
          <span className="input-icon">
            <Image
              src="/icons/eye-slash.svg"
              alt="eye-icon"
              width={15}
              height={15}
            />
          </span>
        )}
      </div>
      {isDropdownVisible && isDropdown && (
        <ul className="dropdown-menu">
          {countries.map((country) => (
            <li
              key={country}
              className="dropdown-item"
              onClick={() => handleOptionSelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
