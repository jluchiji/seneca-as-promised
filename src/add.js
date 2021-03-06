/**
 * async/add.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
const _            = require('lodash');
const Debug        = require('debug')('vg:core:add');
const unpromisify  = require('./util/unpromisify');



function addAsync(...args) {
  const pattern = _.dropRight(args, 1);
  const action  = _.last(args);

  Debug(args[0]);

  return this.add(...pattern, unpromisify(action));
}
module.exports = addAsync;
