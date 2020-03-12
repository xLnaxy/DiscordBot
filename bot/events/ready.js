module.exports = (client) => {
  console.log(`[${client.user.tag}] Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}