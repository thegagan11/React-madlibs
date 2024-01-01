### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
Library for building web interface. Usesd to create interactive UIs easily with reusable components.
- What is Babel?
Babel is a tool that translates modern JavaScript into a version compatible with older browsers.
- What is JSX?
JSX is a syntax in React that looks like HTML and is used to describe user interfaces.
- How is a Component created in React?
It's created as a function or a class that returns HTML-like JSX.
- What are some difference between state and props?
State is the internal and changeable data of a componenet. Props are data passed to a component from its parent and can't be changed by the componenet.
- What does "downward data flow" refer to in React?
Data flows from parent componenets to a child componenet through props.
- What is a controlled component?
A controlled component is one where form data is managed by the component's state.
- What is an uncontrolled component?
An uncontrolled component manages its own data without using React's state, often using refs.
- What is the purpose of the `key` prop when rendering a list of components?
"key" prop helps React keep track and update lists efficiently.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
it can leads to bugs and inefficiencies if the order of items changes.
- Describe useEffect.  What use cases is it used for in React components?
it's used for actions not directly linked to rendering, like fetching data or subscriptions.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
it access DOM elements directly. Changing a ref doesn't cause a componenet to render.
- When would you use a ref? When wouldn't you use one?
use it for direct DOM access and not use it for data that should update the UI. 
- What is a custom hook in React? When would you want to write one?
Let's you reuse logic across components. Write one for shared logic without rendering anything.