import React from 'react';
import { sandMassage, onMassageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText,
        isAuth: state.auth.isAuth
    }
}

let AuthNavigateComponent = (props) => {
    if(!this.props.isAuth) return <Navigate to={'/login/'} />
    return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, { sandMassage, onMassageChange })(AuthNavigateComponent)

export default DialogsContainer;