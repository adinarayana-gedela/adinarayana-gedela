
import './App.css';
//import Map from './components/Map';
import Destructuring from './components/Destructuring';
import Destructure1 from './components/Destructure1';
import Destructure2 from './components/Destructure2';
import ComponentClass from './components/ComponentClass';
import CompFun from './components/CompFun';
import StateClass from './components/StateClass';
import StateClass1 from './components/StateClass1';
import Conditionals from './components/Conditionals';


import Cssinline from './components/Cssinline';
import Header from './components/Header';





function App() {
  return (
    <div>
      <Header />
      <Cssinline />
      {/*<Namelist />
      */}
   
  <Destructuring name="Adi" heroName="Narayana" />
    <Destructure1 name="Siva" heroName="Balaga" />
  <Destructure2 name="Siva" heroName="Balaga" />
  <ComponentClass name="Adi" heroName="Narayana">
    <p>this is paragraph</p>
  </ComponentClass>
  <CompFun name="Narayana" heroName="Gedela">
    <p>this is second paragraph</p>
  </CompFun>
  <StateClass />
  <StateClass1 />
  <Conditionals />
   
   

   
    </div>
  );
}

export default App;
