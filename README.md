# redux-catastrophic
Utility functions to help alleviate redux boilerplate.

```js
const C = require ('redux-catastrophic');

// :: State = String

// :: StrMap TypeLabel
const Action = 
  C.toMap ([ 'Move'
           , 'Die'
           , 'Spawn'
           ]);

// :: State -> Action
const reducer = state =>
  C.cata ({ Move: ({ x, y }) => S.concat (state) (`Go to ${x}:${y}`)
          , Die: () => S.concat (state) ('☠︎')
          });

// :: Action
const a = C.action (Action.Move) ({ x: 1, y: 10 });

// :: Action
const b = C.action (Action.Die) ();

// :: Action
const c = { type: 'Spawn', payload: null };

// :: State
reducer ('Player 1: ') (a); //=> 'Player 1: Go to 1:10'
reducer ('Player 2: ') (b); //=> 'Player 2: ☠︎'
reducer ('Player 3: ') (c); //=> Throw: 'Spawn' action not handled in cata

```
