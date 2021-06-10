import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
