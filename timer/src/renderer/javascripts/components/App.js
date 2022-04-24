import React from "react";

import { New } from './new'
import { Entries } from './entries'

export const App = ({ entries }) => {
  console.log('App', entries);
  return (
    <>
      <New />
      <Entries />
    </>
  )
}