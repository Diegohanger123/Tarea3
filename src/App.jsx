import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [lenguaje, setLenguaje] = useState('')
  const [rol, setRol] = useState('')
  const [mostrar, setMostrar] = useState(false)

  // Función para generar la tarjeta
  const handleGenerar = (e) => {
    e.preventDefault()
    // Validación para asegurarse de que los campos no estén vacíos
    if (nombre.trim() !== '' && lenguaje.trim() !== '' && rol.trim() !== '') {
      setMostrar(true)
    } else {
      alert('Asegurate de llenar todos los campos')
    }
  }

  // Función para resetear la tarjeta
  const handleLimpiar = () => {
    setNombre('')
    setLenguaje('')
    setRol('')
    setMostrar(false)
  }

  // Función para generar iniciales a partir del nombre
  const obtenerIniciales = (name) => {
    return name
      .split(' ')
      .map((palabra) => palabra[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="container">
      <h1>Generador de Tarjeta</h1>
      <form className="formulario" onSubmit={handleGenerar}>
        <div className="input-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Lenguaje Favorito:</label>
          <input
            type="text"
            value={lenguaje}
            onChange={(e) => setLenguaje(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Rol Profesional:</label>
          <input
            type="text"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-generar">
          Generar tarjeta
        </button>
      </form>

      {mostrar && (
        <div className="resultado">
          <div className="tarjeta">
            <div className="avatar">
              {obtenerIniciales(nombre)}
            </div>
            <div className="info">
              <h2>{nombre}</h2>
              <p>Lenguaje favorito: <strong>{lenguaje}</strong></p>
              <p className="rol-badge">{rol}</p>
            </div>
          </div>
          
          <button onClick={handleLimpiar} className="btn-limpiar">
            Limpiar
          </button>
        </div>
      )}
    </div>
  )
}

export default App