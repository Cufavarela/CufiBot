import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Hola " + ctx.from.first_name + "!");
});

bot.hears("Hoda bebe", (ctx) => {
  ctx.reply("Tau, mejor me voy a otro lado.");
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
