const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)
const Blog = require('../models/blog')
const initialBlogs = require('../utils/blogs')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('all notes are returned', async () => {
  const response = await api.get('/api/blogs')
  const blogs = response.body

  expect(blogs).toHaveLength(initialBlogs.length)
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('blogs define id property', async () => {
  const response = await api.get('/api/blogs')
  const blogs = response.body

  expect(blogs[0].id).toBeDefined()
})

test('addition of a new note succeeds with valid data', async () => {
  const newBlog = {
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogs = await Blog.find({})
  const blogsAtEnd = blogs.map(blog => blog.toJSON())

  expect(blogsAtEnd).toHaveLength(initialBlogs.length + 1)
})

afterAll(async () => {
  await mongoose.connection.close()
})