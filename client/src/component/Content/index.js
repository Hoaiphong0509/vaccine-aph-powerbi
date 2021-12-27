import React from 'react'
import Ahp from './AHP'
import PowerBi from './PowerBi'

import s from './styles.module.scss'

export default function Content() {
  return (
    <div className={s.root}>
      <PowerBi className={s.powerBi} />
      <Ahp />
    </div>
  )
}
