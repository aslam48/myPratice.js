import React from "react";
// import Person from './Person'

const NameList = () => {
  const names =[ "aslam", "zekky", "sam"]
  // const persons = [
  //   {
  //     id: 1,
  //     name: "aslam",
  //     age: 34,
  //     skill: "react",
  //   },
  //   {
  //     id: 2,
  //     name: "iliyas",
  //     age: 24,
  //     skill: "angular",
  //   },
  //   {
  //     id: 3,
  //     name: "bay",
  //     age: 12,
  //     skill: "vue",
  //   },
  // ];
  const namelist = names.map((name, index) => <p key={index}>{index} {name}</p>);
  return (
    
      <div>{namelist}</div>
  );
};

export default NameList;
