import React, { useState, createContext } from 'react';

export const SharedContext = createContext();

export default props => {
  const [select, setSelect] = useState(
    'Choose a county from left hand nav bar'
  );
  const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(0);

  const value = {
    select,
    setSelect,
    toggle,
    setToggle,
    input,
    setInput,
    page,
    setPage,
  };

  // const value = useMemo(() => {
  //   return {
  //     select,
  //     setSelect,

  //   };
  // }, [select]);

  return <SharedContext.Provider value={value} {...props} />;
};
