import { calculator } from "./calculator";

//массив чисел или строк
export type ParsedLineType = (number | string)[];
//=> это return?
export const is_number = (item: string): boolean => !isNaN(Number(item));

export const parser = (str: string): ParsedLineType | null => {
  const str_array = str.split(" ");
  //reduce Вызывает указанную функцию обратного вызова для всех элементов массива.
  //Возвращаемое значение функции обратного вызова является накопленным результатом и
  //предоставляется в качестве аргумента при следующем вызове функции обратного вызова.
  //@param callbackfn - функция, которая принимает до четырех аргументов.
  //Метод reduce вызывает функцию callbackfn один раз для каждого элемента в массиве.
  //@param initialValue - если указано initialValue, оно используется в качестве
  //начального значения для начала накопления. Первый вызов функции callbackfn предоставляет
  //это значение в качестве аргумента вместо значения массива.
  return str_array.reduce<ParsedLineType>((result, item, key) => {
    const prev_item = str_array[key - 1];
    const isValidNumber = !is_number(prev_item) && is_number(item);
    //hasOwnProperty Определяет, есть ли у объекта свойство с указанным именем.
    const isValidOperator =
      is_number(prev_item) &&
      !is_number(item) &&
      calculator.hasOwnProperty(item);
    if (isValidNumber) {
      result.push(Number(item));
    } else if (isValidOperator) {
      result.push(item);
    } else {
      throw new TypeError("Error");
    }
    return result;
  }, []);
};
