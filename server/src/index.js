const app = require('./app');

const port = app.get('port');
const github = 'https://github.com/fredvel59/authentication_app/tree/master/server#readme'


app.get('/', (req, res) => {
  res.send({
    message: `the server is running successfully, now you can navigate to the documentation, for see more information`,
    documentation: github
  })
} )

app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
})