import React from 'react'
import { useContext } from "react";
import { VehicleTypeContext } from '../contexts/VehicleTypeContext';

export function Make() {
    const VehicleTypeDataContext = useContext(VehicleTypeContext);

  return (
    <div>Make
    <div>(Great Grandchild/Vehicle Type: {VehicleTypeDataContext.type})</div>
    </div>
   
  );
};




