// import logo from './logo.svg';
import React from 'react';
import './App.css';
import "./style.scss";

import HeaderClass from './components/headerComp';
import MainClass from './components/mainComp';
import FooterClass from './components/footerComp';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "logged": false
    };
  }
  render() {
    let userObj = {
      "name": "Dinesh",
      "title": "Developer",
      "role": "Trainer",
      "menu": true
    }
    return (
      <>
        {
          // this.state.logged && <HeaderClass data={userObj} />

          this.state.logged
            ?
              <>
                <button onClick={() => this.setState({"logged": false})}>Logout</button>
              </>
            :
              <>
                <button onClick={() => this.setState({"logged": true})}>Login</button>
              </>
        }
        <HeaderClass logged={this.state.logged} data={userObj} />
        <MainClass />
        <FooterClass />
      </>
    )
  }
}

export default Home;

// function App() {
//   return (
//     <>
//         <div className="row1">
//           <div className="row1section1">
//               <div>
//                   <img src={profilePic} alt="logo" className="logo" />
//               </div>
//               <div>
//                   <h3 className={style.colorRed}>Dinesh</h3>
//                   <div className='clsDiv'>Technical Trainer</div>
//                   <div>Web Developer</div>
//                   <div>Email Me</div>
//               </div>
//           </div>
//           <div className="row1section2">
//               <div>Projects</div>
//               <div>About Me</div>
//               <div>Contact Me</div>
//           </div>
//       </div>
//       <div className="row2">
//           <h3>Projects / Experiences</h3>
//           <div className="row2section1">
//               <div>
//                   <img src="images/background.jpeg" alt="Project 1" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//               <div>
//                   <img src="images/background.jpeg" alt="Project 2" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//               <div>
//                   <img src="images/background.jpeg" alt="Projec 3" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//               <div>
//                   <img src="images/background.jpeg" alt="Project 4" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//               <div>
//                   <img src="images/background.jpeg" alt="Project 5" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//               <div>
//                   <img src="images/background.jpeg" alt="Project 6" /><br />
//                   Project 1<br />
//                   Project Description goes here...
//               </div>
//           </div>
//       </div>
//       <div className="row3">
//           <h3>About Me</h3>
//           <div className="row3section1">
//               <div>
//                   <h4>Personal Details</h4>
//                   <ul>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                   </ul>
//               </div>
//               <div>
//                   <h4>Educational Details</h4>
//                   <ul>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                       <li>ITEM</li>
//                   </ul>
//               </div>
//           </div>
//       </div>
//       <div className="row4">
//           <div>&copy; Copyright. All Rights Reserved.</div>
//       </div>
//     </>
//   );
// }

// export default App;
