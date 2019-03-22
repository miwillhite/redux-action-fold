# redux-action-fold
Utility functions to help alleviate redux boilerplate.

```js
const F = require ('redux-action-fold');

// :: State = String

// :: StrMap TypeLabel
const Action = 
  F.unfold ([ 'Move'
            , 'Die'
            , 'Spawn'
            ]);

// :: State -> Action
const reducer = state =>
  F.fold ({ Move: ({ x, y }) => S.concat (state) (`Go to ${x}:${y}`)
          , Die: () => S.concat (state) ('☠︎')
          });

// :: Action
const a = Action.Move ({ x: 1, y: 10 });

// :: Action
const b = Action.Die ();

// :: Action
const c = { type: 'Spawn', payload: null };

// :: State
reducer ('Player 1: ') (a); //=> 'Player 1: Go to 1:10'
reducer ('Player 2: ') (b); //=> 'Player 2: ☠︎'
reducer ('Player 3: ') (c); //=> Throw: 'Spawn' action not handled in cata
```
