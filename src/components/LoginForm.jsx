import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
    <h2>Formulario</h2>
    <form>
        <input data-testid="inputText"   type="text"  />
        <button data-testid="button" onClick={handleClick}>Enviar</button>
    </form>
    </div>
  )
}

export default LoginForm