# hadron-events [![][travis_img]][travis_url] [![][npm_img]][npm_url]

Hadron Events
-------------

Event constants used by hadron applications.

## Usage

Application Events
------------------

```javascript
const App = require('hadron-events').App;
const ipc = require('hadron-ipc');

ipc.broadcast(App.CHECKING_FOR_UPDATE);

ipc.respondTo(App.CHECKING_FOR_UPDATE, checkForUpdate);
```

Window Events
-------------

```javascript
const App = require('hadron-events').App;
const ipc = require('hadron-ipc');

ipc.on(Window.SHOW_ABOUT_DIALOG, showAboutDialog);
```

## Events

- `App.CHECKING_FOR_UPDATE`: Application is currently checking if update is available.
- `App.CHECK_FOR_UPDATE`: Tell the application to check for an update.
- `App.UPDATE_NOT_AVAILABLE`: No update available for application.
- `App.UPDATE_AVAILABLE`: Update available for application.
- `App.UPDATE_DOWNLOADED`: Update completed downloading new version.
- `App.INSTALL_UPDATE`: Install the new update.
- `App.ENABLE_AUTO_UPDATE`: Enable application auto updates.
- `App.DISABLE_AUTO_UPDATE`: Disable application auto updates.
- `App.CLOSE_CONNECT_WINDOW`: Close application connect window.
- `App.SHOW_CONNECT_WINDOW`: Show application connect window.
- `App.SHOW_HELP_WINDOW`: Show application help window.
- `App.SHOW_HELP_ENTRY`: Show application help entry.
- `App.RENDERER_READY`: Application renderer process ready.
- `App.LAUNCHED`: Application launched.
- `App.QUIT`: Quit the application.
- `Window.SHOW_ABOUT_DIALOG`: Show the about dialog.
- `Window.SHOW_COMPASS_TOUR`: Show the Compass tour modal.
- `Window.SHOW_COMPASS_OVERVIEW_SUBMENU`: Show the Compass overview sub-menu.
- `Window.SHOW_NETWORK_OPTIN`: Show network optin.
- `Window.SHOW_INTERCOM_PANEL`: Show intercom panel.
- `Window.SHOW_SHARE_SUBMENU`: Show share sub-menu.
- `Window.HIDE_SHARE_SUBMENU`: Hide share sub-menu.
- `Window.SHARE_SCHEMA_JSON`: Share the schema as JSON.

## Installation

```
npm install --save hadron-events
```

## License

Apache 2.0

[travis_img]: https://img.shields.io/travis/mongodb-js/hadron-events.svg?style=flat-square
[travis_url]: https://travis-ci.org/mongodb-js/hadron-events
[npm_img]: https://img.shields.io/npm/v/hadron-events.svg?style=flat-square
[npm_url]: https://www.npmjs.org/package/hadron-events
