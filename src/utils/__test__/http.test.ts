import { describe, expect, it } from 'vitest'
import http from '../http'
import { HttpStatusCode } from 'axios'

describe('http axios', () => {
  it('Goi API', async () => {
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Auth Request', async () => {
    await http.post('login', {
      email: 'd7@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {})
})
