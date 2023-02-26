const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.json());
app.use(express.static('public'));

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const users = await getUsers();
  if (users.find(user => user.username === username)) {
    res.json({ success: false, message: 'Username already taken' });
  } else if (users.find(user => user.email === email)) {
    res.json({ success: false, message: 'Email already taken' });
  } else {
    users.push({ username, email, password });
    await saveUsers(users);
    res.json({ success: true });
  }
});

async function getUsers() {
  try {
    const data = await fs.readFile('users.json');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function saveUsers(users) {
  await fs.writeFile('users.json', JSON.stringify(users));
}

app.listen(3000, () => console.log('Server listening on port 3000'));

app.get('/dashboard', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const username = sessions[token];
    if (username) {
      res.json({ success: true, username });
    } else {
      res.json({ success: false, message: 'Unauthorized' });
    }
  });

  app.post('/logout', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    delete sessions[token];
    res.json({ success: true });
  });
  