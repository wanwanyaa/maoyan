import { fromJS } from 'immutable'

const state = fromJS({
  a:'1',
  b:[1,2,3]
})

var a = state.set('a','2')

console.log(a.toJS())
