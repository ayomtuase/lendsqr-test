import { useState } from "react";

const PasswordInput = ({ placeholder = "Password", ...restProps }) => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="password-input-container">
      <input
        type={!isVisible ? "password" : "text"}
        placeholder={placeholder}
        {...restProps}
      />
      <span className="change-visibility" onClick={toggle}>
        {isVisible ? "HIDE" : "SHOW"}
      </span>
    </div>
  );
};

export default PasswordInput;
