import type { Exp } from "../exp/Exp.js"
import type { Mod } from "../mod/Mod.js"

export type Stmt =
  | AssertEqual
  | AssertNotEqual
  | Comments
  | Compute
  | Define
  | DisplayFreeNames
  | Import

export type AssertEqual = {
  "@type": "Stmt"
  "@kind": "AssertEqual"
  exps: Array<Exp>
}

export function AssertEqual(exps: Array<Exp>): AssertEqual {
  return {
    "@type": "Stmt",
    "@kind": "AssertEqual",
    exps,
  }
}

export type AssertNotEqual = {
  "@type": "Stmt"
  "@kind": "AssertNotEqual"
  exps: Array<Exp>
}

export function AssertNotEqual(exps: Array<Exp>): AssertNotEqual {
  return {
    "@type": "Stmt",
    "@kind": "AssertNotEqual",
    exps,
  }
}

export type Comments = {
  "@type": "Stmt"
  "@kind": "Comments"
  exps: Array<Exp>
}

export function Comments(exps: Array<Exp>): Comments {
  return {
    "@type": "Stmt",
    "@kind": "Comments",
    exps,
  }
}

export type Compute = {
  "@type": "Stmt"
  "@kind": "Compute"
  exp: Exp
}

export function Compute(exp: Exp): Compute {
  return {
    "@type": "Stmt",
    "@kind": "Compute",
    exp,
  }
}

export type Define = {
  "@type": "Stmt"
  "@kind": "Define"
  name: string
  exp: Exp
}

export function Define(name: string, exp: Exp): Define {
  return {
    "@type": "Stmt",
    "@kind": "Define",
    name,
    exp,
  }
}

export type DisplayFreeNames = {
  "@type": "Stmt"
  "@kind": "DisplayFreeNames"
  exp: Exp
}

export function DisplayFreeNames(exp: Exp): DisplayFreeNames {
  return {
    "@type": "Stmt",
    "@kind": "DisplayFreeNames",
    exp,
  }
}

export type ImportEntry = {
  name: string
  rename?: string
}

export type Import = {
  "@type": "Stmt"
  "@kind": "Import"
  path: string
  entries: Array<ImportEntry>
  loadedMod?: Mod
}

export function Import(path: string, entries: Array<ImportEntry>): Import {
  return {
    "@type": "Stmt",
    "@kind": "Import",
    path,
    entries,
  }
}
