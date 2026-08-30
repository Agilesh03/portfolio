const express = require("express")
const cors = require("cors")
require("dotenv").config()

const db = require("./db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Test backend
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio backend is running!",
  })
})

// Test MySQL connection
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS connected")

    res.json({
      message: "MySQL connected successfully!",
      database: rows,
    })
  } catch (error) {
    console.error("Database error:", error)

    res.status(500).json({
      message: "MySQL connection failed",
    })
  }
})

// Receive contact form messages
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required",
      })
    }

    // Insert message into MySQL
    const [result] = await db.query(
      `INSERT INTO messages (name, email, subject, message)
       VALUES (?, ?, ?, ?)`,
      [name, email, subject || "", message]
    )

    res.status(201).json({
      message: "Message sent successfully!",
      id: result.insertId,
    })
  } catch (error) {
    console.error("Error saving message:", error)

    res.status(500).json({
      message: "Failed to save message",
    })
  }
})

// Get all messages
app.get("/api/messages", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM messages ORDER BY created_at DESC"
    )

    res.json(rows)
  } catch (error) {
    console.error("Error fetching messages:", error)

    res.status(500).json({
      message: "Failed to fetch messages",
    })
  }
})

// Start server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})