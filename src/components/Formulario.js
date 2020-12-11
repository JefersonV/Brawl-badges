import React from 'react';



class Formulario extends React.Component {
	render () {
			return (
				<React.Fragment>
				
					<section className="form">
						<form action="">
							<div className="form-group">
								<label>
									Nombre del Brawler
								</label>
								<input className="form-control" placeholder="Rayo, Polar, Laika, etc." type="text" name="" id=""/>
							</div>
							<div className="form-group">
								<label>
									Calidad
								</label>
								<input className="form-control" placeholder="Legendario, épico, común" type="text" name="" id=""/>
							</div>
							<div className="form-group">
								<label>
									Clase
								</label>
								<input className="form-control" placeholder="Trower, apoyo, tanque" type="text" name="" id=""/>
							</div>	

							
							<div className="form-group">
								<label>
									Descripción 
								</label>
								<textarea className="form-control" placeholder="Max es el brawler más rápido del universo brawl stars" name="" id="" cols="30" rows="3"></textarea>
							</div>
							<hr/>
							<div className="form-group">
								<label>
									Twitter
								</label>
								<input className="form-control" placeholder="@autor del brawler" type="text" name="" id=""/>
							</div>
							<button className="btn btn-primary btn-block">Guardar</button>
						</form>
					</section>
				</React.Fragment>
			);
	}
}

export default Formulario;