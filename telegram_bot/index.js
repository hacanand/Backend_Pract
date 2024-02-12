const { Telegraf } = require("telegraf");
const axios = require("axios");
/* How to get the secret token for creating a bot in Telegram ?
  -> open and search for botfather in Telegram
  ->to create bot type /newbot
  ->give name to your bot
  ->then it will ask for a username ending with bot           ex:code_example_bot
->at t.me/code_example_bot will show your bot

*/
function linearSearch(arr, n) {

}
const bot = new Telegraf("6729917410:AAGDtqogdyzSeGj9MyhJ-HfLnueCeRRbluc");
bot.start((ctx) => ctx.reply("welcome to coding solution "));
bot.command('linersearchcpp', async function (ctx) {
  const response = await axios.get('https://rawgithubusercontent.com/zhiwei1997/algorithm-visualizer/master/src/algorithms/search/linear-search/linear-search.cpp');
  return ctx.reply(response.data);
});
bot.command('binarysearchcpp', async function (ctx) {
  const response = await axios.get('https://rawgithubusercontent.com/aditya-190/algorithm-visualizer/master/src/algorithms/search/binary-search/binary-search.cpp');
  console.log(response.data);
   return ctx.reply(response.data);
})
bot.on('sticker', (ctx) => ctx.reply("🧑‍💻"));
bot.launch();
