import Card from '../components/Card'
import Navbar from '../components/Navbar'
import data from './data'

import './style.css'

function App() {
	const cardsRender = data.map(item => {
		return <Card key={item.id} {...item} />
	})

	return (
		<>
			<Navbar />
			<div className='cards-holder'>{cardsRender}</div>
		</>
	)
}

export default App
