import './card.css';

const Card=(props) =>{
    // console.log(props);
    return(
        <>
    <div className="card">
        <div className='upperPart'>
        <div className="heading">
        <h3>{props.name}</h3>
        <div className="rating">{props.rating}</div>
        </div>
      <div>
        <p className="address">
        <i class="fa-solid fa-location-dot"></i>
          {props.address}, {props["address line 2"]}
        </p>
      </div>
      <div className="post">
        <span>
          {props.outcode} {props.postcode}
        </span>
      </div>
        </div>
    <div className='lowerPart'>
       <div className="links">
        <div>
            <i class="fa-solid fa-utensils"></i>
            {props["type_of_food"]}
        </div>
        <a href={props.URL}>Visit Menu</a>
      </div>
    </div>
    </div>

        </>
    );
}

export default Card;