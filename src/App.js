import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CountyOption from './CountyOption'
import List from './List'


const App = ({className}) => {
  const [data, setData] = useState([])  
  const [county, setCounty] = useState([]) 
  const [select, setSelect] = useState('please select a county')

  useEffect( () =>{      
    async function fetchData(){
    const response = await fetch('https://data-nsr.udir.no/enheter')
    const result = await response.json()
    setData(result)     
  } 
    async function fetchCountyName(){
    const response = await fetch('https://data-nsr.udir.no/fylker')
    const result = await response.json()
    setCounty(result)
  }
    fetchData()
    fetchCountyName()
},[])

  //merge data to have county name in the main data
  const mergeData = data.map( A => {
    const finder = county.find( B => A.FylkeNr === B.Fylkesnr) || {};
    A.Navn = finder.Navn || '';
    return A;
  })
  console.log('got '+mergeData.length+' data')  
  
  
  //get county name as drop-down list
  const filterCountyList = mergeData.reduce( (eachData, countyName) => {
        eachData[countyName.Navn] = countyName.FylkeNr  
  return eachData},[])
  console.log(`county name: ISO-code`, filterCountyList.sort())

  const getCounty = Object.keys(filterCountyList).sort()


  //print out each county's school info
  const resultArr = mergeData.filter( x=> select.includes(x.Navn))
  console.log(resultArr)


  return (
  <div className={className}>
  <a name="top"></a>

    
    <h1 className='show-title'>{select}</h1> 
    <hr/>

    
    <select value={select} onChange={e => setSelect(e.target.value)} >
      <option value='please select a county' disabled>please select a county</option>
      {getCounty.map( (option, idx) => 
      <CountyOption 
      key={idx}
      value={option}
      select={option}         
      />)}
    </select>  
    
    <div className='list-container'>
     {resultArr.map( list =>
     <List
     key={list.OrgNr}
     countyName={list.Navn}
     fullname={list.FulltNavn} 
     email={list.Epost.length ===0 ? 'N/A' : (list.Epost)}
     type={list.Karakteristikk.length ===0 ? 'N/A' : (list.Karakteristikk)}
     publicSchool={list.ErOffentligSkole ? 'Public': 'Private'}
     basic={list.ErGrunnSkole ? 'True' : 'False'}
     />)}
     </div>

  </div>
 )
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)` 
 
.list-container{
  width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}


`

StyledApp.displayName = 'App'

export default StyledApp