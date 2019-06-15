import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const App = ({className}) => {
  const [data, setData] = useState([])  
  const [fylkeNr, setFylkeNr] = useState('')

  useEffect( () =>{      
    async function fetchData(){
    const response = await fetch('https://data-nsr.udir.no/enheter')
    const result = await response.json()
    setData(result)     
  }
    fetchData()
},[])

  console.log(data,'got '+data.length+' data')

  const filterArr = data.filter( x => fylkeNr.includes(x.FylkeNr))
  console.log(filterArr)

  const filterFylkeNrAmount = data.reduce( (eachData, fylkeNr) => {
    eachData[fylkeNr.FylkeNr] = 0  
   return eachData   },{})

  const getFylkeNr = Object.keys(filterFylkeNrAmount).sort( (a,b) => a-b)
  console.log(getFylkeNr)

  const warning = e =>{
    setFylkeNr( e.target.value); 
    if(fylkeNr<51){
      return null
    }else{
      alert('please enter a number between 01-50');
      setFylkeNr('')}
  }

  return (
    <div className={className}>
    <a name="top"></a>
    <input value={fylkeNr} onChange={ e =>warning(e) } />
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