import { UserData } from "shared/models/userData.model";

export const ADMIN_PROFILE_DATA: UserData = {
  email: 'admin@gmail.com',
  password: 'admin',
  first_name: 'Иван',
  last_name: 'Иванов',
  phone_number: '79281234567',
  webSite_url: 'admin.site.com',
  role: 'Admin'
}

export const USER_PROFILE_DATA: UserData = {
  email: 'user@mail.ru',
  password: 'user123',
  first_name: 'Владимир',
  last_name: 'Владимирович',
  phone_number: '79287654321',
  webSite_url: null,
  role: 'User'
}