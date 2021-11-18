import './App.css';
import Profile from './profile/Profile';
function App() {
const person = {
  fullname:'Mahmoud' ,
  bio:'hbdvshbvhbqhvblhvbhvfbfdqvb' ,
  profession:'Graphic Designer'};
  return (
    <div className="App">
      <Profile person={person}/>
    </div>
  );
}

export default App;
