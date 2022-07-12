import { isCursorAtStart } from '@testing-library/user-event/dist/utils';
import './Node.css'

const Node = (props) => {
    const {row, col, handleMouseDown, handleMouseEnter, handleMouseUp, isStart, isEnd, isWall} = props;
    
    const extraClassName = isStart 
    ? 'startNode' 
    : isEnd
    ? 'endNode'
    : isWall
    ? 'wallNode'
    : '';

    return (
      <div
        className={`node ${extraClassName}`}
        onMouseDown={() => handleMouseDown(row, col)}
        onMouseEnter={() => handleMouseEnter(row, col)}
        onMouseUp={() => handleMouseUp() }
      ></div>
    );
}
 
export default Node;