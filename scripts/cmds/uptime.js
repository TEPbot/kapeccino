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
    const botUptime = formatUptime(process.uptime());
    const currentDate = formatDate(new Date());

    const response = `📅 𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐃𝐚𝐭𝐞: ${currentDate}\n`
      + `🤖 𝐁𝐨𝐭 𝐔𝐩𝐭𝐢𝐦𝐞: ${botUptime}`;

    message.reply(response);
  }
};

function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = Math.floor(seconds % 60); // ensure seconds is an integer

  return `${days}d ${hours}h ${minutes}m ${sec}s`;
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}
