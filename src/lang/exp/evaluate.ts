import * as Actions from "../actions"
import { findBuiltinValue } from "../builtin"
import type { Env } from "../env"
import * as Errors from "../errors"
import type { Exp } from "../exp"
import type { Mod } from "../mod"
import type { Value } from "../value"
import * as Values from "../value"

export function evaluate(mod: Mod, env: Env, exp: Exp): Value {
  switch (exp["@kind"]) {
    case "Var": {
      let value = undefined

      value = env.findValue(exp.name)
      if (value !== undefined) return value

      value = mod.findValue(exp.name)
      if (value !== undefined) return value

      value = findBuiltinValue(mod, env, exp.name)
      if (value !== undefined) return value

      throw new Errors.LangError(`Unknown name: ${exp.name}`)
    }

    case "Fn": {
      return Values.Fn(mod, env, exp.name, exp.ret)
    }

    case "Ap": {
      const target = evaluate(mod, env, exp.target)
      const arg = Values.Lazy(mod, env, exp.arg)
      return Actions.doAp(target, arg)
    }

    case "Fixpoint": {
      return Values.Fixpoint(mod, env, exp.name, exp.body)
    }
  }
}
