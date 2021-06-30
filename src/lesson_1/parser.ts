import { calculator } from "./calculator";

export type ParsedLineType = (number | string)[];
export const is_number = (item: string): boolean => !isNaN(Number(item));

export const parser = (str: string): ParsedLineType | null => {
  const str_array = str.split(" ");
  
  return str_array.reduce<ParsedLineType>((result, item, key) => {
    const prev_item = str_array[key - 1];
    const isValidNumber = !is_number(prev_item) && is_number(item);
    const isValidOperator =
      is_number(prev_item) &&
      !is_number(item) &&
      Object.hasOwnProperty.call(calculator, item);
      
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
