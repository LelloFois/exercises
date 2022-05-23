class Message {
  constructor(messageData) {
    this.text = messageData.text;
    this.side = messageData.side;
    this.name = messageData.name;

    const messageElement = document.createElement('div');
    messageElement.className = `message message--${messageData.side}`;
    const innerElement = document.createElement('div');
    innerElement.className = 'message__text';
    innerElement.textContent = messageData.text;
    messageElement.appendChild(innerElement);

    this.element = messageElement;
  }
}

export default Message;
