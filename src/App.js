import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUtensils, faLeaf, faUnlockAlt, faUser, faSearch, faBars, faThumbtack, faHashtag, faAppleAlt, faCube, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Left from './components/Left'
import List from './components/List'

//color
const green = '#00AA50'
const darkGreen = '#00803C'
const borderGray = '#C2C2A3'
const headerWhite = '#FAFAF7'
const black = '#404040'
const backgroundGray = '#F5F5EF'
const footerBlack = '#2D3340'
const footerGray = '#CDCDCD'
 
//font-awesome
const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const fork = <FontAwesomeIcon icon={faUtensils} />
const leaf = <FontAwesomeIcon icon={faLeaf} />
const lock = <FontAwesomeIcon icon={faUnlockAlt} />
const user = <FontAwesomeIcon icon={faUser} />
const search = <FontAwesomeIcon icon={faSearch} />
const bars = <FontAwesomeIcon icon={faBars} />
const location = <FontAwesomeIcon icon={faThumbtack} />
const hashtag = <FontAwesomeIcon icon={faHashtag} />
const appleAlt = <FontAwesomeIcon icon={faAppleAlt} />
const cube = <FontAwesomeIcon icon={faCube} />
const toTop = <FontAwesomeIcon icon={faArrowUp} />

//images
const apple = require('../src/images/apple.png')
const google = require('../src/images/google.png')


