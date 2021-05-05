import { createInterface } from "readline";
import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Для определения констант используется ключевое слово const
//const rl1 = createInterface({
//  input: process.stdin,
//  output: process.stdout,
//});

//rl.question(query[, options], callback)#
//query <string> Оператор или запрос для записи output, добавленный к подсказке.
//options <Объект>
//signal <AbortSignal> Опционально позволяет question()отменить с помощью AbortController.
//callback <Функция> Функция обратного вызова, которая вызывается с вводом пользователя в ответ на query.
//В rl.question()методе отображает query. Добавьте его к output, ожидает ввод данных пользователя , чтобы быть предусмотрены на input, затем вызывает callback функцию , проходящую предоставленный вход в качестве первого аргумента.
//При вызове rl.question()возобновляет input поток, если он был приостановлен.
//Если readline.Interfaceбыл создан outputнабор для nullили не написано.undefinedquery
//Переданная callback функция rl.question()не следует типичному шаблону принятия Errorобъекта или nullв качестве первого аргумента. callbackВызываются с предоставленным ответом в качестве единственного аргумента.
//Объект Promise используется для отложенных и асинхронных вычислений.
const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = runner(answer);
      if (result) {
        console.log(`Result: ${result}`);
      }
      resolve(null);
    });
  });

//Если вы новичок в асинхронных функциях, обратите внимание, что вам нужно ввести 
//await перед вопросом, чтобы указать узлу не продолжать, пока вопрос не разрешится с ответом.
async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
