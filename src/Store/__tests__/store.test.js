import reducers from '../Reducers';

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({user:{user:{name:'lol'}},login:[]});
});
