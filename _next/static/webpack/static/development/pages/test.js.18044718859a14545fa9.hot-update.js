webpackHotUpdate("static/development/pages/test.js",{

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<MainGrid>\n\n<HeaderTitle>\n  \n# My Portfolio Website  w/ Next.js & TypeScript\n<TitleAction href=\"https://github.com/stefanosAgelastos/stefanosAgelastos.github.io\" label=\"Go to github repo\" />\n  \n<TitleAction href=\"https://www.stefworks.ml\" disabled label=\"This is the demo\" />\n</HeaderTitle>\n\n<InfoGrid>\n\n<InfoPaper>\n\n## About the project\nThis project is about my personal portfolio at www.stefworks.ml. The webpage is statically exported and hosted for free on Github pages.\nBehind the scenes the site is fetching for each of my projects the markdown content of the README.md from github and displays a user friendlier layout, using custom themed Material UI components.\n\nThe site doesnt run on a server. On the contrary it takes advantage of fast static hosting, and seamless page to page navigation because of Next.js & React.\n\n</InfoPaper>\n\n<InfoPaper>\n<MyChip label=\"Typescript\"/>\n<MyChip label=\"Javascript\"/>\n<MyChip label=\"Next.js\"/>\n<MyChip label=\"React 16.9\"/>\n<MyChip label=\"Material-UI\"/>\n<MyChip label=\"CSS-in-JS\"/>\n<MyChip label=\"CSS\"/>\n<MyChip label=\"HTML\"/>\n<MyChip label=\"Markdown-to-jsx\"/>\n<MyChip label=\"SSR\"/>\n<MyChip label=\"Github API\"/>\n<MyChip label=\"Github Pages\"/>\n<MyChip label=\"Design Thinking\"/>\n</InfoPaper>\n\n</InfoGrid>\n\n<PanelGrid>\n<Panel id=\"1\" heading=\"What?\" secondaryHeading=\"About the technologies I used\" >\n\n### The Stack:\n- Typescript\n- Next.js\n- React 16.9\n- Webpack\n- Markdown-to-JSX\n- Css-in-JS\n- Material-UI\n</Panel>\n\n<Panel id=\"2\" heading=\"Why?\" secondaryHeading=\"About the choice of technologies\" >\n\n### Argumenting the stack\nI coded this website in order to have a personal portfolio where I could show details about my projects, and also to do it in a way that displays my current skill's level. **My goal was to have a website that loads fast and feels fluid.** I also had a few more requirements:\n\n- I needed a link for each of my projects that I could share e.g. in my CV. Aka [deep-linking.](https://en.wikipedia.org/wiki/Deep_linking)\n- Responsive and User Friendly Design.\n- No server costs and hassle.\n- I also wanted to evolve my skills on the super popular React framework and to experiment with Typescript.\n\nI chose [Next.js](https://github.com/zeit/next.js) as a framework (which kind of wraps around React), because I wanted to combine traits typical to Single Page Applications, like automatic code-splitting, dynamic imports, and page prefetching, and also to be able to export to static files so that I can host it cheap and serve it fast at the same time.\n\nRegarding the UI component library, I chose Material UI because, well it's based on solid and recongnisable design principles, it has great documentstion, supports Typescript development and is pretty easy to use and customise.\n \n</Panel>\n\n<Panel id=\"3\" heading=\"How?\" secondaryHeading=\"About my process\" >\n\n### Here there should be a \"diary\" of my process\n\n</Panel>\n\n<Panel id=\"4\" heading=\"For Devs\" secondaryHeading=\"Clone and install\" >\n\n## How to use\n\nDownload or clone the repo\n\n```sh\ngit clone https://github.com/stefanosAgelastos/stefanosAgelastos.github.io\ncd stefanosAgelastos.github.io\n```\n\nInstall it and run:\n\n```sh\nnpm install\nnpm run dev\n```  \n\n</Panel>\n\n<Panel id=\"5\" heading=\"For Devs\" secondaryHeading=\"Make your own version of this site\" >\n\n## Getting Started\n\nThese instructions here should be explaining which parts of the code you should change in display to host your own projects in development and production. WILL UPDATE SOON.\n\n### Prerequisites\n\n**Note : npm6** is required to install dependencies properly.\n\n## Available Commands\n\n1. `npm run dev` - starts the development server with hot reloading enabled\n\n2. `npm run build` - [builds](https://nextjs.org/docs#production-deployment) for production ahead of time\n\n3. `npm run start` - starts the production server\n\n4. `npm run export` - [exports the website as static files](https://nextjs.org/docs#static-html-export)\n\n5. `npm run serve` - serves the static files on localhost (you need [serve](https://www.npmjs.com/package/serve) installed)\n\n6. `npm run publish` - for pushing code to github pages branch: runs a series of commands, that keep in /out your CNAME and .nojekyl files and pushes /out as a subtree to your master branch\n\n7. `npm run fast` - runs `build & export & publish` in a sequence for fast deployment to github pages\n\n</Panel>\n<Panel id=\"6\" heading=\"For Devs\" secondaryHeading=\"Model, Webpack, Server, Client\" >\n\n## File Structure\n\n### Model\nThis is the data structure of the location objects.\n```\nlocation: {\n        author,\n        title,\n        lon,\n        lat,\n        images: [\n          { id, image_title, image_url }\n        ]\n      },\n```\n\n### Webpack Configs\n\nMERN uses Webpack for bundling modules. There are four types of Webpack configs provided `webpack.config.dev.js` (for development), `webpack.config.prod.js` (for production), `webpack.config.server.js` (for bundling server in production) and `webpack.config.babel.js` (for [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) for server rendering of assets included through webpack).\n\nThe Webpack configuration is minimal and beginner-friendly. You can customise and add more features to it for production build.\n\n### Server\n\nMERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.\n\nIf NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.\n\n#### Server Side Rendering\n\nWe use React Router's match function for handling all page requests so that browser history works.\n\nAll the routes are defined in `client/routes.js`. React Router renders components according to route requested.\n\n### Client\n\nClient directory contains all the shared components, routes, modules.\n\n#### components\nThis folder contains all the common components which are used throughout the project.\n\n#### index.js\nIndex.js simply does client side rendering using the data provided from `window.__INITIAL_STATE__`.\n\n#### modules\nModules are the way of organising different domain-specific modules in the project. A typical module contains the following\n```\n.\n└── Location\n    ├── __tests__                    // all the tests for this module goes here\n    |   ├── components               // Sub components of this module\n    |   |   ├── Location.spec.js\n    |   |   ├── LocationList.spec.js\n    |   |   ├── LocationItem.spec.js\n    |   |   └── LocationImage.spec.js\n    |   ├── pages\n    |   |   ├── LocationPage.spec.js\n    |   |   └── LocationViewPage.spec.js\n    |   ├── LocationReducer.spec.js\n    |   └── LocationActions.spec.js\n    ├── components                   // Sub components of this module\n    |   ├── Location.js\n    |   ├── LocationList.js\n    |   ├── LocationItem.js\n    |   └── LocationImage.js\n    ├── pages                        // React Router Pages from this module\n    |   ├── LocationPage\n    |   |   ├── LocationPage.js\n    |   |   └── LocationPage.css\n    |   └── LocationViewPage\n    |       ├── LocationViewPage.js\n    |       └── LocationViewPage.css\n    ├── LocationReducer.js\n    └── LocationActions.js\n```\n\n \n</Panel>\n<Panel id=\"7\" heading=\"For Devs\" secondaryHeading=\"You are ready to go\" >\n\n## Misc\n\n### Importing Assets\nAssets can be kept where you want and can be imported into your js files or css files. Those fill be served by webpack in development mode and copied to the dist folder during production.\n\n### ES6 support\nWe use babel to transpile code in both server and client with `stage-0` plugin. So, you can use both ES6 and experimental ES7 features.\n\n### Docker\nThere are docker configurations for both development and production.\n\nTo run docker for development:\n```sh\ndocker-compose build # re-run after changing dependencies\ndocker-compose up\n```\nor, if you want to override the web port:\n```sh\nWEB_PORT=<your_custom_port> docker-compose up\n```\n\nTo run docker for production:\n```sh\ndocker-compose -f docker-compose-production.yml up --build\n```\n\nTo reset the database:\n```sh\ndocker-compose down --volumes\n```\n\n## License\nMERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).\n</Panel>\n\n</PanelGrid>\n\n\n</MainGrid>"

/***/ })

})
//# sourceMappingURL=test.js.18044718859a14545fa9.hot-update.js.map