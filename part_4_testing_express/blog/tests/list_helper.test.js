const listHelper = require('../utils/list_helper')
const blogs = require('../utils/blogs')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

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