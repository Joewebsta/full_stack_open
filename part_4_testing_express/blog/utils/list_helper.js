const blogs = require('./blogs')

const dummy = blogs => {
  return 1;
}

const totalLikes = blogs => {
  return blogs.reduce((total, { likes }) => {
    return total + likes
  }, 0)
}

module.exports = {
  dummy,
  totalLikes
}