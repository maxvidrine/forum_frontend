import React from 'react'
import { Input } from 'semantic-ui-react'

export default ({name, label, error, type, ...rest}) => {
  const id = `id_${name}`,
        input_type = type?type:"text"
        
  return (
      <Input type={input_type} name={name} 
            label={label}
             id={id} className={error?"is-invalid":""}
             {...rest} />
  )
}