var chai = require('chai');
var expect = chai.expect;
var ElectronEvent = require('../index').ElectronEvent;

describe('ElectronEvent', function() {
  describe('::ALL_WINDOWS_CLOSED', function() {
    it('returns window-all-closed', function() {
      expect(ElectronEvent.ALL_WINDOWS_CLOSED).to.equal('window-all-closed');
    });
  });

  describe('::READY', function() {
    it('returns ready', function() {
      expect(ElectronEvent.READY).to.equal('ready');
    });
  });

  describe('::BEFORE_QUIT', function() {
    it('returns before-quit', function() {
      expect(ElectronEvent.BEFORE_QUIT).to.equal('before-quit');
    });
  });

  describe('::WILL_QUIT', function() {
    it('returns will-quit', function() {
      expect(ElectronEvent.WILL_QUIT).to.equal('will-quit');
    });
  });

  describe('::QUIT', function() {
    it('returns quit', function() {
      expect(ElectronEvent.QUIT).to.equal('quit');
    });
  });
});
