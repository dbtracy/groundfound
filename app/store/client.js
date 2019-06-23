import axios from "axios";

/**INITIAL STATE**/
const defaultClient = {
  firstName: "Dan",
  lastName: "Tracy",
  email: "dan@email.com",
  pennies: 0,
  nickels: 0,
  dimes: 0,
  quarters: 0,
  singles: 0,
  fives: 0,
  tens: 0,
  twenties: 0,
  fifties: 0,
  benjies: 0
};

/**ACTION TYPES**/
const GET_CLIENT = "GET_CLIENT";

/**ACTION CREATORS**/

const getClient = client => ({ type: GET_CLIENT, client });

/**THUNK CREATORS**/

export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getClient(res.data || defaultClient));
  } catch (err) {
    console.error(err);
  }
};

export const login = (email, password) => async dispatch => {
  let res;
  try {
    res = await axios.get(`/auth/login`, { email, password });
    if (res) {
      return dispatch(getClient(res));
    } else res.status(404).send();
  } catch (dispatchErr) {
    console.log(dispatchErr);
  }
};

// ORIGINAL LOGIN FUNCTION
// export const login = (email, password) => async dispatch => {
//   let res;
//   try {
//     res = await axios.post(`/auth/login`, { email, password });
//   } catch (authError) {
//     return dispatch(getClient({ error: authError }));
//     console.log("oh no!");
//   }

//   try {
//     dispatch(getClient(res.data));
//   } catch (dispatchErr) {
//     console.error(dispatchErr);
//   }
// };

/**REDUCER**/

export default function(state = defaultClient, action) {
  switch (action.type) {
    case GET_CLIENT:
      return action.client;
    default:
      return state;
  }
}
