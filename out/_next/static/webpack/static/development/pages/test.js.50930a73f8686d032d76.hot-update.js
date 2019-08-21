webpackHotUpdate("static/development/pages/test.js",{

/***/ "./static/test.md":
/*!************************!*\
  !*** ./static/test.md ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<MainGrid>\n\n<HeaderTitle>\n  \n# AR Tourist Guide Prototype\n<TitleAction href=\"https://github.com/stefanosAgelastos/mern-admin-app-for-android-AR-app\" label=\"Go to github repo\" />\n  \n<TitleAction href=\"https://ar.stefworks.ml\" disabled label=\"Go to demo\" />\n</HeaderTitle>\n\n<InfoGrid>\n\n<InfoPaper>\n\n## About the project\nThis is a product development project, purposed to assist Tour guides with Augmented Reality.\nThe system was developed in two phases. It started in October 2019 as an internship project for [KøbenhavnerTure](https://www.koebenhavnerture.dk/), and in a second phase (November-December 2019) it was further developed as a final exam project for [KEA's Datamatiker AP](https://kea.dk/en/programmes/academy-profession-degree/computer-science). \n\n</InfoPaper>\n\n<InfoPaper>\n<MyChip label=\"Product Development\"/>\n<MyChip label=\"Design Thinking\"/>\n<MyChip label=\"Augmented Reality\"/>\n<MyChip label=\"Unity 3D\"/>\n<MyChip label=\"Vuforia\"/>\n<MyChip label=\"Node.js\"/>\n<MyChip label=\"Mongo DB\"/>\n<MyChip label=\"React\"/>\n<MyChip label=\"SSR\"/>\n<MyChip label=\"Heroku\"/>\n</InfoPaper>\n\n</InfoGrid>\n\n<PanelGrid>\n<Panel id=\"1\" heading=\"Phase 1\" secondaryHeading=\"Prototype development\" >\n\n### Goal:\nIn a multidisciplinary team of 2 multimedia designers and 2 developers, we developed an AR solution for this local guided-tours company.\nOur goal was to \"Bring Stories Alive\" as well as to add a competitive advantage to the company's SoMe presence. \n \n### About our Process\nWe went through a 4-day course on Unity 3D and 1 day on Ideation. We worked with Scrum. An experienced tutor guided us while practising design methods from the [Amsterdam MediaLab's Toolkit](https://toolkits.dss.cloud/design/).   \nWe researched about the target group of the company, and through ideation tecniques we developed a series of prototypes. \n\n### Product: \nAfter iterative user testing we ended up with a working AR mobile application prototype that we pitched to the client during an open event. \n  \n[![Watch the video](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/youtube.png)](https://youtu.be/Lbq94Ef9qJY?t=5).\n  \nRecomendation letter available. Team: Charlène Marteyn, Modestas Šekštela, Stefanos Agelastos.\n</Panel>\n\n<Panel id=\"2\" heading=\"Phase 2\" secondaryHeading=\"System Development\" >\n### Goal: MVP Development\nTogether with two colleagues we developed an augmented reality android tourist guide and a supporting administration system. \nThe user harvests GPS and AR technologies through their phone and consumes content relevant to their location. \nThe system administrator can add new locations and feed the application with new content.  \n  \n![overview](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/overview.png) \n  \n### About the process:\nWe combined Scrum and Design thinking. Both methodologies are iterative and incremental by nature, so they combine well:  \n  \n![overview](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/process.png) \n  \nExam evaluation: excellent. Team: Alexander Kellberg, Kristian Skovlund Rasmussen, Stefanos Agelastos.\n \n</Panel>\n\n<Panel id=\"3\" heading=\"How does it work?\" secondaryHeading=\"An overview of the technologies\" >\n\n## Built With\n\n- Android APK by Unity3D and Vuforia\n- React isomorphic front end application\n- Node.js express API and server side rendering\n- MongoDB for semi-structured data model persistence\n- Heroku PaaS staging environment \n  \n\nThe admin webapp allows you to add Locations to a database, and provide them as a REST resource to the android APK. The admin webapp is based on [MERN](http://mern.io), a scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS. Read the [Documentation](http://mern.io/documentation.html).\nThe android app was made on the [Unity](https://unity.com/) real-time 3d development platform and [Vuforia](https://www.vuforia.com/) library, which provided web, gps and augmented reality capabilitities.\nCurrently the solution has the following architecture:  \n  \n![solution](https://raw.githubusercontent.com/stefanosAgelastos/gps-tourist-app/master/docs/solution.png) \n</Panel>\n\n<Panel id=\"4\" heading=\"For Devs\" secondaryHeading=\"Clone and install, the usual\" >\n\n## Getting Started\n\nThese instructions will get you a copy of the administration and running on your local machine for development and testing purposes.\n\n### Prerequisites\n\n**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also **npm6** is required to install dependencies properly.\n\n## Available Commands\n\n1. `npm run start` - starts the development server with hot reloading enabled\n\n2. `npm run bs` - bundles the code and starts the production server\n\n3. `npm run test` - start the test runner\n\n4. `npm run watch:test` - start the test runner with watch mode\n\n5. `npm run cover` - generates test coverage report\n\n6. `npm run lint` - runs linter to check for lint errors\n\n</Panel>\n<Panel id=\"5\" heading=\"For Devs\" secondaryHeading=\"Details about the database setup\" >\n\n### Setting up the local database\nNow you need to provide the endpoint of your database, database name, and user before starting the app. Go to `database_credentials\\local_credentials.js` and copy paste the following lines of code:\n\n```\nexports.host = \"localhost\";\nexports.database = \"YOUR_DATABASE_NAME\";\nexports.user = \"YOUR_USER_NAME\";\n\n/* exports.host = process.env.DB_HOST;\nexports.database = process.env.DB_NAME;\nexports.user = process.env.DB_USER;\nexports.password = process.env.DB_PASSWORD; */\n```\n\nThe app is now ready to connect to the databse, but before running the app, you need run a few commands on your terminal. These commands will create and run a migration that will set up the tables of your database. The last command will seed the database with some data.\n\n```\nnpm run create-migration\nnpm run migrate\nnpm run seed\n```\n \n</Panel>\n<Panel id=\"6\" heading=\"For Devs\" secondaryHeading=\"You are ready to go\" >\n\n### Run: \n\nYou are ready to start the app, run\n```\nnpm start\n```\nor run \n```\nnpm run start-dev\n```\nfor development and hot reloading. The port is printed on the console.\n</Panel>\n\n</PanelGrid>\n\n\n</MainGrid>"

/***/ })

})
//# sourceMappingURL=test.js.50930a73f8686d032d76.hot-update.js.map