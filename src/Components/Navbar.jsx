import React from 'react'
import BatteryLevel from './Navbar_components/BatteryLevel'
import CurrentTime from './Navbar_components/CurrentTime'
import NetworkType from './Navbar_components/NetworkType'

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#f3977a] to-[#ef4876] flex p-2 justify-around">
        <CurrentTime />
        <div className="flex">
            <BatteryLevel />
            <NetworkType />
        </div>
        
    </div>
  )
}

export default Navbar