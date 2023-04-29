import React from 'react'

const Buscar = ({ classes, filter, setFilter }) => {
	const handleInput = ({ target }) => {
		console.log(target.value)
		setFilter(target.value)
	}

	return (
		<section className={'filtrar d-flex form-floating justify-content-center ' + classes}>
			<input className='form-control'
				type='text'
				placeholder='Nombre del personaje'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
			<label for="floatingInput">Nombre del personaje</label>
		</section>
	)
}

export default Buscar