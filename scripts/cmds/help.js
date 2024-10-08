const commandInfoMap = {
  ai: {
    name: "ai",
    description: "Ai Based on GPT-4",
    guide: "-ai what is life?"
    },
  spotify: {
    name: "spotify",
    description: "play song from spotify",
    guide: "-spotify <song title> <artist>\nexample:\n-spotify perfect by ed sheeran"
    },
  tempmail: {
    name: "tempmail",
    description: "Get Temporary Emails and it's Inbox messages",
    guide: "-tempmail create\n-tempmail inbox <email>"
  },
  alldl: {
    name: "alldl",
    description: "download video content using link from Facebook, Instagram, Tiktok, Youtube, Twitter, and Spotify audio",
    guide: "-alldl [link]"
  },
removebg: {
		  name: "removebg",
  		description: "remove background of an image",
  		guide: "reply to an image and type\n-removebg or -rbg"
		},
  translate: {
    name: "translate",
    description: "Translate to any languages",
    guide: "Reply to text you want to translate and type \n-translate <language>"
  },
	
  callad: {
    name: "callad",
    description: "send report, feedback, bug,... to Admin bot",
    guide: "-callad i love you admin"
  },
	
  pinterest: {
    name: "pinterest",
    description: "Searches Images in Pinterest ",
    guide: "-pinterest cat -10"
  },
  dalle: {
    name: "dalle",
    description: "make images through texts",
    guide: "-dalle cat in a hoodie"
  },
  remini: {
    name: "remini",
    description: "enhances your image to lessen the blur",
    guide: "reply to image and type -remini"
  },
  lyrics: {
    name: "lyrics",
    description: "Fetches lyrics of a song",
    guide: "-lyrics perfect by ed sheeran"
  },
 owner: {
    name: "owner",
    description: "information about admin",
    guide: "-owner"
  },	
  help: {
    name: "help",
    description: "View all commands",
    guide: "-help\n-help <command name>"
  },
  prefix: {
    name: "prefix",
    description: "view some commands and shows bot's prefix",
    guide: "prefix"
  },
  uptime: {
    name: "uptime",
    description: "See how long the bot has been running.",
    guide: "-uptime"
  },
  unsend: {
    name: "unsend",
    description: "deletes bot messages",
    guide: "reply to bot message and type -unsend"
  },
  ytb: {
  	name: "ytb",
		version: "1.16",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Tải video, audio hoặc xem thông tin video trên YouTube",
			en: "Download video, audio or view video information on YouTube"
		},
		category: "media",
		guide: {
			vi: "   {pn} [video|-v] [<tên video>|<link video>]: dùng để tải video từ youtube."
				+ "\n   {pn} [audio|-a] [<tên video>|<link video>]: dùng để tải audio từ youtube"
				+ "\n   {pn} [info|-i] [<tên video>|<link video>]: dùng để xem thông tin video từ youtube"
				+ "\n   Ví dụ:"
				+ "\n    {pn} -v Fallen Kingdom"
				+ "\n    {pn} -a Fallen Kingdom"
				+ "\n    {pn} -i Fallen Kingdom",
			en: "   {pn} [video|-v] [<video name>|<video link>]: use to download video from youtube."
				+ "\n   {pn} [audio|-a] [<video name>|<video link>]: use to download audio from youtube"
				+ "\n   {pn} [info|-i] [<video name>|<video link>]: use to view video information from youtube"
				+ "\n   Example:"
				+ "\n    {pn} -v Fallen Kingdom"
				+ "\n    {pn} -a Fallen Kingdom"
				+ "\n    {pn} -i Fallen Kingdom"
		}
  }
};

module.exports = {
  config: {
    name: "help",
    aliases: ["help"],
    version: 1.0,
    author: "LiANE&Coffee",
    shortDescription: { en: "View all commands" },
    category: "members",
  },
  onStart: async function({ message, args }) {
    if (args[0]) {
      const command = args[0].toLowerCase();
      if (commandInfoMap[command]) {
        const { name, description, guide } = commandInfoMap[command];
        const response = `━━━━━━━━━━━━━━━━\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙽𝚊𝚖𝚎: ${name}\n𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}\n𝙶𝚞𝚒𝚍𝚎: ${guide}\n━━━━━━━━━━━━━━━━`;
        return message.reply(response);
      } else {
        return message.reply("Command not found.");
      }
    } else {
      const commandsList = `━━━━━━━━━━━━━━━━
𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:
╭─╼━━━━━━━━━━╾─╮
│ - Ai
│ - Alldl
 | - Callad
│ - Dalle
│ - Help
│ - Lyrics
│ - Owner
│ - Pinterest
│ - Prefix
│ - Remini
│ - Removebg
│ - Tempmail
│ - Translate
│ - Unsend
│ - Uptime
│ - Ytb
╰─━━━━━━━━━━━╾─╯
-𝚑𝚎𝚕𝚙 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎>
𝚃𝚘 𝚜𝚎𝚎 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎
available 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜.

Example: -help ai
━━━━━━━━━━━━━━━━━━
Owner: 𝐓𝐞𝐩
Fb:https://www.facebook.com/crxxsss
━━━━━━━━━━━━━━━━━━`;

      return message.reply(commandsList);
    }
  }
};
