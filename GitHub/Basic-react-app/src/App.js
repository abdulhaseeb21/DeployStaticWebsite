import './App.css';
import Info from './component/Info'
function App() {
  return (
    <div className="App">
      <h1>Information of user1</h1>
      <Info name='Haseeb' age={17} profession='Web developer'/>
      <h1>Information of user2</h1>
      <Info name='Subhan' age={19 - 1} profession='Expert web developer (Is being requested by google to work with them but he is denying the offer)'/>
      <h1>Information of user3</h1>
      <Info name='Muneeb' age={19 - 1} profession='His profession cant be explained in words'/>
    </div>
  );
}

export default App;
