/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
  /** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
  title: "quis ut nam facilis et officia qui",
});

export const ListItemsForNavigation = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const activeItemRef = useRef();

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (
      event.keyCode === 39 ||
      (event.keyCode === 40 && selectedIndex !== itemsList.length - 1)
    ) {
      event.target.nextElementSibling?.focus();
      return;
    }
    if (event.keyCode === 37 || (event.keyCode === 38 && selectedIndex !== 0)) {
      activeItemRef.current = event.target.previousElementSibling?.focus();
      return;
    }
    // Add the proper logic to calculate the index that correspond to the item that should be focused.
  };

  const handleBlur = (event) => {
    event.preventDefault();
    setSelectedIndex(-1);
  };
  const handleFocus = (event) => {
    event.preventDefault();
    setSelectedIndex(parseInt(event.target.dataset.index));
  };
  const handleClick = (event) => {
    event.preventDefault();
    event.target.focus();
    setSelectedIndex(parseInt(event.target.dataset.index));
  };

  return (
    <ul ref={activeItemRef} onBlur={handleBlur} onKeyDown={handleKeyDown}>
      {/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
      {/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
      {/** Do not forget to pass the reference to the selected item */}
      {itemsList.map((item, index) => {
        return (
          <li
            tabIndex={0}
            key={index}
            style={index === selectedIndex ? { color: "red" } : null}
            onClick={(e) => handleClick(e)}
            onFocus={handleFocus}
            data-index={index}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};
