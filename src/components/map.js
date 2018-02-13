import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
// import FaAnchor from 'react-icons/lib/fa/anchor';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";

const MyMapComponent = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
    >

        <Marker
            position={{ lat: 33.7046, lng: -117.8265 }}
            onClick={props.onToggleOpen}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            </InfoWindow>}
        </Marker>

        <Marker
            position={{ lat: 33.7146, lng: -117.8265 }}
            onClick={props.onToggleOpen}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            </InfoWindow>}
        </Marker>

        <Marker
            position={{ lat: 33.6846, lng: -117.8265 }}
            onClick={props.onToggleOpen}
        >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                {/*<FaAnchor />*/}
            </InfoWindow>}
        </Marker>
        {/*<MarkerWithLabel*/}
            {/*// onClick={}*/}
            {/*position={{ lat:33.6846, lng: -117.8265 }}*/}
            {/*labelAnchor={new google.maps.Point(0,0)}*/}
            {/*labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "8px"}}*/}
            {/*>*/}
            {/*<div>*/}
                {/*<p>403 East Woodcroft Avenue<br/>Irvine, CA, 91740</p>*/}
            {/*</div>*/}
        {/*</MarkerWithLabel>*/}

        {/*<MarkerWithLabel*/}
            {/*// onClick={}*/}
            {/*position={{ lat:33.7846, lng: -117.8265 }}*/}
            {/*labelAnchor={new google.maps.Point(0,0)}*/}
            {/*labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "8px"}}*/}
        {/*>*/}
            {/*<div>*/}
                {/*<p>403 East Woodcroft Avenue<br/>Irvine, CA, 91740</p>*/}
            {/*</div>*/}
        {/*</MarkerWithLabel>*/}

        {/*<MarkerWithLabel*/}
            {/*// onClick={}*/}
            {/*position={{ lat:33.8846, lng: -117.8265 }}*/}
            {/*labelAnchor={new google.maps.Point(0,0)}*/}
            {/*labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "8px"}}*/}
        {/*>*/}
            {/*<div>*/}
                {/*<p>403 East Woodcroft Avenue<br/>Irvine, CA, 91740</p>*/}
            {/*</div>*/}
        {/*</MarkerWithLabel>*/}

        {/*{props.isMarkerShown && <Marker position={{ lat: 33.6846, lng: -117.8265 }} onClick={props.onMarkerClick} />}*/}
        {/*{props.isMarkerShown && <Marker position={{ lat: 33.7846, lng: -117.8265 }} onClick={props.onMarkerClick} />}*/}
        {/*{props.isMarkerShown && <Marker position={{ lat: 33.8846, lng: -117.8265 }} onClick={props.onMarkerClick} />}*/}

    </GoogleMap>
)

export class MapComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}