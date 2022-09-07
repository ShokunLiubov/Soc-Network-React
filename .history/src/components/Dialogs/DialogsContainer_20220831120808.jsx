import React from 'react';
import { sandMassage, onMassageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText,
        isAuth: state.auth.isAuth
    }
}

let AuthNavigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, { sandMassage, onMassageChange })(AuthNavigateComponent)

export default DialogsContainer;