
import {  Badge, Button, CheckBox, Icon, SelectInput, Switchbox } from "../styles/components"

const Test = () => {
  return (
    <div>
       <SelectInput  block  options={
        [
          {
            option : "nathan"
          }
        ]
       } /> 

       <Button>Click</Button>
       <Icon />
       <Switchbox/>
    </div>
  )
}

export default Test
 