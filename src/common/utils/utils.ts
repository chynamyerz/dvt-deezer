import { isFunction } from "lodash";

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export const zeroPrefix = (num: number) => {
  return num < 10 ? "0" + num : num;
};

export const formatNumber = (value: number, formatter: Intl.NumberFormat) => {
  if (isFunction(formatter)) {
    return formatter(value).format(value);
  }

  return formatter.format(value);
};
