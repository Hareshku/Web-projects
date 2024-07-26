
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const Men=(item)=>{



  
const dispatch= useDispatch();
const bagItems= useSelector(store =>store.bag);
const elementFound= bagItems.indexOf(item.id)>=0;


const handleAddToBag=()=>{
  dispatch(bagActions.addToBag(item.id));
}

const handleRemove=()=>{
  dispatch(bagActions.removeFromBag(item.id));
}


  const item1 ={
      id: "001",
      image: "images/img1.jpg",
      company: "Carlton London",
      item_name: "Rhodium-Plated CZ Floral Studs",
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.5, count: 1400 }
    }

    const item2={
      id: "002",
      image: "images/img2.jpg",
      company: "Nike",
      item_name: "Running Shoes",
      original_price: 2000,
      current_price: 1500,
      discount_percentage: 25,
      return_period: 30,
      delivery_date: "12 Oct 2023",
      rating: { stars: 4.8, count: 2300 }
    }
    const item3={
      id: "003",
      image: "images/img3.webp",
      company: "Adidas",
      item_name: "Soccer Ball",
      original_price: 1200,
      current_price: 900,
      discount_percentage: 25,
      return_period: 15,
      delivery_date: "15 Oct 2023",
      rating: { stars: 4.7, count: 1800 }
    }

    const item4={
      id: "004",
      image: "images/img4.webp",
      company: "Puma",
      item_name: "Sports Jacket",
      original_price: 3000,
      current_price: 2400,
      discount_percentage: 20,
      return_period: 20,
      delivery_date: "18 Oct 2023",
      rating: { stars: 4.6, count: 2100 }
    }

    const item5={
      id: "005",
      image: "images/img5.jpg",
      company: "Reebok",
      item_name: "Training Shorts",
      original_price: 1500,
      current_price: 1200,
      discount_percentage: 20,
      return_period: 10,
      delivery_date: "20 Oct 2023",
      rating: { stars: 4.4, count: 900 }
    }

    const item6={
      id: "006",
      image: "images/img6.webp",
      company: "Levi's",
      item_name: "Denim Jacket",
      original_price: 3500,
      current_price: 2800,
      discount_percentage: 20,
      return_period: 25,
      delivery_date: "22 Oct 2023",
      rating: { stars: 4.9, count: 3000 }
    }

    const item7={
      id: "007",
      image: "images/img7.webp",
      company: "Zara",
      item_name: "Casual Shirt",
      original_price: 2500,
      current_price: 2000,
      discount_percentage: 20,
      return_period: 18,
      delivery_date: "24 Oct 2023",
      rating: { stars: 4.3, count: 1500 }
    }

  return(
    <>
    <div className="men-container">
      <div className="item-container">
      <img className="item-image" src={item1.image} alt="item image"/>
      <div className="rating">
          {item1.rating.stars} ⭐ | {item1.rating.count}
      </div>
      <div className="company-name">{item1.company}</div>
      <div className="item-name">{item1.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item1.current_price}</span>
          <span className="original-price">Rs {item1.original_price}</span>
          <span className="discount">({item1.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image" src={item2.image} alt="item image"/>
      <div className="rating">
          {item2.rating.stars} ⭐ | {item2.rating.count}
      </div>
      <div className="company-name">{item2.company}</div>
      <div className="item-name">{item2.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item2.current_price}</span>
          <span className="original-price">Rs {item2.original_price}</span>
          <span className="discount">({item2.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image image-3" src={item3.image} alt="item image"/>
      <div className="rating">
          {item3.rating.stars} ⭐ | {item3.rating.count}
      </div>
      <div className="company-name">{item3.company}</div>
      <div className="item-name">{item3.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item3.current_price}</span>
          <span className="original-price">Rs {item3.original_price}</span>
          <span className="discount">({item3.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image image-3" src={item4.image} alt="item image"/>
      <div className="rating">
          {item4.rating.stars} ⭐ | {item4.rating.count}
      </div>
      <div className="company-name">{item4.company}</div>
      <div className="item-name">{item4.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item4.current_price}</span>
          <span className="original-price">Rs {item4.original_price}</span>
          <span className="discount">({item4.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image image-3" src={item5.image} alt="item image"/>
      <div className="rating">
          {item5.rating.stars} ⭐ | {item5.rating.count}
      </div>
      <div className="company-name">{item5.company}</div>
      <div className="item-name">{item5.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item5.current_price}</span>
          <span className="original-price">Rs {item5.original_price}</span>
          <span className="discount">({item5.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image image-3" src={item6.image} alt="item image"/>
      <div className="rating">
          {item6.rating.stars} ⭐ | {item6.rating.count}
      </div>
      <div className="company-name">{item6.company}</div>
      <div className="item-name">{item6.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item6.current_price}</span>
          <span className="original-price">Rs {item6.original_price}</span>
          <span className="discount">({item6.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
      <div className="item-container">
      <img className="item-image image-3" src={item7.image} alt="item image"/>
      <div className="rating">
          {item7.rating.stars} ⭐ | {item7.rating.count}
      </div>
      <div className="company-name">{item7.company}</div>
      <div className="item-name">{item7.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item7.current_price}</span>
          <span className="original-price">Rs {item7.original_price}</span>
          <span className="discount">({item7.discount_percentage}% OFF)</span>
      </div>
      {elementFound?<button type="button" className="btn btn-add-bag btn-danger " onClick={handleRemove}><MdDelete/>Remove</button>:<button type="button" className="btn btn-add-bag btn-success " onClick={handleAddToBag}><IoMdAddCircle/>Add to bag</button>}
    </div>
     
    </div>
    </>
  );
}

export default Men;