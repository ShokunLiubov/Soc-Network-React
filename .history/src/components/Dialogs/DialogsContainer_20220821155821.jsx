import React from 'react';
import { sandMassage, onMassageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText
    }
}

const DialogsContainer = connect(mapStateToProps, { sandMassage, onMassageChange })(Dialogs)

export default DialogsContainer;