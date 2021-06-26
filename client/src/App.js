import { Route, Switch } from 'react-router-dom'
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Blogs from './components/blogs/Blogs';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
  <Navbar />
  <Container>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/home" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/Blogs" component={Blogs} />

  <Route component={NoMatch} />
  </Switch>
  </Container>


  </>
)
export default App;