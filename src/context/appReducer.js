export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_INCOME':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        incomeTransactions: [
          ...state.incomeTransactions,
          action.payload
        ]
      };
    case 'ADD_EXPENSE':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        expenseTransactions: [
          ...state.expenseTransactions,
          action.payload
        ]
      };
    case 'DELETE_TRANSACTION':
      // console.log(state);
      // console.log(action.payload);
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    default:
      return state;
  }
}
