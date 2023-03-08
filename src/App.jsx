import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Home from "./pages/Home";
import CreateInvoice from "./pages/CreateInvoice";

function App() {
	return (
		<div className='lg:flex lg:flex-row'>
			<Navbar />

			<Route path='/' component={Home} />
			<Route path='/create-invoice' component={CreateInvoice} />
		</div>
	);
}

export default App;
