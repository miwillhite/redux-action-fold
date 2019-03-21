const assert = require ('assert');
const C = require ('..');

// Test C.toMap

// Generates a StrMap String from [String]
assert.deepEqual 
  ( C.toMap (['A', 'B'])
  , { A: 'A', B: 'B' }
  );
// Handles empty values
assert.deepEqual 
  ( C.toMap ([])
  , {}
  );


// Test C.action

// Generates a redux action
assert.deepEqual 
  ( C.action ('A') ({ x: 1 })
  , { type: 'A', payload: { x: 1 } }
  );
// Generates a nullary action (empty payload)
assert.deepEqual
  ( C.action ('A') ()
  , { type: 'A', payload: {}}
  );


// Test C.cata

// Returns the value for the given branch
assert.strictEqual
  ( true
  , C.cata ({ A: () => true
          , B: x => x
          }) (C.action ('A') ())
  );
// Receives the payload value
assert.strictEqual
  ( 'foo'
  , C.cata ({ A: () => true
          , B: x => x
          }) (C.action ('B') ('foo'))
  );
// Throws if there is no matching cata
assert.throws
  (() => C.cata ({}) (C.action ('A') ()));
