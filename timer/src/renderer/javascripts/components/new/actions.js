import React from "react";
import classnames from 'classnames'
import PlayIcon from 'play.svg'
import StopIcon from 'stop.svg'

export const Aclions = ({ disabled, duration, running, onStartTimer, onStopTimer }) => {

  const onClick = () => {
    if (disabled) return
    running ? onStopTimer() : onStartTimer()
  }

  return (
    <div className="actions">
      <div className="time">{duration}</div>
      <div
        className={classnames('trigger', { disabled })}
        onClick={onClick}
      >
        {running ? <StopIcon width="24" height="24" /> : <PlayIcon width="24" height="24" />}
      </div>
    </div>
  )
}