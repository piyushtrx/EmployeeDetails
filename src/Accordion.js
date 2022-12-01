import React, { useState } from "react";
import { api } from "./api";
import BasicExample from "./BasicExample";
const Accordion = () => {
  const [data, setData] = useState(api);
  return (
    <>
      {data.map((element) => {
        return <BasicExample key={element.id} {...element} />;
      })}
    </>
  );
};
export default Accordion;
