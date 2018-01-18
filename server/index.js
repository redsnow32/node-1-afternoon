const express = require('express');
const ctrl = require('./controllers/messages_controller')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('/Users/brandon/Documents/WPR32/node/node-1-afternoon/public/build'))

const messagesURL = "/api/messages"
app.post(messagesURL, ctrl.create)
app.get(messagesURL, ctrl.read)
app.put(`${messagesURL}/:id`, ctrl.update);
app.delete(`${messagesURL}/:id`,ctrl.delete)

const port = 3000;
app.listen(port, () => {console.log(`Server is listening to port ${port}`)});