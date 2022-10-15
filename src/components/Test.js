import React, { useEffect, useMemo, useRef, useState } from "react";

const itemsList = Array(10).fill({
  /** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
  userId: 1,
  title: "quis ut nam facilis et officia qui",
  completed: false,
});

const Test = () => {
  const selectedIndex = useRef(0);
  const activeItemRef = useRef();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {}, [selectedIndex]);

  function handleKeyDown() {
    console.log(selectedIndex);
    selectedIndex.current !== itemsList.length - 1
      ? (selectedIndex.current += 1)
      : (selectedIndex.current = 0);
  }

  function handleClickFocus(event) {
    activeItemRef.current = event.target;
    selectedIndex.current = event.target.tabIndex;
  }

  return (
    <div>
      {itemsList.map(({ userId, title }, index) => {
        return (
          <li
            tabIndex={index}
            data-index={index}
            key={index}
            style={{
              color: index === selectedIndex.current ? "red" : "black",
            }}
            onClick={handleClickFocus}
          >
            {title}
          </li>
        );
      })}
    </div>
  );
};

export default Test;
