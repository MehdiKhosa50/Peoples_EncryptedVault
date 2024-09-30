import { Web3Context } from "./VaultContext";
import { useState } from "react";

const Web3Provider = ({ children }) => {
    const [web3State, setWeb3State] = useState({
        contractInstance: null,
        selectedAccount: null,
    });

    return (
        <Web3Context.Provider value={web3State}>
            {children}
        </Web3Context.Provider>
    );
};

export default Web3Provider;