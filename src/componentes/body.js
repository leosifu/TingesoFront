import React from 'react';
import '../CSS/css/bootstrap.min.css';
import '../CSS/css/bootstrap-responsive.min.css';
import '../CSS/css/font-awesome.css';
import '../CSS/css/pages/dashboard.css';
import '../CSS/css/style.css';
import Grafico from './grafico';
import Cards from './cards';


class Body extends React.Component{
  render(){
    return(
      <div class="main">
        <div class="main-inner">
          <div class="container">
            <div class="row">
              <div class="span6">

              <Cards/>
              <Grafico/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
