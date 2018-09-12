import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sanity', function(hooks) {
  setupApplicationTest(hooks);

  test('Has some text', async function(assert) {
    await visit('/');

    assert.dom('.card-text').includesText('Good job!');
  });
});
