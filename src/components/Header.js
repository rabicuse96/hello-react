// import React, {Component} from 'react';

// class Header extends Component {
//   render(){
//     return(
//       <div>
//         <h2>Makanan Khas Indonesia</h2>
//       </div>
//     )
//   }
// }


//Import cara lain
import React from 'react';

//Class Component
export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar Makanan Nusantara",
      datalist : this.props.list,
      statusRendering : true
    };
    //Ketika membuat fungsi harus di bind
    //didalam custructor agar data state bisa digunakan pada alert
    this.handlepesan = this.handlepesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlepesan(value,e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  //Dijalankan setelah perintah render Dijalankan
  componentDidMount(){
    console.log("Jalan : componentDidMount");
  }

  handleElement(){
    this.setState((state, props)=>{
      return {
          statusRendering: !this.state.statusRendering
      }
    });
  }


  render(){
    console.log("Jalan : Render");
    return(
      <div>
        { this.state.statusRendering ? (
          <div>
              <h1>Selamat Datang</h1>
              <h2>Silahkan Memilih Makanan</h2>
          </div>
        ) : (
          <div>
              <h1>Selamat Tinggal</h1>
              <h2>Jangan Lupa Datang Kembali</h2>
          </div>
        )}

        <button onClick={this.handleElement}>Change</button>
      </div>
    )


    // return(
    //   <div>
    //     <h2>Makanan Khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.datalist}</p>
    //     <a href="/" onClick={(e) => this.handlepesan("Pesan dari header",e)}>Halaman Header</a>
    //   </div>
    // );
  }
}



// export default Header;
