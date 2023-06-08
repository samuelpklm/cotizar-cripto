import styled, { StyledComponent } from "@emotion/styled"
import { useState } from "react"

type moneda = {
  id: string,
  nombre: string
}


const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`
const Select = styled.select` 
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`

const useSelectMonedas = (label: string, opciones:moneda[]) => {

  const [state, setState] = useState<string>('');

  const SelectMonedas = () => (
    <>
      <Label >
        {label}
      </Label> 
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
        required
      >
        <option value="">Seleccione</option>

        {opciones[0] && opciones.map(opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          >
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  )

    return [ state, SelectMonedas ]
}

export default useSelectMonedas