const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // ви можете обрати інший порт

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-application', (req, res) => {
  const { name, email } = req.body;

  // Ось де ви можете робити щось із отриманими даними, наприклад, зберігати їх у базі даних

  console.log('Received application:', { name, email });

  // Відповідь клієнту
  res.json({ success: true, message: 'Заявка успішно подана' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
