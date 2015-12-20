export const getIndexFromId = (list, id) =>
  list.map(item => item.id).indexOf(id);

export const getMaxId = (list) =>
  list.length ? Math.max(...list.map(({ id }) => id)) : 1;
