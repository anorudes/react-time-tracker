export const saveToLocalStorage = store => next => action => {
  const result = next(action);
  if (action.saveToLocalStorage) {
    const items = store.getState().items.items;
    localStorage.setItem('items', JSON.stringify(items));
  }
  return result;
};
