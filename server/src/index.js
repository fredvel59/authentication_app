const app = require('./app');

const port = app.get('port');

app.get('/', (req, res) => {
  res.send({message: 'the server is running successfully, now you can navigate to /api, for see more information'})
} )

app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
})