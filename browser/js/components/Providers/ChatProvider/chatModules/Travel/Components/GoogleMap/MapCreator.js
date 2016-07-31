'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {MapKey} from './key';
import MarkerCreator from './MarkerCreator';


const MapCreator = ({origin, destination}) => React.createClass( {

  onMapCreated( map ) {

    map.setOptions( {
      disableDefaultUI: true
    } );
  },

  onDragEnd( e ) {
    // console.log( 'onDragEnd', e );
  },

  onCloseClick() {
    // console.log( 'onCloseClick' );
  },

  onClick( e ) {
    // console.log( 'onClick', e );
  },

  render() {
    // console.log('creating map', origin, destination);
    const markers = [];
    let lat = 0;
    let lng = 0;
    let markerCount = 0;
    if(origin) {
      const OriginMarker = MarkerCreator.call(this, origin);
      markers.push(...OriginMarker);
      lat+=origin.geometry.location.lat;
      lng+=origin.geometry.location.lng; markerCount++
    };
    if(destination) {
      const DestinationMarker = MarkerCreator.call(this, destination);
      markers.push(...DestinationMarker);
      lat+=destination.geometry.location.lat;
      lng+=destination.geometry.location.lng; markerCount++
    };
    // console.log('markers to create map:', markers);
    return (
      < Gmaps
        width = { '100%' }
        height = { '600px' }
        loadingMessage = { "I'm getting your map ready!" }
        lat = { lat / markerCount }
        lng = { lng / markerCount }
        zoom = { 3 }
        params = {
          { v: '3.exp', key: MapKey } }
        onMapCreated = { this.onMapCreated }
        children = {markers}
      />
    );
  }
})

export default MapCreator;
