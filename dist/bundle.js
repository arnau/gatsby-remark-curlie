'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var id = /* record */[/* contents */0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return false;
  } else if (e.tag === 248) {
    return true;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return slot.tag === 248;
    } else {
      return false;
    }
  }
}

var caml_set_oo_id_1 = caml_set_oo_id;
var get_id_1 = get_id;
var create_1 = create;
var isCamlExceptionOrOpenVariant_1 = isCamlExceptionOrOpenVariant;
/* No side effect */

var caml_exceptions = {
	caml_set_oo_id: caml_set_oo_id_1,
	get_id: get_id_1,
	create: create_1,
	isCamlExceptionOrOpenVariant: isCamlExceptionOrOpenVariant_1
};

var $$Error = caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

var $$Error_1 = $$Error;
var internalToOCamlException_1 = internalToOCamlException;
var raiseError_1 = raiseError;
var raiseEvalError_1 = raiseEvalError;
var raiseRangeError_1 = raiseRangeError;
var raiseReferenceError_1 = raiseReferenceError;
var raiseSyntaxError_1 = raiseSyntaxError;
var raiseTypeError_1 = raiseTypeError;
var raiseUriError_1 = raiseUriError;
/* No side effect */

var js_exn = {
	$$Error: $$Error_1,
	internalToOCamlException: internalToOCamlException_1,
	raiseError: raiseError_1,
	raiseEvalError: raiseEvalError_1,
	raiseRangeError: raiseRangeError_1,
	raiseReferenceError: raiseReferenceError_1,
	raiseSyntaxError: raiseSyntaxError_1,
	raiseTypeError: raiseTypeError_1,
	raiseUriError: raiseUriError_1
};

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

var out_of_memory_1 = out_of_memory;
var sys_error_1 = sys_error;
var failure_1 = failure;
var invalid_argument_1 = invalid_argument;
var end_of_file_1 = end_of_file;
var division_by_zero_1 = division_by_zero;
var not_found_1 = not_found;
var match_failure_1 = match_failure;
var stack_overflow_1 = stack_overflow;
var sys_blocked_io_1 = sys_blocked_io;
var assert_failure_1 = assert_failure;
var undefined_recursive_module_1 = undefined_recursive_module;
/*  Not a pure module */

var caml_builtin_exceptions = {
	out_of_memory: out_of_memory_1,
	sys_error: sys_error_1,
	failure: failure_1,
	invalid_argument: invalid_argument_1,
	end_of_file: end_of_file_1,
	division_by_zero: division_by_zero_1,
	not_found: not_found_1,
	match_failure: match_failure_1,
	stack_overflow: stack_overflow_1,
	sys_blocked_io: sys_blocked_io_1,
	assert_failure: assert_failure_1,
	undefined_recursive_module: undefined_recursive_module_1
};

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
    } else {
      return acc;
    }
  }}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      }      _l = l[1];
      _i = k;
      continue ;
    } else {
      return /* () */0;
    }
  }}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = 0;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

function caml_array_dup(prim) {
  return prim.slice(0);
}

var caml_array_dup_1 = caml_array_dup;
var caml_array_sub_1 = caml_array_sub;
var caml_array_concat_1 = caml_array_concat;
var caml_make_vect_1 = caml_make_vect;
var caml_make_float_vect_1 = caml_make_float_vect;
var caml_array_blit_1 = caml_array_blit;
var caml_array_get_1 = caml_array_get;
var caml_array_set_1 = caml_array_set;
/* No side effect */

var caml_array = {
	caml_array_dup: caml_array_dup_1,
	caml_array_sub: caml_array_sub_1,
	caml_array_concat: caml_array_concat_1,
	caml_make_vect: caml_make_vect_1,
	caml_make_float_vect: caml_make_float_vect_1,
	caml_array_blit: caml_array_blit_1,
	caml_array_get: caml_array_get_1,
	caml_array_set: caml_array_set_1
};

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity === 0 ? 1 : arity;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = caml_array.caml_array_sub(args, arity$1, -d | 0);
      _f = f.apply(null, caml_array.caml_array_sub(args, 0, arity$1));
      continue ;
    } else {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat(/* array */[x]));
      }
      }(f,args));
    }
  }}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

var app_1 = app;
var curry_1_1 = curry_1;
var _1_1 = _1;
var __1_1 = __1;
var curry_2_1 = curry_2;
var _2_1 = _2;
var __2_1 = __2;
var curry_3_1 = curry_3;
var _3_1 = _3;
var __3_1 = __3;
var curry_4_1 = curry_4;
var _4_1 = _4;
var __4_1 = __4;
var curry_5_1 = curry_5;
var _5_1 = _5;
var __5_1 = __5;
var curry_6_1 = curry_6;
var _6_1 = _6;
var __6_1 = __6;
var curry_7_1 = curry_7;
var _7_1 = _7;
var __7_1 = __7;
var curry_8_1 = curry_8;
var _8_1 = _8;
var __8_1 = __8;
/* No side effect */

