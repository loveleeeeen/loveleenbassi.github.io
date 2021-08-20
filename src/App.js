import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Projects from './Pages/projects';
import MoreMe from './Pages/moreMe';
import Teams from './Pages/team';
import Blogs from './Pages/blogs';
import ContactMe from './Pages/contactMe';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey Brendan!
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          :)
        </a>
      </header> */}
      <Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/projects' component={Projects} />
		<Route path='/moreMe' component={MoreMe} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/contactMe' component={ContactMe} />
	</Switch>
	</Router>
  {/* <Footer /> */}
    </div>
  );
}

export default App;
