import { useContext } from 'react';
import { StoreContext } from '../store/StoreContext.jsx';

export function useGlobalStore(){
    const contextValue = useContext(StoreContext);
    if(!contextValue) throw new Error('useStore must be used within StoreProvider');
    return contextValue;
}