import React from 'react';
import "./Style.scss"
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Content from "./Layout/Content";
import {ShopProvider} from "./Additional/Provider/context";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const FortNiteApp = () => {
 return (
   <div className="main">
    <ShopProvider>
     <Header/>
       <main className="content">
        <ToastContainer/>
        <Content/>
       </main>
     <Footer/>
    </ShopProvider>
   </div>
 );
};

export default FortNiteApp;