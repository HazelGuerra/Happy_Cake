import "./index.css"

const form = () => {
    return(
        <div className="formulario">
            <h1>Cuentanos, En que te podemos ayudar?</h1>
            <label>Correo</label>
            <input 
            type="email" 
            name="email"
            placeholder="ejemplo@correo.com"
            id="email" 
            className="input-1 form-control mb-2">
            </input>
            <label>Descripcion</label>
            <input 
                type="text" 
                name="descripcion" 
                id="descripcion"  
                className="input-2 form-control mb-2">
            </input>
            <button 
            type="button" 
            class="btn btn-danger">
                Enviar
            </button>
            

        </div>
    )
}

export default form;