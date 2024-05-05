const Recipe = ({ id, value ,title }) => {
    return ( 
        <li>
            <div className="Recipe">
                <h3>{title}</h3>
                
                {value}
            </div>
            
            
        </li>
    );
}
 
export default Recipe;