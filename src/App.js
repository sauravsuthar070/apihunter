import './App.css';
import { useSelector , useDispatch  } from 'react-redux';
import { increase , decrement } from './action/index';

function App() {
  const mystate = useSelector((state) => state.inc_dec)
 const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>welcone to react redux</h1>
         <input type="text mt-5" value={mystate}/>
         
           <br></br>

         <button onClick={() => dispatch(increase())} className="btn btn-primary my-5" >add</button>   
         <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-3">minus</button>  
    </div> 
  );
}

export default App;
