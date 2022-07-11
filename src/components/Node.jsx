import './Node.css'

const Node = () => {
    return ( <div className='node' onMouseDown={() => console.log("mousedown")}></div> );
}
 
export default Node;