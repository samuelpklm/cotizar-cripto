import './spinner.css'
// type Props = {}

const Spinner:React.FC = () => {
  return (
    <div className="sk-folding-cube" style={{marginTop: '3rem'}}>
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  )
}

export default Spinner