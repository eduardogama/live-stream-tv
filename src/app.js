import React from 'react';
import Routes from "./routes/routes";
import { Provider } from "react-redux";

import store from "./store";

require("dotenv/config");

function App() {
	return (
		<Provider store={store}>
				<Routes />
		</Provider>
	);
}

export default App;
