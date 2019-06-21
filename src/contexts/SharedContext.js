import React, { useState, createContext, useMemo } from 'react';
 
export const SharedContext = createContext();
 
export default props => {
  const [select, setSelect] = useState('Choose a county from left hand nav bar')
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')
  
  const value = {select, setSelect, toggle, setToggle, input, setInput}

  // const value = useMemo(() => {
  //   return {
  //     select, 
  //     setSelect,

  //   };
  // }, [select]);
 
  return <SharedContext.Provider value={value} {...props} />;
};