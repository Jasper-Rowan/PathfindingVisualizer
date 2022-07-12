import './Node.css'

const Node = (props) => {
    const {row, col, handleMouseDown, handleMouseEnter, handleMouseUp} = props;
    
    return (
      <div
        className="node"
        onMouseDown={() => handleMouseDown(row, col)}
        onMouseEnter={() => handleMouseEnter(row, col)}
        onMouseUp={() => handleMouseUp() }
      ></div>
    );
}
 
export default Node;