/**
 * Created by WebStorm.
 * User: martin
 * Date: 01/06/2020
 * Time: 14:23

 */
function supportsLocalStorage() {
  try {
    if (!localStorage)return false;
    else return true;
    // May only need the above simple test
    // - old versions of firefox may cause problem?
    //        return 'localStorage' in window && window['localStorage']!==null;
  }
  catch(e) {
    return false;
  }
}

let LocalStorage = {};

if (supportsLocalStorage())
  LocalStorage = {
    'set':function ( i, v ) {
      if (typeof v === 'object' || typeof v === 'array')
        localStorage[i] = JSON.stringify(v);
      else
        localStorage[i] = v;
    },
    'get':function ( i ) {
      return localStorage[i];
    },
    'exists':function(i) {
      return !(typeof(localStorage[i]) === 'undefined');
    }
  };
else
  LocalStorage = {
    'save':function ( i, v ) {
      document.cookie = `${i }=${ encodeURIComponent(v)}`;
    },
    'load':function ( i ) {
      var s = `; ${ document.cookie };`,
        p = s.indexOf(`; ${ i }=`);
      if (p < 0)return '';
      p = p + i.length + 3;
      var p2 = s.indexOf(';', p + 1);

      return decodeURIComponent(s.substring(p, p2));
    }
  };

module.exports = LocalStorage;
