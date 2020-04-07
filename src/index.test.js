import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, (err, window) => {
      const h4 = window.document.getElementsByTagName('h4')[0];

      expect(h4.innerHTML).to.equal("Hello Javascript");
      done();
      window.close();
    })
  })
})


