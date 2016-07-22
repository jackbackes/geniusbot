'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

function MarkerCreator({geometry, name}, methods){
    console.log('creating marker');
    console.log(name);
    console.log(geometry);
    console.log(this);
    const {lat, lng} = geometry.location;
    return [
      <Marker
      lat={lat}
      lng={lng}
      draggable={true}
      onDragEnd={this.onDragEnd} />,
      <InfoWindow
      lat={lat}
      lng={lng}
      content={name}
      onCloseClick={this.onCloseClick} />,
      <Circle
      lat={lat}
      lng={lng}
      radius={500}
      onClick={this.onClick} />
    ]
  }

export default MarkerCreator;
