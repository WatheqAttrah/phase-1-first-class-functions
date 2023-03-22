
function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(callback);

function returnsANamedFunction() {
    const x = function() {
    }
    return returnsANamedFunction;
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {
    }
}
returnsAnAnonymousFunction();