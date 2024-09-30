import Web3Context from './VaultContext';
import { useContext } from 'react';

export const UseWeb3Context = () => {
    const context = useContext(Web3Context);
    if (!context) {
        throw new Error('useWeb3Context() can only be used inside of <Web3ContextProvider />, ' + 'please declare it at a higher level.');
    }
    return context;
}