var curry = {
	app: app_1,
	curry_1: curry_1_1,
	_1: _1_1,
	__1: __1_1,
	curry_2: curry_2_1,
	_2: _2_1,
	__2: __2_1,
	curry_3: curry_3_1,
	_3: _3_1,
	__3: __3_1,
	curry_4: curry_4_1,
	_4: _4_1,
	__4: __4_1,
	curry_5: curry_5_1,
	_5: _5_1,
	__5: __5_1,
	curry_6: curry_6_1,
	_6: _6_1,
	__6: __6_1,
	curry_7: curry_7_1,
	_7: _7_1,
	__7: __7_1,
	curry_8: curry_8_1,
	_8: _8_1,
	__8: __8_1
};

var undefinedHeader = /* array */[];

function some(x) {
  if (x === undefined) {
    var block = /* tuple */[
      undefinedHeader,
      0
    ];
    block.tag = 256;
    return block;
  } else if (x !== null && x[0] === undefinedHeader) {
    var nid = x[1] + 1 | 0;
    var block$1 = /* tuple */[
      undefinedHeader,
      nid
    ];
    block$1.tag = 256;
    return block$1;
  } else {
    return x;
  }
}

function nullable_to_opt(x) {
  if (x === null || x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return undefined;
  } else {
    return some(x);
  }
}

function valFromOption(x) {
  if (x !== null && x[0] === undefinedHeader) {
    var depth = x[1];
    if (depth === 0) {
      return undefined;
    } else {
      return /* tuple */[
              undefinedHeader,
              depth - 1 | 0
            ];
    }
  } else {
    return x;
  }
}

function option_get(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x);
  }
}

function option_get_unwrap(x) {
  if (x === undefined) {
    return undefined;
  } else {
    return valFromOption(x)[1];
  }
}

var nullable_to_opt_1 = nullable_to_opt;
var undefined_to_opt_1 = undefined_to_opt;
var null_to_opt_1 = null_to_opt;
var valFromOption_1 = valFromOption;
var some_1 = some;
var option_get_1 = option_get;
var option_get_unwrap_1 = option_get_unwrap;
/* No side effect */

var js_primitive = {
	nullable_to_opt: nullable_to_opt_1,
	undefined_to_opt: undefined_to_opt_1,
	null_to_opt: null_to_opt_1,
	valFromOption: valFromOption_1,
	some: some_1,
	option_get: option_get_1,
	option_get_unwrap: option_get_unwrap_1
};

function getExn(param) {
  if (param !== undefined) {
    return js_primitive.valFromOption(param);
  } else {
    throw new Error("getExn");
  }
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt !== undefined) {
    return f(js_primitive.valFromOption(opt));
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, curry.__1(f));
}

function mapU(opt, f) {
  if (opt !== undefined) {
    return js_primitive.some(f(js_primitive.valFromOption(opt)));
  }
  
}

function map(opt, f) {
  return mapU(opt, curry.__1(f));
}

function flatMapU(opt, f) {
  if (opt !== undefined) {
    return f(js_primitive.valFromOption(opt));
  }
  
}

function flatMap(opt, f) {
  return flatMapU(opt, curry.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt !== undefined) {
    return js_primitive.valFromOption(opt);
  } else {
    return $$default;
  }
}

function isSome(param) {
  return param !== undefined;
}

function isNone(x) {
  return x === undefined;
}

function eqU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(js_primitive.valFromOption(a), js_primitive.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function eq(a, b, f) {
  return eqU(a, b, curry.__2(f));
}

function cmpU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(js_primitive.valFromOption(a), js_primitive.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function cmp(a, b, f) {
  return cmpU(a, b, curry.__2(f));
}

var getExn_1 = getExn;
var mapWithDefaultU_1 = mapWithDefaultU;
var mapWithDefault_1 = mapWithDefault;
var mapU_1 = mapU;
var map_1 = map;
var flatMapU_1 = flatMapU;
var flatMap_1 = flatMap;
var getWithDefault_1 = getWithDefault;
var isSome_1 = isSome;
var isNone_1 = isNone;
var eqU_1 = eqU;
var eq_1 = eq;
var cmpU_1 = cmpU;
var cmp_1 = cmp;
/* No side effect */

var belt_Option = {
	getExn: getExn_1,
	mapWithDefaultU: mapWithDefaultU_1,
	mapWithDefault: mapWithDefault_1,
	mapU: mapU_1,
	map: map_1,
	flatMapU: flatMapU_1,
	flatMap: flatMap_1,
	getWithDefault: getWithDefault_1,
	isSome: isSome_1,
	isNone: isNone_1,
	eqU: eqU_1,
	eq: eq_1,
	cmpU: cmpU_1,
	cmp: cmp_1
};

/* eslint-disable max-params */

/* Expose. */
var unistUtilIs = is;

/* Assert if `test` passes for `node`.
 * When a `parent` node is known the `index` of node */
function is(test, node, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined;
  var hasIndex = index !== null && index !== undefined;
  var check = convert(test);

  if (
    hasIndex &&
    (typeof index !== 'number' || index < 0 || index === Infinity)
  ) {
    throw new Error('Expected positive finite index or child node')
  }

  if (hasParent && (!is(null, parent) || !parent.children)) {
    throw new Error('Expected parent node')
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index')
  }

  return Boolean(check.call(context, node, index, parent))
}

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results
}

/* Utility assert each property in `test` is represented
 * in `node`, and each values are strictly equal. */
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;

  return matches

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

/* Utility to convert a string into a function which checks
 * a given node’s type for said string. */
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

/* Utility to return true. */
function ok() {
  return true
}

var unistUtilVisitParents = visitParents;



var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;

visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  one(tree, null, []);

  // Visit a single node.
  function one(node, index, parents) {
    var result;

    if (!test || unistUtilIs(test, node, index, parents[parents.length - 1] || null)) {
      result = visitor(node, parents);

      if (result === EXIT) {
        return result
      }
    }

    if (node.children && result !== SKIP) {
      return all(node.children, parents.concat(node)) === EXIT ? EXIT : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1;
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : min) + step;
    var child;
    var result;

    while (index > min && index < children.length) {
      child = children[index];
      result = child && one(child, index, parents);

      if (result === EXIT) {
        return result
      }

      index = typeof result === 'number' ? result : index + step;
    }
  }
}

