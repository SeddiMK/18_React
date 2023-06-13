export const checkLS = () => {
  if (localStorage.getItem('kaysW')) return true;
  return false;
};

export const showMessage = (text) => {
  return `${text}! Message not found`;
};
