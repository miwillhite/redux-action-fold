// :: Action a = { type: TypeLabel, payload: a }
// :: TypeLabel = String

// :: TypeLabel -> StrMap (a => Action a)
// ['A', 'B'] => { A: (a => Action a), B: (b => Action b) }
const unfold = labels =>
  labels.reduce ((m, l) => 
    ({ ...m, ...{ [l]: payload => ({ type: l, payload }) }}), {});

// :: StrMap Function -> Catchable e Action -> Any
const fold = fnMap => a => {
  if (fnMap[a.type]) {
    return fnMap[a.type](a.payload);
  } else {
    throw `'${a.type}' action not handled in fold.`;
  }
};

module.exports =
  { fold
  , unfold
  };
