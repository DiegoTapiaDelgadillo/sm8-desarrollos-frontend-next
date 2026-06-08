"use client"

import { useState } from "react"

type FormErrors = Record<string, string>

const validateName = (name: string): string => {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/
  return regex.test(name) ? "" : "El nombre solo debe contener letras y espacios."
}

const validateEmail = (email: string): string => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) ? "" : "El formato del email no es válido."
}

const validateRequired = (value: string, fieldLabel: string): string =>
  value.trim() ? "" : `${fieldLabel} es requerido.`

const validatePhoneNumber = (phone: string): string => {
  const regex = /^\d{10}$/
  return regex.test(phone) ? "" : "El número de teléfono debe contener 10 dígitos."
}

export default function useValidationForm() {
  const [errors, setErrors] = useState<FormErrors>({})

  const validateField = (name: string, value: string): string => {
    let error = ""
    switch (name) {
      case "nombre":
        error = validateName(value)
        break
      case "correoDestino":
        error = validateEmail(value)
        break
      case "asunto":
        error = validateRequired(value, "El asunto")
        break
      case "mensaje":
        error = validateRequired(value, "El mensaje")
        break
      case "telefono":
        error = validatePhoneNumber(value)
        break
    }
    setErrors((prev) => ({ ...prev, [name]: error }))
    return error
  }

  const validateForm = (formData: Record<string, string>): Promise<void> => {
    return new Promise((resolve, reject) => {
      const formErrors: FormErrors = {}
      Object.keys(formData).forEach((key) => {
        const error = validateField(key, formData[key])
        if (error) formErrors[key] = error
      })
      setErrors(formErrors)
      const hasErrors = Object.values(formErrors).some(Boolean)
      if (hasErrors) reject(formErrors)
      else resolve()
    })
  }

  return { errors, validateForm }
}
