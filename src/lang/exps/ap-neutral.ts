import { Exp } from "../exp"
import * as Exps from "../exps"
import { Neutral } from "../neutral"
import { ReadbackCtx } from "../readback"
import { Value } from "../value"

export class ApNeutral extends Neutral {
  constructor(public target: Neutral, public arg: Value) {
    super()
  }

  is(that: Neutral): boolean {
    return (
      that instanceof ApNeutral &&
      that.target.is(this.target) &&
      that.arg.is(this.arg)
    )
  }

  readback(ctx: ReadbackCtx): Exp {
    return new Exps.Ap(this.target.readback(ctx), this.arg.readback(ctx))
  }

  equal(ctx: ReadbackCtx, that: Neutral): boolean {
    return (
      that instanceof ApNeutral &&
      this.target.equal(ctx, that.target) &&
      this.arg.equal(ctx, that.arg)
    )
  }
}
