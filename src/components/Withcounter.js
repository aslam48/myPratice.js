import React from "react";


const updatedComponent = originalComponent=> {
    class NewComponet extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          increamentCount = () => {
              this.setState( prevState => {
                  return { count:prevState.count + 1}
              })
          }
          
            render() {
                return (
                     <originalComponent count={this.state.count}  increamentCount={this.increamentCount}/>
                );
            }
    }
return NewComponet

}
export default updatedComponent
