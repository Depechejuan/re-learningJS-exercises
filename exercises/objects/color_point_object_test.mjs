/* npm t exercises/objects/color_point_object_test.mjs
Instructions:
- Create the file color_point_object.mjs
- Ensure the test passes
*/
suite('color_point_object_test.mjs');

import * as assert from 'assert/strict';

import {colorPoint} from './color_point_object.mjs';

test('Object colorPoint', () => {
  assert.equal(colorPoint.x, 3);
  assert.equal(colorPoint.y, 5);
  assert.equal(colorPoint.dist(), Math.sqrt(3**2 + 5**2));
  assert.equal(colorPoint.toString(), `(3, 5)`);
  
  colorPoint.x = 2;
  colorPoint.y = 4;
  assert.equal(colorPoint.x, 2);
  assert.equal(colorPoint.y, 4);
  assert.equal(colorPoint.dist(), Math.sqrt(2**2 + 4**2));
  assert.equal(colorPoint.toString(), `(2, 4)`);
});
