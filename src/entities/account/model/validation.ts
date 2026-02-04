import type { AccountType } from './types'

export interface AccountErrors {
  login?: string
  password?: string
}

export function validateAccount(login: string, password: string | null, type: AccountType): AccountErrors {
  const errors: AccountErrors = {}

  if (!login.trim()) {
    errors.login = 'Обязательное поле'
  } else if (login.length > 100) {
    errors.login = 'Максимум 100 символов'
  }

  if (type === 'Локальная') {
    if (!password || !password.trim()) {
      errors.password = 'Обязательное поле'
    } else if (password.length > 100) {
      errors.password = 'Максимум 100 символов'
    }
  }

  return errors
}
