import React, { Component } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Papa from 'papaparse'
import { Map, CircleMarker, TileLayer, Polygon, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import { stateCoordinates } from '../../utils/stateCoordinates'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class StatewiseCaseList extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){

    }

    render() {
        let { currentState, caseList } = this.props
        return (
            <div>
                <div class="pt-2 pb-2 pl-2 mb-4 ml-2 mr-3">
                    <p class="back-blue text-white pt-2 pb-1 pl-4 pr-4 mb-0">Case List</p>
                    <div class="table-responsive back-white " style={{height:'400px'}}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">State</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Date of Sentencing</th>
                                    <th scope="col">Nature of Offence</th>
                                    <th scope="col">Court</th>
                                    <th scope="col">Description of offence</th>
                                </tr>
                            </thead>
                            <tbody>
                                {caseList.map((c,i) => {
                                    if(currentState == null || currentState.state == c['State'])
                                        return <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{c['Name of person']}</td>
                                            <td>{c['State']}</td>
                                            <td>{c['District']}</td>
                                            <td>{c['Date of Sentencing']}</td>
                                            <td>{c['Nature of Offence']}</td>
                                            <td>{c['Court']}</td>
                                            <td>{c['Description of offence']}</td>
                                        </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
  }
}

export default StatewiseCaseList
