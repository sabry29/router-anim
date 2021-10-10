import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MovieData from "./Components/MovieData";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Link to='/'>Home</Link>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/:id' component={MovieData} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
