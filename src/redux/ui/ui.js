// actions
const CHECK_LOADING = 'CHECK_LOADING';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK_LOADING:
      return action.loading;

    default:
      return state;
  }
}

export const isLoading = (val) => (dispatch) => {
  dispatch({
    type: CHECK_LOADING,
    loading: {
      loading: val || false,
    },
  });
};
