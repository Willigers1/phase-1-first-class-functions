const receivesAFunction = (func) => {
  return func();
};

const returnsANamedFunction = () => {
  const namedFunction = () => {
    return "reject me!";
  };
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return () => "before all";
};
