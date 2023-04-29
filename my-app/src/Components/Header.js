import React, { useEffect, useState } from 'react'
import {useStarWars} from '../Context/StarWarsContext'


function Header() {
    // page kısmını contextden çekiyoruz
    const {page , setPage , setSearchStarships , searchStarships} = useStarWars();
    console.log(page)
    const handleSubmit = (e) => {
     e.preventDefault();
    }
    const handleChange = (e) => {
      setSearchStarships(e.target.value)
    }
     // 1 e tıkladığımızda 2. sayfanın verilerini getiriyoruz
     const pageOne = () => {
      setPage(1)
  }
    // 2 ye tıkladığımızda 2. sayfanın verilerini getiriyoruz
    const pageTwo = () => {
        setPage(2)
    }
    // 3 e tıkladığımızda 3. sayfanın verilerini getiriyoruz
    const pageThree = () => {
        setPage(3)
    }
    // 4 e tıkladığımızda 4. sayfanın verilerini getiriyoruz
    const pageFour = () => {
        setPage(4)
    }

   
  return (
    <div className='header'>
        <h1 className='headerTxt'>Starships Search </h1>
        <form onSubmit={handleSubmit} className='form'>
            <div>
         <input onChange={handleChange} value={searchStarships} type='search' placeholder='Name/Model'></input>
            </div>
          <div className='PageBtn '>
            <button onClick={pageOne}>1</button>
            <button onClick={pageTwo}>2</button>
            <button onClick={pageThree}>3</button>
            <button onClick={pageFour}>4</button>
          </div>
        </form>
    </div>
  )
}

export default Header