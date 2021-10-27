import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import PagesLayout from './Components/PagesLayout.json'
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <Header PagesLayout={PagesLayout}/>
      <MainContainer PagesLayout={PagesLayout}/>
    </div>
  );
}

export default App;
