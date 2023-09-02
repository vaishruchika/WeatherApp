import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {getWeatherDetails} from "./Store/detailsAction";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const dispatch = useDispatch()
    const inputRef = useRef();
    const data = useSelector((state) => state.weatherDetails.data)
    const loading = useSelector((state) => state.weatherDetails.loading)
    const error = useSelector((state) => state.weatherDetails.error)

    const onSearch = () => dispatch(getWeatherDetails(inputRef.current.value));

    return <div className="col-md-12">
        <div className="wetherBg">
            <h1 className="heading">Weather App</h1>
            <div className={'container col-xs-12 col-sm-8 col-md-6 col-lg-4'}>
                <input type="text"
                       ref={inputRef}/>
                <button className="btn btn-primary" type="button"
                        onClick={onSearch}
                >Search
                </button>
            </div>
        </div>
        {loading ? <div className='spinner'>
            <span className="spinner-border spinner-border-md"
                  role="status"></span>
        </div> : error ? <div className={'error'}><h3>Error: {error.message}</h3></div> : Object.keys(data).length > 0 ?
            <div className="col-md-12 text-center mt-5">
                <div className="shadow rounded wetherResultBox">
                    <img className="weathorIcon"
                         src={data?.current?.condition?.icon} alt={data?.current?.condition?.text}/>
                    <h6 className="condition">{data?.current?.condition?.text}</h6>
                    <h5 className="weathorCity">
                        {data?.location?.name}
                    </h5>
                    <h6 className="weathorTemp">{data?.forecast?.forecastday[0]?.day?.avgtemp_c.toFixed(2)}°C</h6>
                    <h6 className="humidity">{data?.forecast?.forecastday[0]?.day?.avghumidity}g/m<sup>3</sup></h6>
                </div>
            </div> : null}

    </div>;
}

export default App;
