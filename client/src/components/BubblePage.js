import React, { useState, useEffect } from "react";
import { axiosAuth } from "./utils/axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const [dependency, setDependency] = useState(false);
  useEffect(() => {
    axiosAuth()
    .get("colors")
    .then( res => {setColorList(res.data); setDependency(false)})
    .catch( err => console.log(err))

  }, [dependency])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setDependency={setDependency}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
