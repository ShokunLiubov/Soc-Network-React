import React from 'react';

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={'/login/'} />
            
            return <Component {...this.props} />
        }
    }
    return NavigateComponent
}

