export default function Card(props) {
	return (
		<div className='card'>
			<img
				src={`./images/${props.coverImg}`}
				alt={props.title}
				className='card__img'
			/>
			<div className='card__content'>
				<div className='card__content-location'>
					<img src='../images/location-mark.png' alt='Location marker' />
					<span>{props.location}</span>
					<a href={props.googleMapSource} target='_blank'>
						View on Google Maps
					</a>
				</div>
				<h2 className='card__content-title'>{props.title}</h2>
				<p className='card__content-date'>
					{props.stay.since} - {props.stay.to}
				</p>
				<p className='card__content-description'>{props.description}</p>
			</div>
		</div>
	)
}
