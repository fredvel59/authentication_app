const app = require('./app');

const port = app.get('port');

app.get('/', (req, res) => {
  res.send({message: 'the server is running successfully'})
} )

app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
})