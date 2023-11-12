export interface UserData{
  /** почта пользователя */
  email: string;
  /** пароль пользователя */
  password: string;
  /** имя пользователя */
  first_name: string;
  /** фамилия пользователя */
  last_name: string;
  /** номер телефона пользователя */
  phone_number: string;
  /** вебсайт пользователя */
  webSite_url: string | null;
  /** роль пользователя */
  role: Role;
  /** аватар пользователя */
  avatar_url: string | null;
}

export interface LoginData {
  /** почта пользователя */
  email: string;
  /** пароль пользователя */
  password: string;
}

export type Role = 'Admin' | 'User';