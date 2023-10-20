
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import ChangeColor from './components/changeColor';

function App() {
  return (
    <div className="App">
      <div>
        {/* Render the Profile component */}
        <Profile />

        {/* Render the Login component */}
        <Login />
      </div>

      {/* Render the ChangeColor component */}
      <ChangeColor />
    </div>
  );
}

export default App;
