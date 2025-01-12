import React from "react";
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDropdown?: boolean;
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
}) => {
  const labelClass = errorMessage ? "label-with-icon error" : "label-with-icon";

  return (
    <div className="form-group">
      <label htmlFor={id} className={labelClass}>
        <Image src={iconSrc} alt="icon" width={15} height={15} />
        {label}
      </label>
      <div className="input-container">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          value={value}
          onChange={onChange}
          className={`input-container ${errorMessage ? "error" : ""}`}
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
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
