import React, { Component } from 'react'
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

class StatewiseMap extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    componentDidMount(){

    }

    render() {
        let { statewiseData, setCurrentState } = this.props
        return (
            <div>
                <Map
                    style={{ height: "400px", width: "100%" }}
                    zoom={4}
                    minZoom={4}
                    center={[20.5937, 78.9629]}
                    >
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {statewiseData.map((m,i) => {
                        return <Marker key={`marker-${i}`} position={m.position} onclick={() => setCurrentState(m)}>
                            <Popup>
                                <span>State - {m.state} <br />Sentenced to Death: {m.deaths}</span>
                            </Popup>
                        </Marker>
                    })}
                </Map>
            </div>
        )
  }
}

export default StatewiseMap

