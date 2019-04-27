export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_TOTAL':
      return state + action.payload;
    case 'DECREASE_TOTAL':
      const totalValue = state - action.payload;
      const roundedValue = totalValue.toFixed(2);
      const numberValue = Number(roundedValue);
      return numberValue;
    default:
      return state;
  }
};
