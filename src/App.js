import React from "react";
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const api = {
    key: "cd69d90bf81a5e0ea340fdf35a4a4ba9",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
	return (
		<>
			<div className="app_container cold shadow"></div>
		</>
	);
}

export default App;
