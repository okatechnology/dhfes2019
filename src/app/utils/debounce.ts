export const debounce = <T extends any[]>(cb: (...args: T) => void, timeout: number) => {
  let id: ReturnType<typeof setTimeout> | null = null;

  return (...args: T) => {
    if (id !== null) clearTimeout(id);
    id = setTimeout(() => (cb(...args), (id = null)), timeout);
  };
};
