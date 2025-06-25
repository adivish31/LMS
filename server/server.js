import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// initialize express
const app = express()

// connect to database
await connectDB()
console.log('Connected to database')

// middlewares
app.use(cors())

// routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

// ❌ Do NOT use app.listen() on Vercel!
// ✅ Instead, export app:
export default app