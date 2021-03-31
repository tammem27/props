import './App.css';
import Profile from './Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './img.jpg';

function App() {
  const Box=(name)=>{alert(`the name is ${name}`);}
  var Profilelist=[{Fullname:"Tammem Ayadi",bio:"responsable magasin",profession:'nothing yet'}]

  return (
    
      <Profile profilelist={Profilelist} handleName ={Box} >

       {image} 
        
      </Profile>
    
  );
}

export default App;
