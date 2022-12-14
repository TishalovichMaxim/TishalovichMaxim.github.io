import React from "react";
import Map, { NavigationControl,Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import markerImg from '../../Images/marker.png';
import "./writerMap.css";

function WriterMap(props){
    return (
        <div >
            <div className="title">{props.place}</div>
        <Map  mapLib={maplibregl}
            initialViewState={{
                longitude: props.coords.longitude,
                latitude: props.coords.latitude,
                zoom: 14
            }}
            style={{ width: "80%", height: "90vh" }}
            mapStyle={process.env.REACT_APP_MAPS_REF}
        >
                <NavigationControl position="top-left" />
                <Marker latitude={props.coords.latitude} longitude={props.coords.longitude} color='#61dbfb'>
                    <img src={markerImg} widht="50"
                        height="50"/>
                </Marker>
            </Map>
            </div>
    );
}


export default WriterMap;

