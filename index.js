// :: Action = { type: String, payload: Object }
// :: TypeLabel = String

// :: TypeLabel -> StrMap TypeLabel
// ['A', 'B'] => { A: 'A', B: 'B' }
const toMap = labels =>
  labels.reduce ((m, l) => ({ ...m, ...{ [l]: l }}), {});

// :: TypeLabel -> Object -> Action
const action =
  type => (payload = {}) =>
    ({ type, payload });

// :: StrMap Function -> Catchable e Action
const cata = fnMap => a => {
  if (fnMap[a.type]) {
    return fnMap[a.type](a.payload);
  } else {
    throw `'${a.type}' action not handled in cata`;
  }
};

module.exports = {
  action,
  cata,
  toMap,
};
