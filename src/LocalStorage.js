import get from 'lodash/get';

const STORAGE_KEY = 'raColumnsConfig';

// Very basic storage helper
// values are stored in browser localStorage

const getRootValue = () => {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return undefined;
  }
};

const setRootValue = value => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (e) {}
};

const LocalStorage = {
  get(key) {
    return get(getRootValue(), key);
  },
  set(key, value) {
    const oldValue = getRootValue();
    setRootValue({
      ...oldValue,
      [key]: value,
    });
  },
};

export default LocalStorage;
