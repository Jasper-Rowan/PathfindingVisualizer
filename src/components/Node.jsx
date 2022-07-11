import './Node.css'

const Node = (props) => {
    return ( <div className='node' onMouseDown={() => console.log(`row ${props.row} col ${props.col}`)}></div> );
}
 
export default Node;