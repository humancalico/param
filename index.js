const sulla = require("sulla");

sulla.create().then((client) => start(client));

function start(client) {
  let checks = (message.author.user === phoneNum) &&
    (message.isGroupMsg === true) &&
    (message.body).toLowerCase().includes(textToLook);
  client.onMessage((message) => {
    if (checks) {
      client.sendText(chatID, Text);
    }
  });
}
