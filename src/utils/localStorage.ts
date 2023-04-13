enum StorageKey {
  search = 'search',
}

const setStorage = (key: StorageKey, value: string): void => localStorage.setItem(key, value);

const getStorage = (key: StorageKey): string | null => localStorage.getItem(key);

export { StorageKey, setStorage, getStorage };
