const Discord = require("discord.js");
const client = new Discord.Client();
const imageSearch = require("image-search-google");
const google = new imageSearch(process.env.SEARCHID, process.env.APIKEY);
const options = { page: 1 };
const fs = require("fs");
const ytdl = require("ytdl-core");
const randomPuppy = require("random-puppy");
client.on("ready", () => {
  client.user.setActivity(
    "#google-arama kanalı açın. Yardım komudu: yardım ver",
    {
      type: "WATCHING",
      name: "itt"
    }
  );

  console.log(client.guilds.cache.size);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
  if (msg.author.bot) return;

  if (msg.attachments.first()) {
    if (!msg.channel.name === "yapay-zeka") return;
    else if (msg.channel.name === "yapay-zeka") {
      const deepai = require("deepai");
      // 7b65c2df-8ae8-404c-af20-61319ef49cec
      deepai.setApiKey("7b65c2df-8ae8-404c-af20-61319ef49cec");

      msg.channel.startTyping();

      var res = await deepai.callStandardApi("neuraltalk", {
        image: msg.attachments.first().url
      });
      msg.channel.stopTyping();
      msg.channel.send(
        new Discord.MessageEmbed()
          .setTitle("Fotoğrafın açıklaması:")
          .setDescription(res.output)
      );
    } else if (msg.channel.name === "yapay-zeka") {
      msg.channel.send("lütfen açıklamam için foto verin");
    }
  }

  if (msg.mentions.users.first()) {
    if (!msg.mentions.users.first().id == client.id) return;
    if (!msg.mentions.users) return;
    const attac = new Discord.MessageAttachment(
      "https://cdn.discordapp.com/attachments/803232072328151082/803240566745595904/kardesler_iletisim.mp4"
    );
    msg.channel.send(attac);
  }
  if (msg.author.bot) return;
  if (msg.channel.name === "google-arama") {
    google
      .search(msg.content, options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor(msg.content + " verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        if (error === "HTTPError: Response code 429 (Too Many Requests)") {
          msg.channel.send(
            "**HATA: BOT RESİM ARAMA KOTASINI AŞTI, BİRAZ SONRA TEKRAR DENEYİNİZ.**"
          );
          return;
        }
        client.user.setActivity(
          "RESİM ARAMA KOTASI AŞILMIŞTIR. #google-arama kanalı açın. Yardım komudu: yardım ver",
          {
            type: "WATCHING",
            name: "itt"
          }
        );
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }
  if (msg.content.toLowerCase().includes("yardım ver")) {
    msg.channel.send(
      "#google-arama diye bir kanal açıp oraya yazabilirsiniz, ben onları google'da aratacağım. (kötü kelimeler yazanın ben *****)"
    );
  }
  if (
    msg.content.toLowerCase().includes("patates time") ||
    msg.content.toLowerCase().includes("patates ver")
  ) {
    google
      .search("patates", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Patates verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        if (error === "HTTPError: Response code 429 (Too Many Requests)") {
          msg.channel.send(
            "**HATA: BOT RESİM ARAMA KOTASINI AŞTI, BİRAZ SONRA TEKRAR DENEYİNİZ.**"
          );
          return;
        }
        client.user.setActivity(
          "RESİM ARAMA KOTASI AŞILMIŞTIR. #google-arama kanalı açın. Yardım komudu: yardım ver",
          {
            type: "WATCHING",
            name: "itt"
          }
        );
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }
  if (
    msg.content.toLowerCase().includes("tost time") ||
    msg.content.includes("tost yap")
  ) {
    google
      .search("tost", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Tost yaptım.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        if (error === "HTTPError: Response code 429 (Too Many Requests)") {
          msg.channel.send(
            "**HATA: BOT RESİM ARAMA KOTASINI AŞTI, BİRAZ SONRA TEKRAR DENEYİNİZ.**"
          );
          return;
        }
        client.user.setActivity(
          "RESİM ARAMA KOTASI AŞILMIŞTIR. #google-arama kanalı açın. Yardım komudu: yardım ver",
          {
            type: "WATCHING",
            name: "itt"
          }
        );
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }
  if (
    msg.content.toLowerCase().includes("domates time") ||
    msg.content.toLowerCase().includes("domates ver")
  ) {
    google
      .search("domates", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Domates verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => console.log(error));
  }
  if (
    msg.content.toLowerCase().includes("hiko baba") ||
    msg.content.toLowerCase().includes("hikobaba")
  ) {
    google
      .search("hikobaba", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Hiko baba verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        if (error === "HTTPError: Response code 429 (Too Many Requests)") {
          msg.channel.send(
            "**HATA: BOT RESİM ARAMA KOTASINI AŞTI, BİRAZ SONRA TEKRAR DENEYİNİZ.**"
          );
          return;
        }
        client.user.setActivity(
          "RESİM ARAMA KOTASI AŞILMIŞTIR. #google-arama kanalı açın. Yardım komudu: yardım ver",
          {
            type: "WATCHING",
            name: "itt"
          }
        );
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }
  if (
    msg.content.toLowerCase().includes("killa hakan") ||
    msg.content.toLowerCase().includes("killa hakan ver")
  ) {
    google
      .search("killa hakan", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Avatoss verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        if (error === "HTTPError: Response code 429 (Too Many Requests)") {
          msg.channel.send(
            "**HATA: BOT RESİM ARAMA KOTASINI AŞTI, BİRAZ SONRA TEKRAR DENEYİNİZ.**"
          );
          return;
        }
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }
  if (msg.content.toLowerCase().startsWith("ara")) {
    google
      .search("hiko baba", options)
      .then(images => {
        const index = Math.floor(Math.random() * 10);
        const toast = new Discord.MessageEmbed()
          .setAuthor("Hiko baba verdim.")
          .setDescription("yemek yapma botu")
          .setImage(images[index].url);
        msg.channel.send(toast);
        console.log(images);
      })
      .catch(error => {
        msg.channel.send(
          "ARADAĞINIZ FOTOĞRAF BULUNAMADI., \n *ERROR KODU:* `" +
            error +
            "`\n **BOT RESİM ARAMA KOTASINI AŞMIŞ OLABİLİR.\n BİRAZ SONRA TEKRAR DENEYİNİZ.**"
        );
      });
  }

  if (msg.content.toLowerCase() === "hentai ver") {
    if (!msg.channel.nsfw) return;
    const NSFW = require("discord-nsfw");

    const nsfw = new NSFW();

    const image = await nsfw.hentai();

    const embed = new Discord.MessageEmbed()

      .setTitle(`henşai(31 çekmeyi unutma)`)

      .setColor("GREEN")

      .setImage(image);

    msg.channel.send(embed);
  }
  if (msg.content.toLowerCase() === "hentai verme") {
    if (!msg.channel.nsfw) return;
    const NSFW = require("discord-nsfw");

    const nsfw = new NSFW();

    const image = await nsfw.pgif();

    const embed = new Discord.MessageEmbed()

      .setTitle(
        `henşai vermedim UwU (sana bi iyilik yaptım bak ne verdim ve 31 e katkı sağladım bu arada kalktı mı? şeyini indirmek için https://www.youtube.com/watch?v=1AmeOkPkXr4)`
      )

      .setColor("GREEN")

      .setImage(image);

    msg.channel.send(embed);
  }

  if (msg.content.toLowerCase().startsWith("!meme")) {
    var memeCreator = require("meme-creator");

    if (!msg.attachments.first())
      return msg.channel.send(
        "foto ver lo meme yapıyım lo yarram-eğer karı memesi istiyorsan hentai ver yaz daha iyi şeyler çıkacak sjsj hem 31 çekersin sjsjsj"
      );
    const args = msg.content
      .slice(1)
      .trim()
      .split(" ");
    const command = args.shift().toLowerCase();
    var argus = args.join(" ").split(",");
    let options = {
      imageURL: msg.attachments.first().url, // URL to image
      topText: argus[0], // en büyük meme adı
      bottomText: argus[1], // memenin adı
      directory: "memes", // memeleri nereye kaydetçen
      fileName: "random" // rov rov abi nabıyuunnnnnnn
    };

    memeCreator(options, function(res, error) {
      if (error) throw new Error(error);

      msg.channel.send("alın mem", { files: ["./" + res.fileName] });
    });
  }
});

client.login(process.env.token);
