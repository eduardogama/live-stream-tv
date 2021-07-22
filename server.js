require('dotenv/config');
const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const baseDir = `${__dirname}/build/`;

app.use(express.static(`${baseDir}`));
app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }));

//Default port
const port = process.env.HTTPS_PORT || 3000;

app.listen(port, () => {
  console.log('\n-------------------------------------------');
  console.log('Running Satellite Frontend: development mode');
  console.log(`Server running on http://localhost:${port}`);
  console.log('-------------------------------------------\n');
});

//Development mode
/*if(process.env.MODE == 'dev' || process.env.MODE == 'prod') {
  const server = http.Server(app);
  server.listen(port, () => {
    console.log('\n-------------------------------------------');
    console.log('Running Satellite Frontend: development mode');
    console.log(`Server running on http://localhost:${port}`);
    console.log('-------------------------------------------\n');
  });
}*/
