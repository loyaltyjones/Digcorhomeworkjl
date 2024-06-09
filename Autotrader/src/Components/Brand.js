import React from 'react'
import { Make } from './Make'
import { useContext } from "react";
import { VehicleTypeContext } from '../contexts/VehicleTypeContext';

export function Brand() {
    const VehicleTypeDataContext = useContext(VehicleTypeContext);
  return (
    <div>
    Brand
    <div>(Grandchild/Vehicle capacity: {VehicleTypeDataContext.capacity})</div>
    <Make/>
    </div>
    
  )
}

