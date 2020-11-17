/**
 *
 * @param timeString
 * @param today
 * @returns {string}
 */
const partOfDay = (timeString, today) => {
  console.log(new Date());
  if (timeString === undefined || timeString === null)
    timeString = (new Date()).getHours().toString();

  if (today === undefined)
    today = false;

  const hours = timeString.substring(0, 2);
  let dayBit;

  console.log('Hours', hours);

  if (hours >= 0 && hours < 4)
    dayBit = 'Late Night';

  else if (hours >= 4 && hours < 7)
    dayBit = 'Early Morning';

  else if (hours >= 7 && hours < 12)
    dayBit = 'Morning';

  else if (hours >= 12 && hours < 17)
    dayBit = 'Afternoon';

  else if (hours < 21)
    dayBit = 'Evening';

  else
    dayBit = 'Night';

  if (today)
    dayBit = dayBit === 'night' ? 'tonight' : `this ${dayBit}`;

  console.log('partOfDay', dayBit);

  return dayBit;
};

/**
 *
 * @param extra
 * @returns {number}
 */
const toHour = (extra = 0) => {
  const now = new Date();
  return (3600000 - (now.getTime() % 3600000)) + extra;
};

/**
 *
 * @returns {string}
 */
const hourFloor = () => {
  const now = new Date();

  return parseInt(~~(now.getTime() / 3600000) * 3600000, 10).toString(32);
};

/**
 *
 * @param d
 * @returns {number}
 */
const getWeek = function (d) {
  var target = new Date(d.valueOf());
  var dayNr = (d.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  var firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000);
}

/**
 *
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 * @returns {number}
 */
const distance = (lat1, lon1, lat2, lon2) => {
  const p = 0.017453292519943295; // Math.PI / 180
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2 +
    c(lat1 * p) * c(lat2 * p) *
    (1 - c((lon2 - lon1) * p)) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};

function splitURL(url) {

}

/**
 *
 * @param count
 * @param noun
 * @param suffix
 * @returns {string}
 */
const maybePluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

/**
 *
 * @param fn
 * @param time
 * @returns {Function}
 * @private
 */
const debounce = function (fn, time) {
  let timeout;

  return function (...args) { // <-- not an arrow function
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

/**
 *
 * @param callback
 * @param limit
 * @returns {Function}
 * @private
 */
const throttle = (callback, limit) => {
  var wait = false;

  return function (...args) {
    if (!wait) {
      callback.apply(null, args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};

/**
 *
 * @param func
 * @returns {function(): *}
 * @private
 */
const once = function (func) {
  var alreadyCalled = false;
  var result;

  return function (...args) {
    if (!alreadyCalled) {
      result = func.apply(this, args);
      alreadyCalled = true;
    }

    return result;
  };
};

/**
 *
 * @param obj
 * @returns {boolean|boolean}
 */
const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 *
 * @param obj
 * @param prop
 * @returns {boolean}
 */
const hasOwn = (obj, prop) => hasOwnProperty.call(obj, prop);

/**
 *
 * @param obj
 * @param path
 * @param defaultValue
 * @returns {*}
 */
const get = (obj, path, defaultValue = undefined) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);

  return result === undefined || result === obj ? defaultValue : result;
};

const arrayFromObj = (jsonObj, wantedFields) => {
  return wantedFields.map((key) => {
    if (jsonObj.hasOwnProperty(key))
      return jsonObj[key];
  });
};

const extractFromObj = (jsonObj, wantedFields) => {
  return Object.keys(jsonObj).reduce((obj, key) => {
    if (wantedFields.includes(key))
      obj[key] = jsonObj[key];

    return obj;
  }, {});
};

const objectMatcher = (obj, matcher) => {
  if (typeof(obj) !== 'object' || obj === null) return false;

  let count = Object.keys(obj).length;
  const keys = Object.keys(obj);

  if (count !== matcher.length) return false;

  matcher.forEach((item) => {
    if (keys.indexOf(item) !== -1)
      count--;
  });

  return (count === 0);
};

exports = {
  'partOfDay': partOfDay,
  'toHour': toHour,
  'hourFloor': hourFloor,
  'getWeek': getWeek,
  'distance': distance,
  'maybePluralize': maybePluralize,
  'debounce': debounce,
  'throttle': throttle,
  'once': once,
  'isEmpty': isEmpty,
  'hasOwn': hasOwn,
  'get': get,
  'arrayFromObj' : arrayFromObj,
  'extractFromObj' : extractFromObj,
  'objectMatcher' : objectMatcher

};

// module.exports = { partOfDay, toHour, hourFloor, distance, maybePluralize, debounce, throttle, once, isEmpty, hasOwn, get, Logger, LocalStorage };

module.exports = exports;
