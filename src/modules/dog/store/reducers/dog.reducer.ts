import {FETCH_DOGS, FETCH_DOGS_SUCCESS} from '../actions/dog.actions';

const initState = {
  data: [],
  loading: false
};

function findOne(state, wanted) {
  return state.data.find((item) => item.id === wanted.id);
}

export function dogReducer(state = initState, action) {
  switch action.type{
    case FETCH_DOGS:
      return {...state, loading: true};
    case FETCH_DOGS_SUCCESS:
      return {...state, data: [...action.payload], loading: false};
    default:
      return [];
  }
  return state;
}
