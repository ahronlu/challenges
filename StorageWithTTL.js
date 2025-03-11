import React, { createContext, useContext, useState, useCallback } from 'react';

// Context for KeyStore
const KeyStoreContext = createContext(null);

// KeyStoreProvider for wrapping the app with state management
export const KeyStoreProvider = ({ children }) => {
  const [store, setStore] = useState(new Map());

  const setKey = useCallback((key, value, ttl) => {
    const expirationTime = Date.now() + ttl;
    setStore(prevStore => new Map(prevStore).set(key, { value, expirationTime }));
  }, []);

  const getKey = useCallback((key) => {
    const entry = store.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expirationTime) {
      setStore(prevStore => {
        const newStore = new Map(prevStore);
        newStore.delete(key);
        return newStore;
      });
      return null; // key expired
    }

    return entry.value;
  }, [store]);

  return (
    <KeyStoreContext.Provider value={{ setKey, getKey }}>
      {children}
    </KeyStoreContext.Provider>
  );
};

// Hook to use the KeyStore context
export const useKeyStore = () => {
  const context = useContext(KeyStoreContext);
  if (!context) {
    throw new Error('useKeyStore must be used within a KeyStoreProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useCallback } from 'react';

// Context for KeyStore
const KeyStoreContext = createContext(null);

// KeyStoreProvider for wrapping the app with state management
export const KeyStoreProvider = ({ children }) => {
  const [store, setStore] = useState(new Map());

  const setKey = useCallback((key, value, ttl) => {
    const expirationTime = Date.now() + ttl;
    setStore(prevStore => new Map(prevStore).set(key, { value, expirationTime }));
  }, []);

  const getKey = useCallback((key) => {
    const entry = store.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expirationTime) {
      setStore(prevStore => {
        const newStore = new Map(prevStore);
        newStore.delete(key);
        return newStore;
      });
      return null; // key expired
    }

    return entry.value;
  }, [store]);

  return (
    <KeyStoreContext.Provider value={{ setKey, getKey }}>
      {children}
    </KeyStoreContext.Provider>
  );
};

// Hook to use the KeyStore context
export const useKeyStore = () => {
  const context = useContext(KeyStoreContext);
  if (!context) {
    throw new Error('useKeyStore must be used within a KeyStoreProvider');
  }
  return context;
};
