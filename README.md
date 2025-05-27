# Human-Bot Gateway 🚪🤖

This project detects whether a website visitor is a human or a bot using behavior analysis, and redirects accordingly.

## How It Works
- React frontend tracks interaction (mouse, keyboard, scroll)
- After 5 seconds, user is classified
- Backend logs detection data (IP, UA, result)

## Tech Stack
- React (frontend)
- Node.js + Express (backend)
- CORS + JSON logging

## To Run:
```bash
cd server && npm install && node index.js
cd client && npm install && npm start
```
