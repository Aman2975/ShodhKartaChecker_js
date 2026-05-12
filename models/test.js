// test-db.js
import mongoose from 'mongoose'
import User from './Users.js'

await mongoose.connect('mongodb://localhost:27017/shodhKartaChecker')

await User.create({
  email: 'test@test.com',
  username: 'testuser',
  hashed_password: 'hashedpass123',
  role: 'user'
})

console.log('shodhKartaChecker created + user inserted!')
await mongoose.disconnect()