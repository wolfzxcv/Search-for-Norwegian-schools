import React, { useState, createContext } from 'react';

export const SharedContext = createContext();

export default props => {
  const [mergeData, setMergeData] = useState([]);
  const [select, setSelect] = useState(
    'Choose a county from left hand nav bar'
  );
  const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(0);
  const [showList, setShowList] = useState(false);

  const value = {
    mergeData,
    setMergeData,
    select,
    setSelect,
    toggle,
    setToggle,
    input,
    setInput,
    page,
    setPage,
    showList,
    setShowList,
  };

  // const value = useMemo(() => {
  //   return {
  //     select,
  //     setSelect,

  //   };
  // }, [select]);

  return <SharedContext.Provider value={value} {...props} />;
};
