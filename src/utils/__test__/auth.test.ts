import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxOGYzMWFmYzJlMWExZjk2ODFmNCIsImVtYWlsIjoiS2hvYU5EU0Bmc29mdC5jb20udm4iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA4LTIwVDA0OjMxOjMzLjAyMVoiLCJpYXQiOjE2OTI1MDU4OTMsImV4cCI6MTY5MjUwNjQ5M30.BQ3Usk6fGBIb6ihaamPXTRcAvbKc-RdSpPoUTh50u4s'
const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzYxOGYzMWFmYzJlMWExZjk2ODFmNCIsImVtYWlsIjoiS2hvYU5EU0Bmc29mdC5jb20udm4iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA4LTIwVDA0OjMxOjMzLjAyMVoiLCJpYXQiOjE2OTI1MDU4OTMsImV4cCI6MTY5MjUwOTQ5M30.1ZBp3YfCt_2C4Sh4IMAi5G3exmNNr6AyU6kN0_xISjA'

const profile =
  '{"_id":"647618f31afc2e1a1f9681f4","roles":["User"],"email":"KhoaNDS@fsoft.com.vn","createdAt":"2023-05-30T15:40:35.308Z","updatedAt":"2023-08-11T13:42:35.959Z","__v":0,"address":"1 Lê Đình Chinh","date_of_birth":"2003-03-10T17:00:00.000Z","name":"Khoa Nguyen","phone":"0394673190","avatar":"2c350ef1-de19-469c-87b5-d731fdb4e4a5.jpg"}'

beforeEach(() => {
  localStorage.clear()
})

describe('getAccessTokenFromLS', () => {
  it('Lấy access_token', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('getRefreshTokenToLS', () => {
  it('Lấy refresh_token', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toBe(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token refresh_token profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    setProfileToLS(JSON.parse(profile))
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
