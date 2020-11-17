function supportsLocalStorage(): boolean {
  try {
    if (!localStorage) return false;
    else return true;
    // May only need the above simple test
    // - old versions of firefox may cause problem?
    //        return 'localStorage' in window && window['localStorage']!==null;
  } catch (e) {
    return false;
  }
}

let _LocalStorage: {};

if (supportsLocalStorage())
  _LocalStorage = {
    set: function (i: string, v: any) {
      if (typeof v === 'object') localStorage[i] = JSON.stringify(v);
      else localStorage[i] = v;
    },
    get: function (i: string) {
      return localStorage[i];
    },
    exists: function (i: string) {
      return !(typeof localStorage[i] === 'undefined');
    }
  };
else
  _LocalStorage = {
    save: function (i: string, v: any) {
      document.cookie = `${i}=${encodeURIComponent(v)}`;
    },
    load: function (i: string) {
      let s = `; ${document.cookie};`,
        p = s.indexOf(`; ${i}=`);
      if (p < 0) return '';
      p = p + i.length + 3;
      const p2 = s.indexOf(';', p + 1);

      return decodeURIComponent(s.substring(p, p2));
    }
  };

export let LocalStorage = _LocalStorage;
