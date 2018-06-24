const moment = require('moment')

// const date = new Date()
// const months = ['Jan', 'Feb', 'Mar', 'Apr']

const date = moment()
// date.add(100, 'years').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))
console.log(date.format('h:mm a'))
