import React, { useState, useEffect } from "react";
// import { nanoid } from 'nanoid'
// import { DateTime } from 'luxon'
import { Title } from "./title";
import { Aclions } from "./actions";

export const New = () => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    globalThis.subscribeForTimer.subscribe((_, data) => {
      setTitle(JSON.parse(data).title)
      setTime(JSON.parse(data).time)
      setRunning(true)
    })
  },[])

  const handleStartTimer = () => {
    setRunning(true)
    globalThis.subscribeForTimer.startTimer(title)
  }
  const handleStopTimer = () => {
    // globalThis.inputOutput.save(
    //   {
    //     id: nanoid(),
    //     duration: time,
    //     title: title,
    //     project: 'none',
    //     createdAt: DateTime.local().toISO()
    //   }
    // )
    setRunning(false)
    setTime(0)
    setTitle('')
    globalThis.subscribeForTimer.stopTimer()
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