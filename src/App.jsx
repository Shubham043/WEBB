import styles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Connection from "./components/Connection.jsx";
import Navbar from "./components/Navbar.jsx";

import Token from "./components/tokens";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, WagmiConfig, createConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
//   import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [publicProvider()]
);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "a48d25d2c64952d5a182923acf10d9ea",
    chains,
});
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

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
                        <WagmiConfig config={wagmiConfig}>
                            <RainbowKitProvider chains={chains}>
                                <Routes>
                                    <Route path="/" element={<Connection />} />
                                    <Route path="/token" element={<Token />} />
                                </Routes>
                            </RainbowKitProvider>
                        </WagmiConfig>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
};

export default App;

