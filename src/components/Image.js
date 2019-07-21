import React , { Component } from 'react';

class Image extends Component {
  render() {
    return(
        <img src={this.props.linkgambar} alt = "Gambar Makanan" width = "500"/>
    )
  }
}


export default Image;
