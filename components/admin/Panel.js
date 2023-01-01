import React from 'react'
import classNames from 'classnames'

function Panel({children, className, ...rest}) {
    const panelClasses = classNames('pl-2 cursor-pointer', className)

  return (
    <div {...rest} className={panelClasses}>{children}</div>
  )
}

export default Panel