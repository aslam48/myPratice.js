import React, { Component} from "react"
import './App.css'
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
// import FRParentInput from "./components/FRParentInput";
// import Welcome from "./components/welcome"
// import Count from  "./components/Count"
// import Click from "./components/Click"
// import EventBind from "./components/EventBind"
// import ChildComponent from "./components/childComponent"
// import ParentComponent from "./components/ParentComponent"
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Form from './components/Form'
// import RefsDemo from "./components/RefsDemo";
// import LifeCircle from './components/LifeCircle'
// import PureComp from './components/PureComp'
// import Input from './components/Inpt'
// import FocusInput from "./components/FocusInput";




class App extends Component  {
   
  render() {
    return (
      <div className='App'>
        <ClickCounter/>
        <HoverCounter/>
        {/* <FRParentInput/> */}
        {/* <Input/> */}
        {/* <FocusInput/> */}
        {/* <PureComp/> */}
        {/* <LifeCircle/> */}
        {/* <RefsDemo /> */}
        {/* <Form/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <ChildComponent/> */}
        {/* <EventBind/> */}
        {/* <Click /> */}
        {/* <Count /> */}
       {/* <Welcome /> */}
       
      </div>
       );
  }
  }

 
export default App;
