import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {getWeatherDetails} from "./Store/detailsAction";

function App() {
  const dispatch=useDispatch()
  const inputRef=useRef();
  const data=useSelector((state)=> state.weatherDetails.data)
  const loading=useSelector((state)=> state.weatherDetails.loading)
  const error=useSelector((state)=> state.weatherDetails.error)

  const onSearch=()=>{
    dispatch(getWeatherDetails(inputRef.current.value));
  };

  return (
      <>
    <div className="App">
      <input ref={inputRef} placeholder={'Search City Here'} />
      <button onClick={onSearch}>Search</button>
    </div>
        {loading && <h1>Loading...</h1>}
        {!loading && data && <p>{JSON.stringify(data)}</p>}
        {error && <h4>error</h4>}

      </>
  );
}

export default App;
