import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NavM from './MobileComponents/Nav/NavM.js'
import Logo from './MobileComponents/Logo.js'
import Start from './MobileComponents/StartPage.js'
import {Switch,BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//      <>
//         <Router>
//           <Route render={({ location }) => (
//             <Route exact path="/" render={() => (
//               <Redirect to="/start"/>
//             )}/>

//               <Logo/>
//               <NavM/>
//             <TransitionGroup>
//             <CSSTransition
//                   key={location.key}
//                   classNames="fade"
//                   timeout={1000}>
//               <Switch location={location}>
//                 <Route link='/' exact component={Home}/>>
//               </Switch>
//            </CSSTransition>
//            </TransitionGroup>
//             )}/>
//         </Router>
//      </>
//     );
//   }
// }


class App extends React.Component{
  render() {
    return (
       <Router>
        <Route render={({ location }) => (
          <div>
            <Route exact path="/" render={() => (
              <Redirect to="/start"/>
            )}/>
          <Logo/>
          <NavM/>
                <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1500}
                >
            <Switch location={location}>
                <Route exact path="/start" exact component={Start} />
                <Route exact path="/offer" exact component={Start} />
            </Switch>
            </CSSTransition>
        </TransitionGroup>


          </div>
        )}/>
      </Router>
     );
}
}

export default App;

