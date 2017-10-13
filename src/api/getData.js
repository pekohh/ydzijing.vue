import jsonp from 'common/js/jsonp'
import {options, commonParams} from 'api/config'

export function getData (catid, page) {
  const url = 'http://4g.zijing.org/'
  const data = Object.assign({}, commonParams, {
    app: 'system',
    controller: 'list',
    action: 'page',
    catid: catid,
    page: page
  })
  return jsonp(url, data, options)
}
/*
let navList = {
  'yw': 1,
  'hk': 13,
  'nd': 18,
  'zx': 12,
  'cj': 9,
  'js': 4,
  'pl': 14,
  'gj': 2,
  'wh': 21,
  'zs': 11,
  'ft': 16,
  'jk': 19,
  'sh': 17,
  'ly': 20,
  'db': 26,
  'tp': 27,
  'fj': 28,
  'gy': 30,
  'yl': 31,
  'jbf': 32
}
*/
