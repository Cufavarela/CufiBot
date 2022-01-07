import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Hola Pau, soy el famoso CufiBot!!"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("Cufa es el mejor?", (ctx) => ctx.reply("Mas vale vieeeeeja 👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
