import React, { useState, useEffect } from "react";

import { Title } from "./title";
import { Aclions } from "./actions";

export const New = () => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    globalThis.subscribeForTimer.subscribe((_, data) => {
      setTime(JSON.parse(data).time)
      setRunning(true)
    })
  },[])

  const handleStartTimer = () => {
    setRunning(true)
  }
  const handleStopTimer = () => {
    setRunning(false)
  }

  return (
    <div className="new-entry">
      <Title title={title} onChange={ (val) => { setTitle(val)}}/>
      <Aclions
        disabled={title === ''}
        duration={time}
        running={running}
        onStartTimer={handleStartTimer}
        onStopTimer={handleStopTimer}
      />
    </div>
  )
}