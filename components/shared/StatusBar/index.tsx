'use client'
import './StatusBar.scss'

import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'

export function StatusBar() {
  const [parisTime, setParisTime] = useState('')
  const [screenResolution, setScreenResolution] = useState({
    width: 0,
    height: 0,
  })
  const [osName, setOsName] = useState('')

  useEffect(() => {
    const getCurrentTimeInParis = () => {
      const parisTimeZone = 'Europe/Paris'
      const now = moment().tz(parisTimeZone).format('HH:mm A')
      setParisTime(now)
    }

    getCurrentTimeInParis()

    // Update time every minute
    const interval = setInterval(getCurrentTimeInParis, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const getScreenResolution = () => {
      const screenWidth = window.screen.width
      const screenHeight = window.screen.height
      return { width: screenWidth, height: screenHeight }
    }

    const handleResize = () => {
      setScreenResolution(getScreenResolution())
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const getOSName = () => {
      const userAgent = window.navigator.userAgent
      let osName = 'Unknown OS'

      if (userAgent.indexOf('Win') !== -1) {
        osName = 'Windows'
      } else if (userAgent.indexOf('Mac') !== -1) {
        osName = 'MacOS'
      } else if (userAgent.indexOf('Linux') !== -1) {
        osName = 'Linux'
      } else if (userAgent.indexOf('Android') !== -1) {
        osName = 'Android'
      } else if (userAgent.indexOf('iOS') !== -1) {
        osName = 'iOS'
      }

      return osName
    }

    setOsName(getOSName())
  }, [])

  return (
    <div className="status-bar">
      {/* Paris time */}
      <div className="status-bar__time">Paris. {parisTime}</div>
      {/* Dark mode button */}
      <div className="status-bar__dark-mode-label">Dark Mode</div>
      <div className="status-bar__dark-mode-toggle">[ON]</div>
      {/* OSName & Resolution */}
      {osName && screenResolution.width && screenResolution.height && (
        <div className="status-bar__os">
          {osName}, {screenResolution.width}x{screenResolution.height}
        </div>
      )}
    </div>
  )
}
