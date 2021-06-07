import React, {useState, useEffect} from 'react';
import "./css/style.css";

const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect(()=>{

        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e458305f88dacf7b4001ad0836e7423a`
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(response);
            setCity(resJson.main);
        }

        fetchApi();
    },[search]);//useEffect work every time so we should run it only if Search done

    return( 
        <div className="main">
            <div className="box">
                <div className="inputData">
                    <input 
                        type="search"
                        value={search}
                        className="inputField"
                        onChange={(event)=>{
                            setSearch(event.target.value);  
                        }}
                    />
                </div>            
                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (       
                    <div> 

                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view" id="logo"></i><h2>{search}</h2>
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C
                            </h1>   
                            <br></br><br></br>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}°C || Max : {city.temp_max}°C
                            </h3>
                            <br></br>
                            <div className="box_1">
                                   Humidity : {city.humidity}°C
                            </div>                           
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Tempapp;
