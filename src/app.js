import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Channel1 from "./channel-1";
import Channel2 from "./channel-2";
import Channel3 from "./channel-3";
import Channel4 from "./channel-4";


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Channel1} />
				<Route path="/channel-1" exact component={Channel1} />
				<Route path="/channel-2" component={Channel2} />
				<Route path="/channel-3" component={Channel3} />
				<Route path="/channel-4" component={Channel4} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
