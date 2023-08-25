
import styles from "./styles";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Connection from "./components/Connection.jsx";
import Navbar from "./components/Navbar.jsx";

import Token from "./components/tokens";


const App = () => {
   
    return (
        
        <div className="bg-[#292929] w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}  `}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-[#292929]  ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                <BrowserRouter>
      <Routes>
         
        <Route path="/" element={ <Connection/>} />
       
        <Route path="/token" element={<Token /> } />
      </Routes>
    </BrowserRouter>

                   

                </div>
            </div>
        </div>
       
    );
};

export default App;
