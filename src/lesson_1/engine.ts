import { ParsedLineType } from "./parser";
import { calculator, Priority, calculatorPriorities } from "./calculator";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    try {
        if (!isNumber(String(item)) && calculatorPriorities[item] === Priority.FIRST) {
          result = [
            ...result.slice(0, -2),
            calculator[item](Number(prevItem), Number(nextItem)),
          ];
        } else {
          result.push(nextItem);
        }
        return result;
    } catch {
      throw new TypeError("Unexpected stack!");
    }
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];
    try {
        if (!isNumber(String(item)) && calculatorPriorities[item] === Priority.SECOND) {
          result = calculator[item](Number(result), Number(nextItem));
        }
        return result;
    } catch {
      throw new TypeError("Unexpected stack!");
    }
  }, Number(stack[0]));
