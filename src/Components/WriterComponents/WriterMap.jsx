import React from "react";
import Map, { NavigationControl,Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import markerImg from '../../Images/marker.png';
import "./writerMap.css";
import { Container, Row } from 'react-bootstrap';

function WriterMap(props){
    return (
        <Container>
            <Row>
                <div className="title">{props.place}</div>
            </Row>
            <Row className='justify-content-center align-items-center'>
            <Map  mapLib={maplibregl}
                initialViewState={{
                    longitude: props.coords.longitude,
                    latitude: props.coords.latitude,
                    zoom: 14
                }}
                style={{ width: "80%", height: "90vh" }}
                    mapStyle="https://api.maptiler.com/maps/topo-v2/style.json?key=5esAXK9TAIIVf5jS9oSW"
            >
                    <NavigationControl position="top-left" />
                    <Marker latitude={props.coords.latitude} longitude={props.coords.longitude} color='#61dbfb'>
                        <img src={markerImg} widht="50"
                            height="50"/>
                    </Marker>
                    </Map>
                </Row>
            </Container>
    );
}


export default WriterMap;

