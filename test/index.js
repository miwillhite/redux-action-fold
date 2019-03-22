const assert = require ('assert');
const F = require ('..');

// Subject
const Action =
  F.unfold (['A', 'B']);


// Test F.unfold

// Generates a StrMap(Function a) from [String]
assert.equal ('function', typeof Action.A);
assert.equal (1, Action.A.length);

// Handles empty values
assert.deepEqual (F.unfold ([]), {});


// Test F.fold

// Returns the value for the given branch
assert.strictEqual
  ( true
  , F.fold ({ A: () => true
            , B: x => x
            })
           (Action.A ())
  );
// Receives the payload value
assert.strictEqual
  ( 'foo'
  , F.fold ({ A: () => true
            , B: x => x
            })
           (Action.B ('foo'))
  );
// Throws if there is no matching cata
assert.throws
  (() => F.fold ({}) (Action.A ()));
