import { getIndexFromId, getMaxId } from 'utils';

const initialState = {
  items: [],
  activeItem: null,
};


export function items(state = initialState, action) {
  let index;
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        items: JSON.parse(localStorage.getItem('items')) || [],
      };

    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: getMaxId(state.items) + 1,
            name: action.name,
            cost: action.cost,
            seconds: 0,
          }]};

    case 'DELETE_ITEM':
      index = getIndexFromId(state.items, +action.id);
      return {
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };

    case 'OPEN_ITEM':
      index = getIndexFromId(state.items, +action.id);
      return {
        ...state,
        activeItem: state.items[index],
      };

    case 'CLOSE_ITEM':
      return {
        ...state,
        activeItem: null,
      };

    case 'ADD_TIME':
      index = getIndexFromId(state.items, +action.id);
      const changeItems = [...state.items];
      changeItems[index].seconds = changeItems[index].seconds + action.seconds;
      return {
        items: [...changeItems],
        activeItem: changeItems[index],
      };

    default:
      return state;
  }
}
