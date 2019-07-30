import React, { Component } from 'react';
//import axios from 'axios';


export default class Home extends Component {
 
  render() {
    return (
      <div>
        <div style={{marginTop: '50px', marginBottom: '50px', marginLeft: '250px', width: '1200px', height: '500px', backgroundImage: 'url("http://hannatravels.com/wp-content/uploads/2017/11/SriLanka-1024x685.jpg")',
        backgroundRepeat: 'no-repeat'}}> 
        </div>

        <hr></hr>

        <div style={{marginTop: '50px', marginBottom: '50px', marginLeft: '270px', width: '200px', height: '200px', backgroundImage: 'url("https://www.rd.com/wp-content/uploads/2017/07/00_hike_Best-Hikes-Across-America%E2%80%94and-the-Best-Times-to-Go_421563208_aaronj9_FT.jpg")',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', float: 'left', color: 'white', fontSize: '20px', textAlign: 'center', paddingTop: '80px'}}> 
        HIKING
        </div>

        <div style={{marginTop: '50px', marginBottom: '50px', marginLeft: '50px', width: '200px', height: '200px', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8fVSrSZerL9Bt_mB8cza1-Xv8EhVpupjJUqUENwEL1ksTAIl")',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', float: 'left', color: 'white', fontSize: '20px', textAlign: 'center', paddingTop: '80px'}}> 
        SURFING
        </div>

        <div style={{marginTop: '50px', marginBottom: '50px', marginLeft: '50px', width: '200px', height: '200px', backgroundImage: 'url("https://www.straight.com/files/v3/styles/gs_large/public/images/18/06/gettyimages-649155058.jpg?itok=Lhx5ciAR")',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', float: 'left', color: 'white', fontSize: '20px', textAlign: 'center', paddingTop: '80px'}}> 
        CAMPING
        </div>

        <div style={{marginTop: '50px', marginBottom: '50px', marginLeft: '50px', width: '200px', height: '200px', backgroundImage: 'url("https://www.divesystemsmalta.com/wp-content/uploads/2015/04/Discover-Scuba-Diving-500x500.jpg")',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', float: 'left', color: 'white', fontSize: '20px', textAlign: 'center', paddingTop: '80px'}}>
        DIVING 
        </div>

      </div>
    )
  }
}