import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  var person = {
    name: "Dr.Mahafuz",
    job:"singer",
    age:34,
    roll:3,
  }
  const products = [
    {name:'photoshop',price:'$500'},
    {name:'illust', price:'$600'},
    {name:'pdf',price:'$7'},
    {name:'aust',price:'$200'},
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome <code>My React</code> First Project.
        </p>
        <h1>{person.name+" "+person.job+" "}{person.age +person.roll}</h1>
        <p>My First react Paragraph</p>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count +  1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h2>count: {count}</h2>
      <button onMouseOver={ handleIncrease }>Increase</button>
      <button onMouseLeave={handleDecrease}>Decrease</button>
    </div>
  );
}

function Users(){
const [users, setUsers] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode..com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
})
  return (
    <div>
      <h3>User: {users.length}</h3>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'red',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'5px',
    padding:'5px',
  }
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

function Person() {
  return (
    <div>
      <h1>Sakib</h1>
    </div>
  );
}


export default App;
