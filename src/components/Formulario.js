import React from 'react';



class Formulario extends React.Component {
	// state = {
	// 	nameBrawler: '',
	// 	quality: '',
	// 	class: '',
	// 	description: ''
	// };

	// handleChange = (e) => {
	// 	//console.log({ name: e.target.name,
	// 	//	value: e.target.value, } )
	// 	this.setState ({
	// 		[e.target.name]: e.target.value,
	// 	})
	// }

	handleClick = (e) => {
		console.log('button was clicked')
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form was submitted')
		console.log(this.state)
	}

	render () {
		
			return (
				<React.Fragment>
				
					<section className="form">
						<form action="">
							<div className="form-group">
								<label>
									Nombre del Brawler
								</label>
								<input onChange = {this.props.onChange}
								className="form-control"
								placeholder="Rayo, Polar, Laika, etc."
								type="text"
								name="nameBrawler"
								value = { this.props.formValues.nameBrawler } />
								
							</div>
							<div className="form-group">
								<label>
									Calidad
								</label>
								<input onChange = {this.props.onChange}
								className="form-control"
								placeholder="Legendario, épico, común"
								type="text" 
								name="quality" 
								value = {this.props.formValues.quality }/>
								
							</div>
							<div className="form-group">
								<label>
									Clase
								</label>
								<input onChange = {this.props.onChange} 
								className="form-control" 
								placeholder="Trower, apoyo, tanque" 
								type="text" 
								name="class" 
								value = {this.props.formValues.class }/>
							</div>	

							
							<div className="form-group">
								<label>
									Descripción 
								</label>
								<textarea onChange = {this.props.onChange} 
								className="form-control" 
								placeholder="Max es el brawler más rápido del universo brawl stars" 
								name="description" id="" cols="30" rows="3"
								
								value = {this.props.formValues.description }></textarea>
							</div>
							<hr/>
							<div className="form-group">
								<label>
									Twitter
								</label>
								<input onChange = {this.props.onChange}
								className="form-control" 
								placeholder="@autor del brawler" 
								type="text" 
								name="twitter" 
								value = {this.props.formValues.twitter }/>
							</div>
							<button onClick = {this.handleClick} type="button" className="btn btn-primary btn-block">Guardar</button>
						</form>
					</section>
				</React.Fragment>
			);
	}
}

export default Formulario;