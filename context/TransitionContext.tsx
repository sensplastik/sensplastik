"use client"
import gsap from "gsap"
import React, { createContext,useContext,useState } from "react"

interface TransitionContextProps {
    timeline: gsap.core.Timeline;
    setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  }

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined);

export const TransitionProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  )

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransitionContext = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
      throw new Error('useTransitionContext must be used within a TransitionProvider');
    }
    return context;
  };