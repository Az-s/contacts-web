import {
    SET_MODAL_OPEN,
} from '../actions/actionsContacts';

const initialState = {
    showPurchaseModal: false,
};

const reducerContacts = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_OPEN:
            return {
                ...state, showPurchaseModal: action.payload
            };
        default:
            return state
        }
    };

    export default reducerContacts;