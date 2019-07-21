import React, { Component } from 'react';
import menuMakanandua from './lib/Food';


const menuMakanan =
[
  {
    nama : "Mie Ayam",
    harga: 10000
  },
  {
    nama : "Bakso",
    harga: 10000
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : "Menu Makanan",
      title2 : "Menu Minuman",
      inputValue : '',
      inputKota : '',
      menuMakanan : [
        {
          nama : "Mie Ayam",
          harga: 10000
        },
        {
          nama : "Bakso",
          harga: 10000
        }
      ]
    };
    this.rubaData = this.rubaData.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }


//Cara satu dalam membuat state
  // rubaData(){
  //   this.setState({
  //     title : "Pilih Makanan"
  //   });
  // }

//Cara dua dalam membuat setState
  rubaData(){
    this.setState((state, props) => {
      return({
        title : state.title2,
        title2 : state.title,

      }) ;
    });
  }

  handleOnChange(value, e){
    // console.log("Jalan");
    // console.log(e.target.value);

    // this.setState({
    //   inputValue :e.target.value
    // });


    // const input = e.target.value
    // this.setState((state, props) => {
    //   return(
    //     {
    //       inputValue : input
    //     }
    //   );
    // });


    this.setState({
      [value] :e.target.value
    });


  }log

  render(){
    return(
      <div>
        <h3>{this.state.title }</h3>
        <h3>{this.state.title2}</h3>
        <button onClick={this.rubaData}>Rubah Data</button>

        <br/>
        <br/>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.handleOnChange("inputValue", e)}/>

        <input type="text" value={this.state.inputKota} onChange={(e) => this.handleOnChange("inputKota", e)}/>


        {this.props.menuMakanan.map((value, index) =>{
          console.log(this.state.menuMakanan);
          return(
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}


        {this.state.menuMakanan.map((value, index) =>{
          console.log(this.state.menuMakanan);
          return(
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}


        {menuMakanan.map((value, index) =>{
          console.log(this.state.menuMakanan);
          return(
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}

        {menuMakanandua.map((value, index) =>{
          console.log(this.state.menuMakanan);
          return(
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}

      </div>

      )
    }
  }



export default Main;
