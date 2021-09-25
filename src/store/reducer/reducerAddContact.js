import {
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS,
    CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
} from '../actions/actionsAddContact';

const initialState = {
    loading: false,
    fetchLoading: false,
    error: null,
    fetchError: null,
    contact: [],
};

const reducerAddContacts = (state = initialState, action) => {
    switch (action.type) {
      case CONTACTS_REQUEST:
        return {...state, loading: true};
      case CONTACTS_SUCCESS:
        return {...state, loading: false};
      case CONTACTS_FAILURE:
        return {...state, loading: false, error: action.payload};
      case FETCH_CONTACTS_REQUEST:
        return {...state, fetchLoading: true, fetchError: null};
      case FETCH_CONTACTS_SUCCESS:
        return {...state, contact: action.payload, fetchLoading: false};
      case FETCH_CONTACTS_FAILURE:
        return {...state, fetchLoading: false, fetchError: action.payload};
      default:
        return state;
    }
  };
  
  export default reducerAddContacts;