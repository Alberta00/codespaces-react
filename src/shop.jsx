import './shop.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Item(prop){
    return (<div key={prop.id} onClick={()=>prop.callback(prop)}>
        <img src={prop.img} width={200} height={200}/><br/>
        id: {prop.id} <br/>
        name: {prop.name}<br/>
        price: {prop.price}<br/>
    </div>);
}
export default function Shop(){
    const [products,setProducts]=useState([]);
    const URL = "https://bookish-space-pancake-6wjv6wrwpjj2x5qg-5000.app.github.dev";
    useEffect(()=>{
        axios.get(URL +'/api/products')
        .then(response=>{
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("error");
        });
        return ()=>{


        }
    }
    ,[]);
        const [cart,setCart]=useState([]);
        function addCart(item){
         setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
        }
        const productList=products.map(item=><Item {...item} callback={addCart}/>);
        const cartList=cart.map((item,index)=><li>{item.id} {item.name} {item.price}
        <button onClick={()=>{
            alert('You click'+index)
            setCart(cart.filter((i,_index)=>index!=_index));
        }}>
        Delete</button>
        </li>);
        let totalprice=0;
        for(let i=0;i<cart.length;i++){
            totalprice+=cart[i].price;
        }
        return (<>
        <div className='grid-container'>{productList}</div>
        <h1>Cart</h1>
        <button onClick={()=>setCart([])}>clear all</button>
        <ol>{cartList}</ol>
        <h2>totla price {totalprice} bath</h2>
        </>);
}