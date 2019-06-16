import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CountyOption from './CountyOption'


const App = ({className}) => {
  const [data, setData] = useState([])  
  const [county, setCounty] = useState([]) 
  const [select, setSelect] = useState('')

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


  const mergeData = data.map( A => {
    const finder = county.find( B => A.FylkeNr === B.Fylkesnr) || {};
    A.Navn = finder.Navn || '';
    return A;
  })
  console.log(mergeData,'got '+mergeData.length+' data')  
    

  const filterCountyList = mergeData.reduce( (eachData, countyName) => {
        eachData[countyName.Navn] = countyName.FylkeNr  
  return eachData},[])
  console.log(`county name: ISO-code`, filterCountyList.sort())

  
  const getCounty = Object.keys(filterCountyList).sort()


  return (
  <div className={className}>
  <a name="top"></a>

    <select value={select} onChange={e => setSelect(e.target.value)} >
      <option value='please select a county' disabled>please select a county</option>
      {getCounty.map( (option, idx) => 
      <CountyOption 
      key={idx}
      value={option}
      select={option}         
      />)}
    </select>  
  </div>
 )
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)` 
`

StyledApp.displayName = 'App'

export default StyledApp