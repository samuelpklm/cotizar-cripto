import styled from "@emotion/styled";

type Props = {
    resultado: any;
}

const Resultadosss = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Resultado:React.FC<Props> = props => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = props.resultado;

  return (
    <Resultadosss>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>última Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Resultadosss>
  )
}

export default Resultado