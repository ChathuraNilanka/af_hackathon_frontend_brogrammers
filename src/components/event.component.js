import React, { Component } from 'react';
import axios from 'axios';

export default class EventComp extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }
  
  render() {
    return (
        <table class="table" align="center" style = {{ width: 750 , backgroundColor:(211,211,211),marginTop : 20}}>
        <thead class="thead-light">
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Event Name</th>
                <th scope="col">Category</th>
                <th scope="col">Count</th>
                <th scope="col">Capacity</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">12/10/2019</th>
            <td>Kithulgala Rafting</td>
            <td>rafting</td>
            <td>8</td>
            <td>10</td>
            <td>have fun with rafting</td>
        </tr>
        <tr>
            <th scope="row">12/08/2019</th>
            <td>Meemure Camping</td>
            <td>Camping</td>
            <td>25</td>
            <td>55</td>
            <td>BBQ night ,Tents ,water Activities</td>
        </tr>
        <tr>
            <th scope="row">20/07/2019</th>
            <td>Off sesone Adams Peak hike</td>
            <td>Hiking</td>
            <td>20</td>
            <td>40</td>
            <td>hardcore Hike Expirience</td>
        </tr>
        <tr>
            <th scope="row">20/07/2019</th>
            <td>Lakegala Hiking</td>
            <td>Hiking</td>
            <td>20</td>
            <td>10</td>
            <td>hardcore Hike Expirience</td>
        </tr>
        <tr><button className = "btn btn-primary"align="right" >Add Event</button></tr>
         </tbody>
    </table>
  
    )
  }
}