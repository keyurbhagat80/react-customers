export const GET_CUSTOMERS_DATA_SUCCESS = "GET_CUSTOMERS_DATA_SUCCESS";

const INIT_STATE = {
  customers: []
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return {
        ...state
      };
    case GET_CUSTOMERS_DATA_SUCCESS: {
      return {
        ...state,
        customers: action.payload
      };
    }
    default:
      return state;
  }
};
