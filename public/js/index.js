var socket = io()

socket.on('connect', () => {
  console.log('Connected to server')

  socket.emit('createMessage', {
    from: 'Shubham',
    text: 'Hello World!'
  })
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})

socket.on('newMessage', (message) => {
  console.log('newMessage', message)
})
