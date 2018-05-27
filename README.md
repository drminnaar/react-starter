![react-starter](https://user-images.githubusercontent.com/33935506/36640446-894a1a78-1a27-11e8-970a-6cbf95d76799.png)

# React Starter

A basic template that consists of the essential elements that are required to start building a React (v16.4) application using Webpack (v4).

The template consists of:

* a typcial project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* the main React components to get started

Additionaly, the template provides a development and production webpack configuration.

The template also allows one to include specific plugins as part of build. [Please see here for more detail](#build-application-with-bundleanalayzer-plugin-included)

---

## Developed With

* [Node.js 8.11](https://nodejs.org/en/) - Javascript runtime
* [React 16.4](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel 6.26](https://babeljs.io/) - A transpiler for javascript
* [Webpack 4.x](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage

---

## Related Projects

* [react-redux-starter]

  A basic template that consists of the essential elements that are required to start building a Single Page Application using React, React Router, Redux, Bootstrap 4, Sass, and Webpack.

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

* [react-redux-quotlify]

  A quote browser and manager that allows one to search famous quotes and save them to a data store.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

### Install

Follow the following steps to get development environment running.

* Clone _'react-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-starter.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-starter.git
  ```

* Install node modules

   ```bash
   cd react-starter
   npm install
   ```

### Build

#### Build Application

dev | prod
:---: | :---:
npm run build:dev | npm run build:prod

#### Build Application And Watch For Changes

dev | prod
:---: | :---:
npm run build:dev:watch | npm run build:prod:watch

#### Build Application With BundleAnalayzer Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundleanalyze | npm run build:prod:bundleanalyze

After running the above command, a browser window will open displaying an interactive graph resembling the following image:

![bundle-analyzer](https://user-images.githubusercontent.com/33935506/36382812-eadf199e-1592-11e8-9681-cf5ccf67951f.png)

### Run ESlint

#### Lint Project Using ESLint

  ```bash
  npm run lint
  ```

#### Lint Project Using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

#### Run Start

This will run the _'serve:dev'_ npm task

```bash
npm start
```

#### Run Dev Server

```bash
npm run serve:dev
```

#### Run Dev Server With Dashboard

```bash
npm run serve:dev:dashboard
```

The above command will display a dashboard view in your console resembling the following image:

![webpack-dashboard](https://user-images.githubusercontent.com/33935506/36382813-eb10b0a8-1592-11e8-9506-fd25db65a258.png)

#### Run Prod Server

This command will build application using production settings and start the application using _live-server_

```bash
npm run serve:prod
```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-starter/tags).

---

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[react-starter]: https://github.com/drminnaar/react-starter
[react-redux-starter]: https://github.com/drminnaar/react-redux-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard
[react-redux-quotlify]: https://github.com/drminnaar/react-redux-quotlify