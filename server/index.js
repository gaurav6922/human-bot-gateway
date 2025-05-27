const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post('/api/log', (req, res) => {
  const log = {
    timestamp: new Date().toISOString(),
    userAgent: req.body.userAgent,
    isHuman: req.body.isHuman,
    metrics: req.body.metrics,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  };

  const logLine = `${log.timestamp} | IP: ${log.ip} | Human: ${log.isHuman} | UA: ${log.userAgent}\n`;
  fs.appendFileSync(path.join(__dirname, 'logs', 'access.log'), logLine);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
