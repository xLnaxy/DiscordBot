exports.run = (client, message, args) => {
  
    message.channel.send(`:ping_pong: Pong! \n\`\`${Math.floor(client.ping)}ms\`\` `).catch(console.error);
}