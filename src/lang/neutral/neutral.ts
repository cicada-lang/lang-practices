import { Exp } from "../exp"
import { ReadbackCtx } from "../readback"

export abstract class Neutral {
  instanceofNeutral = true

  abstract is(that: Neutral): boolean
  abstract readback(ctx: ReadbackCtx): Exp
  abstract equal(ctx: ReadbackCtx, that: Neutral): boolean
}
