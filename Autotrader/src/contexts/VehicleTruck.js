import { createContext } from "react";

export const VehicleContextTruck = createContext(
{
    type: "truck",
    doors: "four",
    capacity: "four",
},
);