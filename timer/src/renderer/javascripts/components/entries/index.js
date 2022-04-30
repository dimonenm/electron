import React from "react";
import { orderBy } from 'lodash'
import { Item } from './Item'

export const Entries = ({ entries }) => {
  console.log('entries: ', entries);

  return <div className="entries">
    {entries.length === 0 && <div className="empty-state">no entries</div>}
    {entries && orderBy(entries, 'createdAt', 'desc').map(entry =>
      <Item
        key={entry.id}
        title={entry.title}
        duration={entry.duration}
        project={entry.project}
      />
    )}

  </div>
}