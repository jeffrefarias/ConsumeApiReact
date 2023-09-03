const Buscador = ({ setFiltro }) => {
    return (
        
            <input
                type="text"
                className="form-control"
                placeholder="Buscar Plato de Comida..."
                onChange={(e) => setFiltro(e.target.value)}
            />
    );
}

export default Buscador;