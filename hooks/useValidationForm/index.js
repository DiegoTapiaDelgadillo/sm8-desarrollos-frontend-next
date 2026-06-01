import { useState } from 'react';

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name) ? '' : 'El nombre solo debe contener letras y espacios.';
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? '' : 'El formato del email no es válido.';
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber) ? '' : 'El número de teléfono debe contener 10 dígitos.';
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'nombre':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'telefono':
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

  const validateForm = (formData) => {
    return new Promise((resolve, reject) => {
      const formErrors = {};
      Object.keys(formData).forEach((key) => {
        const error = validateField(key, formData[key]);
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
