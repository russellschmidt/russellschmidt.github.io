---
path: "/blog/react-time/"
date: "2016-05-11T17:12:33.962Z"
title: "React Time"
type: "blog"
---

I started to love Angular a little. I loved the ease of use, I loved the native-app-like feel. It hurts me to leave, after everything we went through. I still want to continue learning Angular and want to even do an additional Bloc project or my own project in Angular, perhaps, to stay sharp.

But I want to work on Game Tree, and I want to learn more frameworks (technically React is a library not a framework but it smells like a framework).

# REACT
React is small and does one thing really well - the User Interface.

It is made of Components. Components take two inputs - state and properties. And then Components output HTML. State and Properties. State can be changed. Components can change the state. A change in state triggers a re-render made by the component that owns that state. Properties do not change.

## JSX
JSX is a special syntax that allows us to write to a virtual DOM. React simply compiles JSX to plain vanilla JavaScript. When React makes changes to the DOM, it does so in the virtual DOM which is faster than the browser DOM. It also, when compiling to the browser DOM, only makes the delta changes to JS instead of rewriting all of the JS. This results in a very fast experience.

## React Components
We can use Plunker [plnkr.co](plnkr.co) to play with React or any live code without building our own development environment.

First we want to grab the address for the CDN so we can use React in our Plunker exercise. [Visit this Facebook page to download](https://facebook.github.io/react/downloads.html).

Once we have added the new `<script>` tag with the CDN address to the `<body>` in the Plunker index file, want to rename the .js files as .jsx, making sure we move the existing script tag below the React tag. Keep the src name as .js though.

Now, with Angular, we used an `ng-app` attribute in the body to tie the DOM to Angular. With React, we instead can add a `<div id="root"></div>` to the top of the body. This is the **MOUNT NODE**, the element where React is going to take control. I imagine we can use any DOM element that pleases us.

`React.createClass' is a method that has a single requirement - `render: function() { return (<someElement>)}`. We can then call this as: `React.render(<someElement>, document.getElementById('root'));` Voila, the element should now be on your HTML page.

We can use `getInitialState` as a function to set an initial value for an element. We can pull out this value with curlies, so `{this.state.variableName}` performs string interpolation for you.

If we want to have an action impact our element, we can use normalized event names, similar to Angular. We can create a function inside the definition, and assign the function to an event handler in the element (using the `{this.functionName}` notation).

More advanced configurations can have layers of functions, which allows for centralization and reuse of functions for DRYness and for some functions to 'do one thing' in terms of elements while the logic resides in a parent function. Keep in mind that when state and property variables are passed down to child functions, we need to refer to those variables, at the child level, as `this.state.varName` and `this.prop.otherVarName` while at a parent level, these are merely defined as this.

`React.render(<someElement />, document.getElementById('root'));` is the glue - this is the command that attaches all your React code to the DOM.

### Summary
Plunker is great way to test React.

Components are for lack of better terms are DOM functions in React. React components take this.props and this.state.  State can be changed, and props can not.

React uses JSX syntax to describe the virtual DOM, in which we use JavaScript.

Create React components with: `React.createClass({render: function() {} })`

Mount a React component with `React.render({ <>, mountNode })`

React Events are 'normalized events' that are browser neutral and reminiscent of standard onEvent syntax (onClick, onChange) we use in JavaScript.
