export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});

export const editDishInState = id => {
    console.log(id);
    return {type: EDIT_CONTACT, id}
};