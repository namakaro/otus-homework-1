import { ParsedLineType } from "./parser";
import { calculator, Priority, calculatorPriorities } from "./calculator";

export const is_number = (item: string): boolean => !isNaN(Number(item));

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!is_number(String(item)) && calculatorPriorities[item] === Priority.first) {
      if (!calculator[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        calculator[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (calculatorPriorities[item] === Priority.first) {
      throw new TypeError("Unexpected stack!");
    }

    if (!is_number(String(item)) && calculatorPriorities[item] === Priority.second) {
      result = calculator[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
