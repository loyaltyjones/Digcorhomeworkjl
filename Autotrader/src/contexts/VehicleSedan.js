import { createContext } from "react";

export const VehicleContextSedan = createContext(
{
    type: "sedan",
    doors: "four",
    capacity: "five",
},
);