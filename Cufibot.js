import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hola " + ctx.from.first_name + "!");
});

bot.hears("palmas?", (ctx) => {
  ctx.reply(
    "Y colorín colorado, el que no hace palmas se sienta en el pelado."
  );
});

bot.hears("tu vieja", (ctx) => {
  ctx.reply("En tanga.");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
