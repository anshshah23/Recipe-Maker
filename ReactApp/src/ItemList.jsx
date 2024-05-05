import Item from "./Item";
const ItemList = ({items,onDelete} ) => {
    return (  
    <div className="item-list">
      
        <ul className="list">
          {items.length===0 && <li>No Ingredients 😭</li>}
          {items.map(item=>(
            <Item  {...item} value={item.value} key={item.id} onDelete={onDelete} />
          ))}
        </ul>
        
      </div>
    );
}
 
export default ItemList;