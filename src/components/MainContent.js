import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';
import Left from './Left';
import List from './List';

const MainContent = ({ className }) => {
  const [mergeData, setMergeData] = useState([]);
  const { select, setSelect, toggle, input, page, setPage } = useContext(
    SharedContext
  );

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetch('https://data-nsr.udir.no/enheter');
      const data = await responseData.json();

      const responseCounty = await fetch('https://data-nsr.udir.no/fylker');
      const county = await responseCounty.json();

      //merge data to have county name in the main data
      const allData = data.map(A => {
        const finder = county.find(B => A.FylkeNr === B.Fylkesnr) || {};
        A.Navn = finder.Navn || '';
        A.isFavorite = false;
        return A;
      });
      setMergeData(allData);
    }

    fetchData();
  }, []);

  // console.log('got ' + mergeData.length + ' data');

  //get county name as drop-down list
  const filterCountyList = mergeData.reduce((eachData, countyName) => {
    eachData[countyName.Navn] = countyName.FylkeNr;
    return eachData;
  }, []);
  // console.log(`county name: ISO-code`, filterCountyList.sort());

  const getCounty = Object.keys(filterCountyList).sort();

  //print out each county's school info + dymanic filter condition
  let resultArr;
  if (toggle && input.trim().length === 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .sort((a, b) => a.FulltNavn.localeCompare(b.FulltNavn));
  } else if (toggle === false && input.trim().length === 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .sort((a, b) => b.FulltNavn.localeCompare(a.FulltNavn));
  } else if (toggle && input.trim().length > 0) {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .filter(x => x.FulltNavn.toLowerCase().includes(input))
      .sort((a, b) => a.FulltNavn.localeCompare(b.FulltNavn));
  } else {
    resultArr = mergeData
      .filter(x => x.Navn.includes(select))
      .filter(x => x.FulltNavn.toLowerCase().includes(input))
      .sort((a, b) => b.FulltNavn.localeCompare(a.FulltNavn));
  }

  //when choose(click) the county name, chaging the filter condition(so triger the resultArr, render the list)
  const handleChange = value => {
    setSelect(value);
  };

  //pagination 40 data per page
  const pages = resultArr.length / 40;

  const markFavo = id => {
    const newData = mergeData.map(x => {
      if (x.OrgNr === id) return { ...x, isFavorite: !x.isFavorite };
      return x;
    });
    setMergeData(newData);
  };

  return (
    <div className={className}>
      <div className="left">
        {getCounty.map((option, idx) => (
          <Left
            key={idx}
            value={option}
            select={option}
            handleChange={handleChange}
          />
        ))}
      </div>

      <div className="right">
        {resultArr.slice(40 * page, 40 * (page + 1)).map(list => (
          <List
            key={list.OrgNr}
            id={list.OrgNr}
            favorite={list.isFavorite}
            markFavo={markFavo}
            countyName={list.Navn}
            fullname={list.FulltNavn}
            email={list.Epost.length === 0 ? 'N/A' : list.Epost}
            character={
              list.Karakteristikk.length === 0 ? 'N/A' : list.Karakteristikk
            }
            type={list.ErOffentligSkole ? 'Public' : 'Private'}
            basic={list.ErGrunnSkole ? 'True' : 'False'}
          />
        ))}
      </div>

      <div className="pagination">
        {page < pages && page !== 0 && (
          <div onClick={() => setPage(curr => curr - 1)}>prev</div>
        )}
        {resultArr.length !== 0 && <div className="show-page">{page + 1}</div>}
        {pages > page + 1 && (
          <div onClick={() => setPage(curr => curr + 1)}>next</div>
        )}
      </div>
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

const StyledMainContent = styled(MainContent)`
  width: 1500px;
  margin: 50px auto;
  display: flex;

  .left {
    width: 18%;
    display: flex;
    flex-direction: column;
  }

  .right {
    width: 82%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pagination {
    display: flex;
    font-size: 24px;
    font-weight: 300;
    position: fixed;
    bottom: 150px;
    right: 10px;
    div {
      margin: 6px;
      padding: 0 10px;
      color: white;
      border: 2px solid ${props => props.theme.colors.green};
      background-color: ${props => props.theme.colors.green};
      border-radius: 5px;
      box-shadow: 0 1px 2px 2px rgba(50, 50, 50, 0.2);
    }

    .show-page {
      font-weight: 500;
      color: ${props => props.theme.colors.black};
      background-color: ${props => props.theme.colors.backgroundGray};
      border: 1px solid ${props => props.theme.colors.borderGray};
    }
  }
`;

StyledMainContent.displayName = 'MainContent';

export default StyledMainContent;
