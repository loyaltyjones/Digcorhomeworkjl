import React from 'react'
import { useContext } from "react";
import { useState } from 'react';
import { VehicleTypeContext } from '../contexts/VehicleTypeContext';
import { Brand } from './Brand';

export function Cars() {

const VehicleTypeDataContext = useContext(VehicleTypeContext);

  return (
    <>
      <h1>Cars</h1>
      <div>(Child/Vehicle doors: {VehicleTypeDataContext.doors})</div>
      <Brand/>

    </>

  )
}

