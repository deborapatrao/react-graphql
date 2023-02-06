import logo from './logo.svg';
import './App.css';
import Title from './components/layout/Title';
import AddContact from './components/forms/AddContact';
import 'antd/dist/reset.css'

const App = () => {
  return (
    <div className="App">
      <Title />
      <AddContact />
    </div>
  );
}

export default App;
