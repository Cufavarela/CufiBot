import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hola " + ctx.from.first_name + "!");
});

bot.hears("Puto", (ctx) => {
  ctx.reply("El que lee.");
});

bot.hears("tu vieja", (ctx) => {
  ctx.reply("En tanga.");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
