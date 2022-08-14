import React from 'react';
import { sandMassageActionCreator, updateNewMassageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sandMassage: () => {
            let action = sandMassageActionCreator()
            dispatch(action)
        },
        onMassageChange: (text) => {
            let action = updateNewMassageTextActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;