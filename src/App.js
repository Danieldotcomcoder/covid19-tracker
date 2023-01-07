/* eslint-disable linebreak-style */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import Home from './Components/Home';
import Details from './Components/Details';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/country/:name',
    name: 'Details',
    component: <Details />,
  },
];

const App = () => (
  <Router>
    <LoadingBar className="App-loading-bar" />
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} element={component} />
      ))}
    </Routes>
  </Router>
);

export default App;
