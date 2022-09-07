import React from 'react';
import { Navigate } from 'react-router-dom';

let mapStateToPropsNavigate = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={'/login/'} />
            return <Component {...this.props} />
        }
    }
    
    let ConnectedNavigateComponent = connect(mapStateToPropsNavigate)(NavigateComponent)

    return ConnectedNavigateComponent
}