const App = ({className}) => {
  const [data, setData] = useState([])  
  const [county, setCounty] = useState([]) 
  const [input, setInput] = useState('')
  const [select, setSelect] = useState('Choose a county from left hand nav bar')

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

  //when choose(click) the county name, chaging the filter condition(so triger the resultArr, render the list)
  const handleChange = value =>{ setSelect(value) }

  return (
  <div className={className}>
  <a name="top"></a> 

    <header>
    <div className='title normal'>{select}</div> 

    <div className='three normal'>

      <a href="https://www.linkedin.com/in/nien-ying-chou-169604186/" target="_blank">
      <div className='underline'>{map} LinkedIn</div></a>
    
      <a href="https://github.com/wolfzxcv" target="_blank">
      <div>{fork} GitHub</div></a>

      <a href="https://codepen.io/nienyingchou/" target="_blank">
      <div>{leaf} CodePen</div></a>  

    </div> 


    <div className='member small'>
      <a href="https://www.youtube.com/user/wolfzxcvb/videos?view_as=subscriber" target="_blank">
      <div>{lock}<span>Logg  inn</span></div></a>
      <a href="https://www.youtube.com/user/naomichou/videos?view_as=subscriber" target="_blank">
      <div>{user}<span>Bli  Norge  PLUSS-kunde</span></div></a>
    </div>
    
    <div className='green normal'>
      <a href="https://www.facebook.com/wolfzxcv" target="_blank">
      <div>{search}</div></a>
      <a href="https://www.instagram.com/nienyingchou/" target="_blank">
      <div>{bars}</div></a>
    </div>

    </header>

    <div className='search'>

      <div>
      <input type="text" value={input} 
             placeholder='Skolens navn'
             onChange={ e=> {setInput(e.target.value)} }
      />
      <div>SØK</div>
      </div>  
    </div>

    <div className='fake-button'>
      <div className='button1'>ALLE BUTIKKER</div>
      <div className='button'>SØNDAGSÅPNE BUTIKKER</div>
      <div className='button'>KVELDSÅPNE TIL 23:00</div>
      <div className='button4'>{location}MIN POSISJON</div>
    </div>

    <div className='content-left-right'>
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

 
    <div className='jobbe'><u>Interessert i å jobbe i Norge? Se våre ledige stillinger <b>her</b>.</u></div>

    <footer>
      <div className='footer'>
        <div>
          <div className='footer-title'>Norge</div>
          <div className='om-norge'>
            <div>Om Norge>></div>
            <div>Like Norge>></div>
            <div>Reise til Norge>></div>
            <div>Bo i Norge>></div>
            <div>Fordi norge er verdig vakkert>></div>
          </div>
        </div>

        <div>
          <div className='footer-title'>Kontakt oss</div>
            <div className='kontakt'>
              <p>Lorem ipsum dolor</p>
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor</p>
              <p>Telefon: <span>12345678</span></p>  
            </div>
            <div className='kontakt'>
              <p>Lorem ipsum Norge</p>
              <p>1234 Lorem</p>
              <p>Postboks 567</p>
              <p>Telefon: <span>12345678</span></p>  
            </div>
            <div className='kontakt-oss'>
              Kontakt oss>>
            </div> 
        </div>

        <div>
          <div className='footer-title'>Norge liker deg app</div>
            <div className='app-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Libero fugiat Aperiam impedit velit odit!
            </div>  
            <div className='apple'><img src={apple} alt='apple' /></div>
            <div className='google'><img src={google} alt='google' /></div>          
        </div>

        <div>
          <div className='footer-title'>Følg oss</div>
          <div className='follow'>Følg oss på sosiale medier!</div>
          <div className='icon'>
            <div>{hashtag}</div>
            <div>{appleAlt}</div>
            <div>{cube}</div>
          </div>
        </div>
  
      </div> 
    </footer>
    <div className='toTop'><a href="#top">{toTop}</a></div>
  </div>
 )
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)` 
font-family: sans-serif;
a{
  text-decoration: none;
  color: inherit;
}

header{
  width: 100vw;
  height: 79px;
  display: flex;
  flex: 1;
  color: ${black};
  font-weight: 100;
  border-bottom: 1px solid ${borderGray};

    .title{
      background-color: ${headerWhite};
      width: 340px;
      padding: 0 20px;
      font-size: 22px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      &:hover{
        color: ${green};
        cursor: pointer;
      }        
    }
  
    .three{
      background-color: ${headerWhite};
      display: flex;
      justify-content: space-evenly;
      flex: 1;
      font-size: 16px;
      letter-spacing: 1px;
      &:hover{
        cursor: pointer;
      }
       
      .underline{
        color: ${green};
        border-bottom: 5px solid ${green};
      }  

      div{
        display: flex;
        align-items: center;
        width: 140px;
        height: 100%;
        margin-right: 20px;
        &:hover{
        color: ${green};
        border-bottom: 5px solid ${green};
        }
      }  
    }

    .member{
      background-color: ${headerWhite};
      width: 210px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
      border-left: 1px solid #C2C2A3;
      padding-left: 10px;
      font-size: 14px;
      span{
        margin-left: 5px;
      &:hover{
        color: ${green};
        text-decoration: underline;
        cursor: pointer;
      }  
      }
    }
 
    .green{
      display: flex;
      flex: 1;      
      background-color: ${green};
      div{
        display: flex;
        justify-content: center;
        align-items: center;      
        font-size: 24px;
        color: white;
        width: 80px;
        height: 79px;
        &:hover{
        background-color: ${darkGreen};
        cursor: pointer;
        }
      }
    }

    .normal{
      flex-grow: 7;
      flex-shrink: 1;
      flex-basis: 0%;
    }

    .small{
      flex-grow: 4;
      flex-shrink: 1;
      flex-basis: 0%;
    }
}
 
.search{
  margin: 30px;
  height: 60px;
  display: flex;

  div{
    width: 1170px;
    margin: 0 auto;
    display: flex;  
    justify-content: center;

    input{
      width: 1100px;
      height: 50px;
      font-size: 20px;
      border: 1px solid ${borderGray};
      padding-left: 18px;
    }
    div{
      width: 80px;
      height: 50px;
      background-color: ${backgroundGray};
      border: 1px solid ${borderGray};
      font-weight: 600;
      color: ${black};
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
    }
  } 
}

.fake-button{
  width: 1200px;
  display:flex;
  justify-content: space-around;
  margin: 0 auto;
  &:hover{
    cursor: pointer;
  }

  div{
    width: 270px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 14px;
  }

  .button1{
    color: white;
    border: 2px solid ${green}; 
    background-color: ${green};
  }

  .button{
    color: ${green}; 
    border: 2px solid ${green}; 
    &:hover{
      color: white;
      background-color: ${green};      
    }
  }

  .button4{
    color: ${black}; 
    background-color: ${backgroundGray};
    border: 1px solid ${borderGray}; 
  }
}

.content-left-right{
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
}

.jobbe{
  width: 100%;
  height: 100px;
  background-color: ${green};
  color: ${footerBlack};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer{
  width: 100%;
  height: 448px;
  color: ${footerGray};
  background-color: ${footerBlack};

  .footer{
    width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    display: flex;


    div{
      width: 300px;
    }

    .footer-title{
      padding-left: 10px;
      padding-bottom: 8px;
      margin-bottom: 20px;
      width: 240px;
      font-size: 20px;
      border-bottom: 1px solid ${footerGray};
    }

    .om-norge{
      div{
        padding-left: 10px;
        margin: 20px 0 5px 0;
        height: 30px;
        color: ${green};
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .kontakt{
        padding: 10px 0;
      p{
        margin: 5px 0;
        padding-left: 10px;
      }
      span{
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
    } 
    
    .kontakt-oss{
      padding: 10px 0 10px 10px;
      color: ${green};
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }  
    }

    .app-text{
      padding: 5px 0 10px 10px;
      line-height: 2.0;
    }

    .apple,.google{
      padding: 5px 0 0 10px;
      height: 45px;
      img{
        height: 90%;
        width: auto;
        border-radius: 10px;
        &:hover{
          cursor: pointer;
        }
      } 
    }

    .follow{
      margin-top: 20px;
      padding: 10px 0 10px 10px;
    }

    .icon{
      display: flex;
      padding: 10px 0 10px 10px;
      height: 300px;

      div{
      margin: 20px 25px 0 0;
      font-size: 30px;
      width: 30px;
      height: 30px; 
        &:hover{
          color: ${backgroundGray};
          cursor: pointer;
        }
      }
    }
  }
}

.toTop{
  font-size: 48px;
  color: ${green};
  font-weight: 700;
  position: fixed;
  bottom: 50px;
  right: 50px;
  a{
    text-decoration: none;
    color: inherit;
  }
}

`

StyledApp.displayName = 'App'

export default StyledApp