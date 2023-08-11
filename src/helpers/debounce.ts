export const debounce = <F extends (...args: string[]) => void>(
  fn: F,
  delay: number,
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
