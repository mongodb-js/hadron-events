var chai = require('chai');
var expect = chai.expect;
var App = require('../index').App;

describe('App', function() {
  describe('::CHECKING_FOR_UPDATE', function() {
    it('returns app:checking-for-update', function() {
      expect(App.CHECKING_FOR_UPDATE).to.equal('app:checking-for-update');
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
});
