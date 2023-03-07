const supertest = require('supertest')
const listHelper = require('../utils/list_helper')
const app = require('../app')
const api = supertest(app)
const blogs = require('../utils/blogs')

describe('totalLikes', () => {
  test('of empty list is zero', () => {
    const total = listHelper.totalLikes([])

    expect(total).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const total = listHelper.totalLikes([blogs[0]])

    expect(total).toBe(7)
  })

  test('of a bigger list is calculated right', () => {
    const total = listHelper.totalLikes(blogs)

    expect(total).toBe(36)
  })
})

test('has correct number of blog posts', async () => {

  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})