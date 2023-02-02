import React, {useState,createContext} from "react";


export const GlobalsContext = createContext(undefined)

// export const GlobalProvider = ({children}) => {
//     const [speed,setSpeed] = useState("3.2")
//     const [len,setLen] = useState("150")
//     return(
//         <GlobalsContext.provider
//         value = {{speed,setSpeed,len,setLen}}
//         >
//             {children}
//         </GlobalsContext.provider>
//     )
// }

