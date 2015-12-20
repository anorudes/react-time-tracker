export function addTime(id, seconds) {
  return {
    type: 'ADD_TIME',
    id,
    seconds,
    saveToLocalStorage: true,
  };
}

export function addItem(name, cost) {
  return {
    type: 'ADD_ITEM',
    name,
    cost,
    saveToLocalStorage: true,
  };
}

export function delItem(id) {
  return {
    type: 'DELETE_ITEM',
    id,
    saveToLocalStorage: true,
  };
}

export function init() {
  return {
    type: 'INIT',
  };
}

export function closeItem() {
  return {
    type: 'CLOSE_ITEM',
  };
}

export function openItem(id) {
  return {
    type: 'OPEN_ITEM',
    id,
  };
}
