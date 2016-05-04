var chai = require('chai');
var expect = chai.expect;
var App = require('../index').App;

describe('App', function() {
  describe('::CHECKING_FOR_UPDATE', function() {
    it('returns app:checking-for-update', function() {
      expect(App.CHECKING_FOR_UPDATE).to.equal('app:checking-for-update');
    });
  });

  describe('::CHECK_FOR_UPDATE', function() {
    it('returns app:check-for-update', function() {
      expect(App.CHECK_FOR_UPDATE).to.equal('app:check-for-update');
    });
  });

  describe('::UPDATE_NOT_AVAILABLE', function() {
    it('returns app:update-not-available', function() {
      expect(App.UPDATE_NOT_AVAILABLE).to.equal('app:update-not-available');
    });
  });

  describe('::UPDATE_AVAILABLE', function() {
    it('returns app:update-available', function() {
      expect(App.UPDATE_AVAILABLE).to.equal('app:update-available');
    });
  });

  describe('::UPDATE_DOWNLOADED', function() {
    it('returns app:update-downloaded', function() {
      expect(App.UPDATE_DOWNLOADED).to.equal('app:update-downloaded');
    });
  });

  describe('::INSTALL_UPDATE', function() {
    it('returns app:install-update', function() {
      expect(App.INSTALL_UPDATE).to.equal('app:install-update');
    });
  });

  describe('::ENABLE_AUTO_UPDATE', function() {
    it('returns app:enable-auto-update', function() {
      expect(App.ENABLE_AUTO_UPDATE).to.equal('app:enable-auto-update');
    });
  });

  describe('::DISABLE_AUTO_UPDATE', function() {
    it('returns app:disable-auto-update', function() {
      expect(App.DISABLE_AUTO_UPDATE).to.equal('app:disable-auto-update');
    });
  });

  describe('::CLOSE_CONNECT_WINDOW', function() {
    it('returns app:close-connect-window', function() {
      expect(App.CLOSE_CONNECT_WINDOW).to.equal('app:close-connect-window');
    });
  });

  describe('::SHOW_CONNECT_WINDOW', function() {
    it('returns app:show-connect-window', function() {
      expect(App.SHOW_CONNECT_WINDOW).to.equal('app:show-connect-window');
    });
  });

  describe('::SHOW_HELP_WINDOW', function() {
    it('returns app:show-help-window', function() {
      expect(App.SHOW_HELP_WINDOW).to.equal('app:show-help-window');
    });
  });

  describe('::SHOW_HELP_ENTRY', function() {
    it('returns app:show-help-entry', function() {
      expect(App.SHOW_HELP_ENTRY).to.equal('app:show-help-entry');
    });
  });

  describe('::RENDERER_READY', function() {
    it('returns app:renderer-ready', function() {
      expect(App.RENDERER_READY).to.equal('app:renderer-ready');
    });
  });

  describe('::LAUNCHED', function() {
    it('returns app:launched', function() {
      expect(App.LAUNCHED).to.equal('app:launched');
    });
  });

  describe('::QUIT', function() {
    it('returns app:quit', function() {
      expect(App.QUIT).to.equal('app:quit');
    });
  });
});
