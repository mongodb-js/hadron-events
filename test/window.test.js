var chai = require('chai');
var expect = chai.expect;
var Window = require('../index').Window;

describe('Window', function() {
  describe('::SHOW_ABOUT_DIALOG', function() {
    it('returns window:show-about-dialog', function() {
      expect(Window.SHOW_ABOUT_DIALOG).to.equal('window:show-about-dialog');
    });
  });

  describe('::SHOW_COMPASS_TOUR', function() {
    it('returns window:show-compass-tour', function() {
      expect(Window.SHOW_COMPASS_TOUR).to.equal('window:show-compass-tour');
    });
  });

  describe('::SHOW_COMPASS_OVERVIEW_SUBMENU', function() {
    it('returns window:show-compass-overview-submenu', function() {
      expect(Window.SHOW_COMPASS_OVERVIEW_SUBMENU).to.equal('window:show-compass-overview-submenu');
    });
  });

  describe('::SHOW_NETWORK_OPTIN', function() {
    it('returns window:show-network-optin', function() {
      expect(Window.SHOW_NETWORK_OPTIN).to.equal('window:show-network-optin');
    });
  });

  describe('::SHOW_INTERCOM_PANEL', function() {
    it('returns window:show-intercom-panel', function() {
      expect(Window.SHOW_INTERCOM_PANEL).to.equal('window:show-intercom-panel');
    });
  });

  describe('::SHOW_SHARE_SUBMENU', function() {
    it('returns window:show-share-submenu', function() {
      expect(Window.SHOW_SHARE_SUBMENU).to.equal('window:show-share-submenu');
    });
  });

  describe('::HIDE_SHARE_SUBMENU', function() {
    it('returns window:hide-share-submenu', function() {
      expect(Window.HIDE_SHARE_SUBMENU).to.equal('window:hide-share-submenu');
    });
  });

  describe('::SHARE_SCHEMA_JSON', function() {
    it('returns window:share-schema-json', function() {
      expect(Window.SHARE_SCHEMA_JSON).to.equal('window:share-schema-json');
    });
  });
});
