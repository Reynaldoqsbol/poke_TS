export const setItem = <T extends number | string | boolean>(
  key: string,
  item: T
) => {
  localStorage.setItem(key, item.toString());
};

// to add a parameter name in type of thing
export const getItem = <T extends number | string | boolean>(key: string) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item) as T;
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
