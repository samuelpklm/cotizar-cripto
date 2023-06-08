// type Props = {}

import styled from "@emotion/styled"
import { SyntheticEvent, useEffect, useState } from "react"
import useSelectMonedas from "../assets/hooks/useSelectMonedas"
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

type moneda = {
    id: string,
    nombre: string
  }

  type compararMonedas = {
    cripto: string;
    moneda: string;
  }

  type Props = {
    setMonedas: (arg: compararMonedas) => void;
  }

const Formulario:React.FC<Props> = props => {

    const [criptos, setCriptos] = useState<moneda[]>({} as moneda[]);

    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu Moneda", monedas);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas("Elige tu Criptomoneda", criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos = resultado.Data.map( (cripto:any) => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
            return objeto;
            });
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        props.setMonedas({moneda: moneda.toString(), cripto: criptomoneda.toString()});
    }

  return (
    <form 
        onSubmit={handleSubmit}
    >
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit 
            type="submit" 
            value="Cotizar Moneda"
        />
    </form>
  )
}

export default Formulario