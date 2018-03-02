---
path: "/blog/react-at-home/"
date: "2016-05-26T17:12:33.962Z"
title: "React At Home"
type: "blog"
---

This is a tutorial on installing React in a dev environment on my home machine. I really want to get to a point where I am installing this on Virtual Box running a Linux variant but I don't have that kind of time today. I stole all of the code and the idea and explanations from [Mastering React - React Fundamentals: Environment Setup](https://www.youtube.com/watch?v=0BHoz0ptv7k) so visit him and like his video.

### terminal
Go to terminal and get ready to rock out with NPM. Navigate into the folder you want your project to live in with `cd foldername` and then get ready.

```bash
$ npm init
```

Hit return to race through all the project name fields (or enter them as it is not relevant to this tutorial working) and type 'yes' at the end.

```bash
$ npm install react react-dom --save

$ npm install babel webpack webpack-dev-server -g

$ npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

$ touch index.html App.js main.js webpack.config.js
```

Note the -g flag for global install so you only have to install babel and webpack once.

Now open the folder in your IDE of choice.

### codey code code
in the file `webpack.config.js` (that compiles the JS and launch our development server)

```javascript
module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
```

Now we save and open `index.html` to put in our site skeleton and our React entry point.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>React App</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <div id="app"></div>

  <script src="index.js"></script>
</body>

</html>
```

Hit save, and now we open `App.js` to make some components.

```javascript
import React from 'react';
class App extends React.Component {
  render(){
    return <div>Hello, World</div>
  }
}

export default App
```

Save this, and onto `main.js` for some connective tissue between our components and the HTML.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('app'))
```

Save again, and pop on into `package.json` swap out the 'test' key-value pair in 'scripts' to the following:

```json
{
  "name": "react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^15.1.0",
    "react-dom": "^15.1.0"
  }
}
```

### Back to the Terminal
We are ready to fire it up!

```bash
$ npm start
```

If you recall we used 3333 as our port in the `webpack.config.js` and here it is, fired up. On the same machine, go to localhost:3333 and you should see 'Hello, World' which is the message in your `App.js` file. In fact, what is cool about the ol React setup here is that if you go to your App.js file and change the words in the `<div>` and hit save, the site updates automatically without needing a refresh.

When you are sick of your project, Control-C will exit NPM.
