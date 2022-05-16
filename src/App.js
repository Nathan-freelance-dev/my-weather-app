import React, { useState } from "react";
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const api = {
    key: "cd69d90bf81a5e0ea340fdf35a4a4ba9",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
	const [ searchValue, setSearchValue ] = useState('');
	const [ weather, setWeather ] = useState({});

	const search = evt => {
		if(evt.key === "Enter") {
			fetch(`${api.base}weather?q=${searchValue}&unit=metric&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
				setWeather(result);
				console.log(result)
				setSearchValue("")
			})
		}
	}

	return (
		<>
			<div className="app_container sunny shadow">
				<div className="container_box text-center">
					<h1 className="text-light mb-3">My weather app</h1>

					<div className="input_feild">
						<input className="form-control shadow" onChange={e => setSearchValue(e.target.value)} value={searchValue} placeholder="Search anywhere in the world..." onKeyPress={search} />
					</div>

					{(typeof weather.main !== "undefined") ? (
						<div className="weather_container mt-5">
						<div className="forcast_box">
							<h1 className="text-light">
								{Math.round(weather.main.humidity)}&ordm;C
							</h1>

							<div className="mt-3 text-light weather_stats">
								{weather.weather[0].main}
							</div>
						</div>
					</div>
					): ("")}
				</div>
			</div>
		</>
	);
}

export default App;
