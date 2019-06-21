import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SharedContext } from '../contexts/SharedContext'
import Left from './Left'
import List from './List'

const MainContent = ({className}) => {
  const [data, setData] = useState([])  
  const [county, setCounty] = useState([]) 
  const {select, setSelect} = useContext(SharedContext)
  const {toggle} = useContext(SharedContext)
  const {input} = useContext(SharedContext)

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

  let resultArr
  if(toggle && input.trim().length===0 ){
    resultArr = mergeData
    .filter( x=> x.Navn.includes(select))
    .sort( (a,b)=> (a.FulltNavn.localeCompare(b.FulltNavn)) ) 
  }else if(toggle===false && input.trim().length===0 ){
    resultArr = mergeData
    .filter( x=> x.Navn.includes(select))
    .sort( (a,b)=> (b.FulltNavn.localeCompare(a.FulltNavn)) ) 
  }else if(toggle && input.trim().length>0 ){
    resultArr = mergeData
    .filter( x=> x.Navn.includes(select))
    .filter( x=> x.FulltNavn.toLowerCase().includes(input))
    .sort( (a,b)=> (a.FulltNavn.localeCompare(b.FulltNavn)) )  
  }else{
    resultArr = mergeData
    .filter( x=> x.Navn.includes(select))
    .filter( x=> x.FulltNavn.toLowerCase().includes(input))
    .sort( (a,b)=> (b.FulltNavn.localeCompare(a.FulltNavn)) )   
  }

  //when choose(click) the county name, chaging the filter condition(so triger the resultArr, render the list)
  const handleChange = value =>{ setSelect(value) }

  return (
    <div className={className}>
    <div className='left'>
    {getCounty.map( (option, idx) => 
    <Left
    key={idx}
    value={option}
    select={option}
    handleChange={handleChange}  
    />)}
    </div>
  
    <div className='right'>
    {resultArr.map( list =>
    <List
    key={list.OrgNr}
    id={list.OrgNr}
    countyName={list.Navn}
    fullname={list.FulltNavn} 
    email={list.Epost.length ===0 ? 'N/A' : (list.Epost)}
    character={list.Karakteristikk.length ===0 ? 'N/A' : (list.Karakteristikk)}
    type={list.ErOffentligSkole ? 'Public': 'Private'}
    basic={list.ErGrunnSkole ? 'True' : 'False'}
    />)}
    </div>
  </div>
  )
}

MainContent.propTypes = {
  className: PropTypes.string
}

const StyledMainContent = styled(MainContent)` 
width: 1500px;
margin: 50px auto;
display: flex;

.left{    
width: 18%;  
display: flex;
flex-direction: column;
}

.right{
width: 82%;
display: flex;
justify-content: center;
flex-wrap: wrap;
}

`

StyledMainContent.displayName = 'MainContent'

export default StyledMainContent
