import React, { Component } from 'react';

//Import dari file Header.js
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import List from './List';
import Top from './Top';

//function Component
// const Footer = () => {
//   return (
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>@2019</p>
//     </div>
//   );
// };



// Comment didalam return
//
// {
//
//     // <List />
// }

//function Component bentuk lain
function App() {
  return (
    <div>
      <Header list="3 Terbaik" />
      <Top />
      <Main menuMakanan={
        [
         {
           nama : "Mie Ayam",
           harga: 10000
         },
         {
           nama : "Bakso",
           harga: 10000
         }
       ]
      } />
      <List />
      <Footer name="Makanan Nusantara" tahun="2018" />
    </div>
  );
}

export default App;
