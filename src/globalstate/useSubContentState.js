export default function useSubContentState(initialValue = undefined, callback) {
  let state;
  if (initialValue) {
    state = initialValue;
  }

  const setState = setValue => {
    state = setValue;
    callback();
  };

  return [state, setState];
}
