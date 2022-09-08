import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Products from '../../Products';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()

    const getProduct = () => new Promise ((res,rej) => setTimeout(() => res(Products.find(prod => prod.id == id)), 2000)) 
    
    useEffect(() => {
        getProduct()
        .then(data => setItem(data))
        .catch(error => console.error(error))  
    }, [])
    
    return (item ? <ItemDetail item={item}/> : <Loader/>) 
}

export default ItemDetailContainer; 