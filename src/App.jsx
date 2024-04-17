import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
const [addToCart, setAddToCart] = useState(Array(8).fill(true));

const handleAddToCart = (index) => {
    const updatedAddToCart = [...addToCart];
  updatedAddToCart[index] = !updatedAddToCart[index];
    setAddToCart(updatedAddToCart);


    if (updatedAddToCart[index]) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className='orgbackground'>
      <div className='background'>
        <div className='navbar'>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
            <li className="nav-item" id='cartbar'>
              <a className="nav-link" href="#" tabIndex="-1">CART : {count}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='frontpage'>
        <img src="src/ecommercefashion.jpg" alt="" />
      </div>
      <div className='cardssection'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div className='cards' key={index}>
            <img src={`src/OIP (${index + 1}).jpg`} alt="" />
            <h4>Product {index + 1}</h4>
            <h6>$30.00</h6>
            <button onClick={() => handleAddToCart(index)}>
              {addToCart[index] ? 'ADD TO CART' : 'REMOVE'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
