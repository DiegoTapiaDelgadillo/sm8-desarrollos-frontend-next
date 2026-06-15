"use client";

import { useState } from "react";
import type { FormDataState } from "@/types";

interface FormErrors {
  [key: string]: string;
}

const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateName = (name: string): string => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name)
      ? ""
      : "El nombre solo debe contener letras y espacios.";
  };

  const validateEmail = (email: string): string => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "El formato del email no es válido.";
  };

  const validatePhoneNumber = (phoneNumber: string): string => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber)
      ? ""
      : "El número de teléfono debe contener 10 dígitos.";
  };

  const validateField = (name: string, value: string): string => {
    let error = "";
    switch (name) {
      case "nombre":
        error = validateName(value);
        break;
      case "correoDestino":
        error = validateEmail(value);
        break;
      case "telefono":
        error = validatePhoneNumber(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    return error;
  };

  const validateForm = (formData: FormDataState): Promise<void> => {
    return new Promise((resolve, reject) => {
      const formErrors: FormErrors = {};
      const entries = Object.entries(formData) as [string, string][];
      entries.forEach(([key, value]) => {
        const error = validateField(key, value);
        if (error) formErrors[key] = error;
      });

      setErrors(formErrors);

      const hasErrors = Object.values(formErrors).some((error) => error);
      if (hasErrors) {
        reject(formErrors);
      } else {
        resolve();
      }
    });
  };

  return {
    errors,
    validateForm,
  };
};

export default useFormValidation;
