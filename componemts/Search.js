import style from './Search.module.css'
import { useContext,useState,useEffect } from 'react'
import { Context } from '@/context/ContextProvider'
import CheckBox from './CheckBox'
import {Checkbox} from '@mui/material'

function Search(props) {
  const Ctx = useContext(Context)
  const [city,setCity] = useState('台北市')
  const [searchStation,setSearchStation] = useState('')
  const areas = {
    '台北市':['松山區','信義區','大安區','中山區','中正區','大同區','萬華區','文山區','南港區','內湖區','士林區','北投區'],
    '高雄市':['高雄區'],
    '新北市':['新北區'],
    '新竹市':['新竹區'],
    '台中市':['台中區'],
    '台南市':['台南區'],
  }

  function selectHandler(event) {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    Ctx.setSelectedArea(areas[selectedCity]);
  }

  function searchHandler(event) {
    const inputValue = event.target.value;

    if (inputValue === '') {
      setSearchStation([]);
      return;
    }

    const searchResult = props.data.filter((station) => {
      return station.sna.includes(inputValue)
    })

    const searchStationOutcome = props.data.filter((station) => {
      return station.sna.includes(inputValue)
    })
    console.log(searchStationOutcome)
    
    setSearchStation(searchStationOutcome)
    Ctx.setFilteredData(searchResult)
    console.log(Ctx.filteredData)
  }

  function searchOutcomePickHandler(stationName) {
    const searchResult = props.data.filter((station) => {
      return station.sna == stationName
    })
    Ctx.setFilteredData(searchResult)
  }


  function clickHander() {
    if (Ctx.allIsActive) {
      Ctx.setallIsActive(false)
      Ctx.setSelectedArea([])
    } else {
      Ctx.setallIsActive(true)
      Ctx.setSelectedArea(areas[city])
    }
  }
  console.log(Ctx.selectedArea)

  return (
    <>
    <h1 className={style.searchTitleStyle}>站點資訊</h1>

    <section className={style.searchSectionStyle}>
    <>
    <select className={style.searchSelectStyle} value={city} onChange={selectHandler}>
      <option value='台北市'>台北市</option>
      <option value='新北市'>新北市</option>
      <option value='新竹市'>新竹市</option>
      <option value='台中市'>台中市</option>
      <option value='台南市'>台南市</option>
      <option value='高雄市'>高雄市</option>
    </select>
    </>

    <div className={style.searchInput}>
    <input className={style.searchInputStyle} type='text' placeholder='搜尋站點' onChange={searchHandler}/>
    {searchStation.length !==0 ? 
    <div className={style.searchStationOutcomeStyle}>
    {searchStation.map((station) => {
      return <div className={style.searchStationOutcomeListStyle} onClick={() => searchOutcomePickHandler(station.sna)}>{station.sna}</div>
    }) 
    }</div>
    : null}
    </div>

    </section>

    <section style={{display:'flex'}}>
      <div>
        <Checkbox
          onChange={clickHander}
          checked={Ctx.allIsActive}
          sx={{
            color: '#b5cc22',
            '&.Mui-checked': {
              color: '#b5cc22',
            },
          }}
        />
        <span>全部勾選</span>
        <div className={style.searchSelectAreasStyle}>
          {areas[city].map((area) => <CheckBox name={area} allIsActive={Ctx.allIsActive}/>)}
        </div>
      </div>
      <img
        src='https://imgur.com/JeRjaEM.jpg'
        style={{width:'502px',height:'172px'}}
      />
    </section>


    </>
  )
} 

export default Search