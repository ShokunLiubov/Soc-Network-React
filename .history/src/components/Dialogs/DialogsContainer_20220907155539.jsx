import React from 'react';
import { sandMassage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText
    }
}

export default compose(
    connect(mapStateToProps, { sandMassage }),
    withAuthNavigate
)(Dialogs);