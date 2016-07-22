'use strict';
import React from 'react';
import MapCreator from './MapCreator';


const AirportMap = ({origin, destination}) => React.createClass({
  shouldComponentUpdate(){
    return false
  },
  render(){

    const Map = MapCreator({ origin, destination });
    return (
      < Map />
    )
  }
})

export default AirportMap;
