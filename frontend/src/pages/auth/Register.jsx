import React, { useState } from "react";
import classes from "./auth.module.css";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { apiRegisterMethod } from "./../../http/authenticate";
import { useInput } from "../../hooks/useInput";
import {
  emailIsValid,
  isNotEmpty,
  isPasswordValid,
} from "../../assets/validations/validator";
import { notificationErrorAlert } from "../../helpers/alert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultError, setResultError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const {
    value: firstnameValue,
    handleInputChange: handleFirstnameChange,
    handleInputBlur: handleFirstnameBlur,
    hasError: firstnameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: lastnameValue,
    handleInputChange: handleLastnameChange,
    handleInputBlur: handleLastnameBlur,
    hasError: lastnameHasError,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isNotEmpty(value) && emailIsValid(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => isPasswordValid(value));

  const validateForm = () => {
    if (
      !isNotEmpty(firstnameValue) ||
      !isNotEmpty(emailValue) ||
      !emailIsValid(emailValue) ||
      !isPasswordValid(passwordValue)
    ) {
      throw new Error("Veuillez remplir le formulaire");
    }
  };
  const handleRegister = async () => {
    setIsLoading(true);

    const dataSend = {
      firstname: firstnameValue,
      lastname: lastnameValue,
      email: emailValue,
      password: passwordValue,
    };

    try {
      const result = await toast.promise(apiRegisterMethod(dataSend), {
        pending: "Création du compte en cours...",
      });
      if (result.statusCode === 200) {
        setIsLoading(false);
        setResultError(false);
        toast.success(result.message);
        navigate("/login");
      } else {
        setIsLoading(false);
        setResultError(true);

        toast.error(result.message);
        setErrorText(result.message);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.message) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className={classes.centerContent}>
      <div className={classes.authBox}>
        <h4 className={classes.formTitle}>
          Inscription a votre compte utilisateur
        </h4>

        {resultError && <p className="control-error-text">{errorText}</p>}

        <div className={classes.formGroup}>
          <label>Nom</label>
          <Input
            type="text"
            className="inputDefault p-0"
            onBlur={handleFirstnameBlur}
            value={firstnameValue}
            onChange={handleFirstnameChange}
            error={firstnameHasError}
            placeholder="Entrer votre nom..."
          />
        </div>
        <div className={classes.formGroup}>
          <label>Prénom</label>
          <Input
            type="text"
            className="inputDefault p-0"
            onBlur={handleLastnameBlur}
            value={lastnameValue}
            onChange={handleLastnameChange}
            error={lastnameHasError}
            placeholder="Entrer votre prénom..."
          />
        </div>
        <div className={classes.formGroup}>
          <label>Email</label>
          <Input
            type="email"
            onBlur={handleEmailBlur}
            value={emailValue}
            onChange={handleEmailChange}
            error={emailHasError}
            className="inputDefault p-0"
            placeholder="Entrer votre mail..."
          />
        </div>
        <div className={classes.formGroup}>
          <label>Password</label>
          <Input
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            error={passwordHasError}
            onBlur={handlePasswordBlur}
            className="inputDefault p-0"
            placeholder="****"
          />
        </div>

        <Button
          custom_class="w-100 cursor-pointer p-0"
          title={!isLoading ? "M'inscrire" : "Loading..."}
          onClick={handleRegister}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}
