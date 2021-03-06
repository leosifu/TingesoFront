import React from 'react';
import '../CSS/css/bootstrap.min.css';
import '../CSS/css/bootstrap-responsive.min.css';
import '../CSS/css/font-awesome.css';
import '../CSS/css/pages/dashboard.css';
import '../CSS/css/style.css';

class Cards extends React.Component {
  render(){
    return(
      <div class="main">
        <div class="main-inner">
          <div class="container">
            <div class="row">
              <div class="span6">
                <div class="widget widget-nopad">
                  <div class="widget-header"> <i class="icon-list-alt"></i>
                    <h3> Todays Stats</h3>
                  </div>
                  <div class="widget-content">
                    <div class="widget big-stats-container">
                      <div class="widget-content">
                        <h6 class="bigstats">A fully responsive premium quality admin template built on Twitter Bootstrap by <a href="http://www.egrappler.com" target="_blank">EGrappler.com</a>.  These are some dummy lines to fill the area.</h6>
                        <div id="big_stats" class="cf">
                          <div class="stat"> <i class="icon-anchor"></i> <span class="value">851</span> </div>
                          <div class="stat"> <i class="icon-thumbs-up-alt"></i> <span class="value">423</span> </div>

                          <div class="stat"> <i class="icon-twitter-sign"></i> <span class="value">922</span> </div>

                          <div class="stat"> <i class="icon-bullhorn"></i> <span class="value">25%</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Cards;
