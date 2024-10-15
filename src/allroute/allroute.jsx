import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Login from '../components/login'
import Signup from '../components/signup'
import Cart from '../components/cart'
import CreateProduct from '../components/createproduct'
import Productid from '../components/productid'
import PrivateRoute from '../privateroute/privateroute'
import Wishlist from '../components/wishlist'
import Ladies from '../components/ladies'
import Men from '../components/men'
import Kids from '../components/kids'
import HMhome from '../components/h&mhome'
import Sustanability from '../components/sustanability'
import Baby from '../components/baby'
import Sale from '../components/sale'
import Sport from '../components/sport'
import Nodata from '../components/nodata'
import Footer from '../components/Footer'
import Myaccount from '../components/myaccount'
import Products from '../components/product'


const Allroute = () => {

    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path='/createproduct' element={<PrivateRoute><CreateProduct/></PrivateRoute>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<Productid/>}/>
            <Route path='/wishlist' element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
            <Route path='/myaccount' element={<PrivateRoute><Myaccount/></PrivateRoute>}/>
            <Route path='/ladies' element={<Ladies/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/h&mhome' element={<HMhome/>}/>
            <Route path='/sustainability' element={<Sustanability/>}/>
            <Route path='/baby' element={<Baby/>}/>
            <Route path='/sale' element={<Sale/>}/>
            <Route path='/sport' element={<Sport/>}/>
            <Route path='*' element={<Nodata/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/privateroute' element={<PrivateRoute/>}/>
        </Routes>
        <Footer/>
        </>
    )
}

export default Allroute