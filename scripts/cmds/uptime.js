const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  config: {
    name: "uptime",
    aliases: ["upt", "stat"],
    version: "1.0",
    author: "JARiF@Cock",
    role: 0,
    category: "owner",
    guide: {
      en: "Use {p}info"
    }
  },
  onStart: async function ({ message }) {
    const botUptime = formatMilliseconds(process.uptime() * 1000);


    const response = `🤖 𝐁𝐨𝐭 𝐔𝐩𝐭𝐢𝐦𝐞: ${botUptime}`;

    message.reply(response);
  }
};

function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  return `${days}d ${hours}h ${minutes}m ${sec}s`;
}

