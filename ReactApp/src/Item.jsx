const Item = ({ id, value ,onDelete }) => {
    return ( 
        <li>
            {value}
            <button onClick={() => onDelete(id)} className="btn btn-danger">-</button>
        </li>
    );
}
 
export default Item;