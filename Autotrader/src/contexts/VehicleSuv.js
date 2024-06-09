import { createContext } from "react";

export const VehicleContextSuv = createContext(
{
    type: "suv",
    doors: "four",
    capacity: "six",
},
);