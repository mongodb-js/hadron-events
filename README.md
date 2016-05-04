# hadron-events [![][travis_img]][travis_url] [![][npm_img]][npm_url]

Hadron Events
-------------

Event constants used by hadron applications.

## Usage

Application Events
------------------

```javascript
const AppEvent = require('hadron-events').AppEvent;
const ipc = require('hadron-ipc');

ipc.broadcast(AppEvent.CHECKING_FOR_UPDATE);

ipc.respondTo(AppEvent.CHECKING_FOR_UPDATE, checkForUpdate);
```

Window Events
-------------

```javascript
const WindowEvent = require('hadron-events').WindowEvent;
const ipc = require('hadron-ipc');

ipc.on(WindowEvent.SHOW_ABOUT_DIALOG, showAboutDialog);
```

## Events

- `AppEvent.CHECKING_FOR_UPDATE`: AppEvent.ication is currently checking if update is available.
- `AppEvent.CHECK_FOR_UPDATE`: Tell the application to check for an update.
- `AppEvent.UPDATE_NOT_AVAILABLE`: No update available for application.
- `AppEvent.UPDATE_AVAILABLE`: Update available for application.
- `AppEvent.UPDATE_DOWNLOADED`: Update completed downloading new version.
- `AppEvent.INSTALL_UPDATE`: Install the new update.
- `AppEvent.ENABLE_AUTO_UPDATE`: Enable application auto updates.
- `AppEvent.DISABLE_AUTO_UPDATE`: Disable application auto updates.
- `AppEvent.CLOSE_CONNECT_WINDOW`: Close application connect window.
- `AppEvent.SHOW_CONNECT_WINDOW`: Show application connect window.
- `AppEvent.SHOW_HELP_WINDOW`: Show application help window.
- `AppEvent.SHOW_HELP_ENTRY`: Show application help entry.
- `AppEvent.RENDERER_READY`: AppEvent.ication renderer process ready.
- `AppEvent.LAUNCHED`: AppEvent.ication launched.
- `AppEvent.QUIT`: Quit the application.
- `WindowEvent.SHOW_ABOUT_DIALOG`: Show the about dialog.
- `WindowEvent.SHOW_COMPASS_TOUR`: Show the Compass tour modal.
- `WindowEvent.SHOW_COMPASS_OVERVIEW_SUBMENU`: Show the Compass overview sub-menu.
- `WindowEvent.SHOW_NETWORK_OPTIN`: Show network optin.
- `WindowEvent.SHOW_INTERCOM_PANEL`: Show intercom panel.
- `WindowEvent.SHOW_SHARE_SUBMENU`: Show share sub-menu.
- `WindowEvent.HIDE_SHARE_SUBMENU`: Hide share sub-menu.
- `WindowEvent.SHARE_SCHEMA_JSON`: Share the schema as JSON.
- `WindowEvent.RENDERER_READY`: The renderer process is ready.

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
