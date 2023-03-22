import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Home from "./pages/Home";
import CreateInvoice from "./pages/CreateInvoice";
import Invoice from "./pages/Invoice";

function App() {
	return (
		<div className='lg:flex lg:flex-row'>
			<Navbar />

			<Route path='/' component={Home} />
			<Route path='/create-invoice' component={CreateInvoice} />
			<Route path='/invoices/:invoiceId' component={Invoice} />
		</div>
	);
}

export default App;
