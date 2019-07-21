import React, {Component} from 'react';

const Top = () => {
  function handlepesan(value, e){
    e.preventDefault();
    alert("Halaman Top Tampil");
    alert(value);
  }


  return <a href="/" onClick= {(e) => handlepesan ("Pesan dari TOP",e)}> Halaman Top</a>
};

export default Top;
