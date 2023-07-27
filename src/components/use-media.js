import { useEffect, useState } from "react";

//alternate hook that accepts a single query
export default function useMedia(queries, values, defaultValue) {
  // state and setter for matched value
  const [value, setValue] = useState(defaultValue);

  //array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  //state update function
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);

    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  useEffect(
    () => {
      //set the initial value
      setValue(getValue);

      const handler = () => setValue(getValue);

      mediaQueryLists.forEach(mql => mql.addListener(handler));

      //remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [] //empty array ensures effect is only run on mount and unmount
  );

  return value;
}