var unistUtilVisit = visit;



var CONTINUE$1 = unistUtilVisitParents.CONTINUE;
var SKIP$1 = unistUtilVisitParents.SKIP;
var EXIT$1 = unistUtilVisitParents.EXIT;

visit.CONTINUE = CONTINUE$1;
visit.SKIP = SKIP$1;
visit.EXIT = EXIT$1;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  unistUtilVisitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent)
  }
}

// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE


function isAbsolute(path) {
  return path[0] === "/";
}

var Path = /* module */[/* isAbsolute */isAbsolute];

function fromString(input) {
  var idx = input.indexOf(":");
  if (idx === -1 || input.includes("://")) {
    return undefined;
  } else {
    var prefix = input.slice(0, idx);
    var path = input.slice(idx + 1 | 0);
    var match = prefix.match((/^[a-z][a-z0-9-_.]*$/));
    if (match !== null) {
      if (path === "") {
        return /* tuple */[
                prefix,
                undefined
              ];
      } else {
        return /* tuple */[
                prefix,
                path
              ];
      }
    } else {
      return undefined;
    }
  }
}

function expand(param, catalogue) {
  var path = param[1];
  var prefix = param[0];
  var match = catalogue.find((function (record) {
          return record[/* prefix */0] === prefix;
        }));
  if (match !== undefined) {
    if (path !== undefined) {
      return match[/* url */1] + path;
    } else {
      return match[/* url */1];
    }
  }
  
}

var Path_1 = Path;
var fromString_1 = fromString;
var expand_1 = expand;
/* No side effect */

var Curlie_bs = {
	Path: Path_1,
	fromString: fromString_1,
	expand: expand_1
};

var RemarkCurlie_bs = createCommonjsModule(function (module, exports) {







function toMapping(record) {
  return /* record */[
          /* prefix */record.id,
          /* url */record.url
        ];
}

function bibToString(record) {
  var id = record.id;
  var title = record.title;
  var publisher = record.publisher;
  var published = record.published;
  var joinAuthors = function (authors) {
    if (authors !== undefined) {
      var authors$1 = authors;
      if (authors$1.length === 0) {
        return undefined;
      } else {
        return authors$1.reduce((function (acc, value) {
                      return acc + (", " + value);
                    }), "");
      }
    }
    
  };
  var authors = joinAuthors(record.authors);
  return /* array */[
            title,
            authors,
            published,
            publisher
          ].reduce((function (acc, value) {
                if (value !== undefined) {
                  return acc + (" " + (value + "."));
                } else {
                  return acc;
                }
              }), "[" + (id + "]"));
}

function $$default(ast, config) {
  var db = config.db;
  var mappings = db.map(toMapping);
  var visitor = function (node) {
    var href = node.url;
    var curlie = Curlie_bs.fromString(href);
    if (curlie !== undefined) {
      var curlie$1 = curlie;
      var match = Curlie_bs.expand(curlie$1, mappings);
      if (match !== undefined) {
        var prefix = curlie$1[0];
        var bib = belt_Option.getWithDefault(belt_Option.map(js_primitive.undefined_to_opt(db.find((function (record) {
                            return record.id === prefix;
                          }))), bibToString), "");
        node.url = match;
        node.title = bib;
        return /* () */0;
      } else {
        return js_exn.raiseError("Found a curlie " + (href + " without an entry in the catalogue."));
      }
    } else {
      return /* () */0;
    }
  };
  unistUtilVisit(ast, "link", visitor);
  return ast;
}

exports.toMapping = toMapping;
exports.bibToString = bibToString;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* unist-util-visit Not a pure module */
});

unwrapExports(RemarkCurlie_bs);
var RemarkCurlie_bs_1 = RemarkCurlie_bs.toMapping;
var RemarkCurlie_bs_2 = RemarkCurlie_bs.bibToString;
var RemarkCurlie_bs_3 = RemarkCurlie_bs.$$default;

// Gatsby expects the plugin function to be exported directly.
var gatsbyRemarkCurlie = RemarkCurlie_bs.default;

module.exports = gatsbyRemarkCurlie;
