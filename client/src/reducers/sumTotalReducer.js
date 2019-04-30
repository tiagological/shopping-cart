export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_TOTAL':
      const increaseTotalValue = state + action.payload;
      const increaseRoundedValue = increaseTotalValue.toFixed(2);
      const increaseNumberValue = Number(increaseRoundedValue);
      return increaseNumberValue;
    case 'DECREASE_TOTAL':
      const decreaseTotalValue = state - action.payload;
      const decreaseRoundedValue = decreaseTotalValue.toFixed(2);
      const decreaseNumberValue = Number(decreaseRoundedValue);
      return decreaseNumberValue;
    default:
      return state;
  }
};
