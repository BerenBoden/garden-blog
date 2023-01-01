import React from 'react'
import classnames from 'classnames'


function Button({children, primary, secondary, success, warning, danger, outline, dashed, rounded, ...rest}) {
  const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-red-500 bg-red-500 text-blue': secondary,
    'border-green-500 bg-green-500 text-orange': success,
    'border-grey-500 bg-grey-500 text-black': warning,
    'border-orange-500 bg-orange-500 text-grey': danger,
    'border-purple-500 bg-purple-500 text-white': outline,
    'border-dashed border-gray-300 bg-white text-black': dashed,
    'rounded': rounded,
  });

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger, outline, rounded}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
    if(count > 1){
      return new Error('Only one of primary, secondary, success, warning, danger can be true')
    }
  }
}

export default Button