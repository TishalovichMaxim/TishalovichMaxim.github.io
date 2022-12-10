import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar.js'
import MainPage from './Components/MainPage';
import Writers from './Components/Writers';

function App() {
  let Component;

  switch (window.location.pathname){
    case "/":
      Component = MainPage;
      break;
    case "/writers":
      Component = Writers;
      break;
  }
 
  return (
    <> 
      <Navibar/>
      <Component/>
    </>
  );
}

export default App;
