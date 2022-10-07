import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect, Provider } from 'react-redux'
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withRouter } from './hoc/withRouter';
import store from './redux/redux-store';
import './App.css';
import Login from './components/Auth/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
const Music = React.lazy(() => import('./components/Music/Music'));
const CommunityContainer = React.lazy(() => import('./components/Community/CommunityContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Login />
    }

    return (
      <Suspense fallback={<div><Preloader /></div>}>
        <div className='app-wrapper'>
          <Navbar />
          <Routes>
            <Route path='/home/*' element={<Home />} />

            <Route path='/community/*' element={<CommunityContainer />} />

            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />

            <Route path='/dialogs/*' element={<DialogsContainer />} />

            <Route path='/music/*' element={<Music />} />

            <Route path='/login/*' element={<Login />} />

            <Route path='/friends/*' element={<Music />} />

          </Routes>
          </div >
      </Suspense>
      

    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const ReactJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default ReactJSApp;
