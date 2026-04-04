import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Transactions from './pages/Transactions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Receipt from './pages/Receipt'
import Transfer from './pages/Transfer'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/transfer" element={<Transfer />} />
				<Route path="/transactions" element={<Transactions />} />
				<Route path="/receipt/:id" element={<Receipt />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
