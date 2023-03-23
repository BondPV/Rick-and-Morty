enum StorageKey {
  search = 'search',
}

const setStorage = (key: StorageKey, value: string): void => localStorage.setItem(key, value);

const getStorage = (key: StorageKey) => localStorage.getItem(key);

export { StorageKey, setStorage, getStorage };
