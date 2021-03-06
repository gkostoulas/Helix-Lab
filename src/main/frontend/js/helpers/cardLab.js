import * as React from 'react';
import * as PropTypes from 'prop-types';



class CardLab extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className="card style={{width: 20+'rem'}} animated fadeIn">
        <div style={{height:120+'px', width:120+'px', marginLeft: 'auto',	marginRight: 'auto'}} >
         <img className="card-img-top"  style={{height:120+'px', width:120+'px', marginLeft: 'auto',	marginRight: 'auto'}} src={this.props.imagesrc} alt="Card image cap"/> 
         </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
          <a href="#" className="btn btn-primary">Explore</a>
        </div>
      </div>);
  }
}



/*CardLab.propTypes = {
  title: PropTypes.string.isRequired,
  imagesrc: PropTypes.string,
  text: PropTypes.string,
  };*/


export default CardLab;