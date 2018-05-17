
        import React, { Component } from "react";
        import Album from './App';
        import "./index.css";
        class Dashboard extends Component {
            render() {
                return (
                <div className="Dashboard">         
                    <div className="col-sm-2">
                    <div className="card">  
                           <div className="card-body">
                              <a onClick="this.getImg();" href="#top">View Photos</a> 
                            </div>
                         </div>
                     </div>
               
               
          
          
                
           <div className="row">
              <div className="col-sm-12">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                <div className="carousel-item active">         
               <img className="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
                    alt="First slide"height="500px"/>
                </div>
              <div className="carousel-item">
              <img className="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/22345122892/small/1479703382/enhance"
              alt="Second slide"height="500px"/>
              </div>








          
              <div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="false"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="false"></span>
              <span className="sr-only">Next</span>
            </a>
            </div>
          
          






          
          <div className="live__scroll">
            <div className="row text-center">
              <li className="col-1 live__scroll--box"data-target="#carouselExampleIndicators" data-slide-to="0" class="active"><img class="d-block w-100" src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/010046522485/media/23672571594/medium/1515996015/enhance"
               alt="First slide"width="100px"/>
              </li>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div> 
    </div>     
              
               
                );
            }
        }
        export default Dashboard;
        
        
     