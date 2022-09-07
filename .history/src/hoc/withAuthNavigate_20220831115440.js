import React from 'react';

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }
}

