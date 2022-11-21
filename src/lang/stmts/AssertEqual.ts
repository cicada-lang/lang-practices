import { Env } from "../env"
import { equivalent, EquivalentCtx } from "../equivalent"
import { AssertionError } from "../errors"
import { evaluate } from "../evaluate"
import type { Exp } from "../exp"
import * as Exps from "../exp"
import type { Mod } from "../mod"
import { Stmt } from "../stmt"

export class AssertEqual extends Stmt {
  constructor(public exps: Array<Exp>) {
    super()
  }

  async execute(mod: Mod): Promise<void> {
    for (let i = 0; i < this.exps.length - 1; i++) {
      this.assertEqual(mod, this.exps[i], this.exps[i + 1])
    }
  }

  async undo(mod: Mod): Promise<void> {}

  private assertEqual(mod: Mod, left: Exp, right: Exp): void {
    const leftValue = evaluate(mod, Env.init(), left)
    const rightValue = evaluate(mod, Env.init(), right)
    if (!equivalent(EquivalentCtx.init(), leftValue, rightValue)) {
      throw new AssertionError(
        `((fail assert-equal) ${Exps.formatExp(left)} ${Exps.formatExp(
          right,
        )})`,
      )
    }
  }
}
