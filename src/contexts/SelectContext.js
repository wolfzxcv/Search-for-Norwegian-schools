import React, { useState, createContext, useMemo } from 'react';
 
export const SelectContext = createContext();
 
export default props => {
  const [select, setSelect] = useState('Choose a county from left hand nav bar')
 
  const value = useMemo(() => {
    return {
      select, 
      setSelect
    };
  }, [select]);
 
  return <SelectContext.Provider value={value} {...props} />;
};