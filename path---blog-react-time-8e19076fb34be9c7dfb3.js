webpackJsonp([70015641310667],{600:function(e,t){e.exports={data:{markdownRemark:{html:"<p>I started to love Angular a little. I loved the ease of use, I loved the native-app-like feel. It hurts me to leave, after everything we went through. I still want to continue learning Angular and want to even do an additional Bloc project or my own project in Angular, perhaps, to stay sharp.</p>\n<p>But I want to work on Game Tree, and I want to learn more frameworks (technically React is a library not a framework but it smells like a framework).</p>\n<h1>REACT</h1>\n<p>React is small and does one thing really well - the User Interface.</p>\n<p>It is made of Components. Components take two inputs - state and properties. And then Components output HTML. State and Properties. State can be changed. Components can change the state. A change in state triggers a re-render made by the component that owns that state. Properties do not change.</p>\n<h2>JSX</h2>\n<p>JSX is a special syntax that allows us to write to a virtual DOM. React simply compiles JSX to plain vanilla JavaScript. When React makes changes to the DOM, it does so in the virtual DOM which is faster than the browser DOM. It also, when compiling to the browser DOM, only makes the delta changes to JS instead of rewriting all of the JS. This results in a very fast experience.</p>\n<h2>React Components</h2>\n<p>We can use Plunker <a href=\"plnkr.co\">plnkr.co</a> to play with React or any live code without building our own development environment.</p>\n<p>First we want to grab the address for the CDN so we can use React in our Plunker exercise. <a href=\"https://facebook.github.io/react/downloads.html\">Visit this Facebook page to download</a>.</p>\n<p>Once we have added the new <code>&#x3C;script></code> tag with the CDN address to the <code>&#x3C;body></code> in the Plunker index file, want to rename the .js files as .jsx, making sure we move the existing script tag below the React tag. Keep the src name as .js though.</p>\n<p>Now, with Angular, we used an <code>ng-app</code> attribute in the body to tie the DOM to Angular. With React, we instead can add a <code>&#x3C;div id=\"root\">&#x3C;/div></code> to the top of the body. This is the <strong>MOUNT NODE</strong>, the element where React is going to take control. I imagine we can use any DOM element that pleases us.</p>\n<p><code>React.createClass' is a method that has a single requirement -</code>render: function() { return (<someElement>)}<code>. We can then call this as:</code>React.render(<someElement>, document.getElementById('root'));` Voila, the element should now be on your HTML page.</p>\n<p>We can use <code>getInitialState</code> as a function to set an initial value for an element. We can pull out this value with curlies, so <code>{this.state.variableName}</code> performs string interpolation for you.</p>\n<p>If we want to have an action impact our element, we can use normalized event names, similar to Angular. We can create a function inside the definition, and assign the function to an event handler in the element (using the <code>{this.functionName}</code> notation).</p>\n<p>More advanced configurations can have layers of functions, which allows for centralization and reuse of functions for DRYness and for some functions to 'do one thing' in terms of elements while the logic resides in a parent function. Keep in mind that when state and property variables are passed down to child functions, we need to refer to those variables, at the child level, as <code>this.state.varName</code> and <code>this.prop.otherVarName</code> while at a parent level, these are merely defined as this.</p>\n<p><code>React.render(&#x3C;someElement />, document.getElementById('root'));</code> is the glue - this is the command that attaches all your React code to the DOM.</p>\n<h3>Summary</h3>\n<p>Plunker is great way to test React.</p>\n<p>Components are for lack of better terms are DOM functions in React. React components take this.props and this.state.  State can be changed, and props can not.</p>\n<p>React uses JSX syntax to describe the virtual DOM, in which we use JavaScript.</p>\n<p>Create React components with: <code>React.createClass({render: function() {} })</code></p>\n<p>Mount a React component with <code>React.render({ &#x3C;>, mountNode })</code></p>\n<p>React Events are 'normalized events' that are browser neutral and reminiscent of standard onEvent syntax (onClick, onChange) we use in JavaScript.</p>",frontmatter:{date:"May 11, 2016",path:"/blog/react-time/",title:"React Time",type:"blog"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-react-time-8e19076fb34be9c7dfb3.js.map