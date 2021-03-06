/*
 * Copyright (c) 2020 Jet Propulsion Laboratory, California Institute of Technology
 */
import { ExtensionContext } from "vscode";
import { OmlLspVscodeExtension } from "./oml-lsp-extension";
import { SprottyLspVscodeExtension } from "sprotty-vscode/lib/lsp";

let omlExtension: SprottyLspVscodeExtension;

export function activate(context: ExtensionContext) {
  console.log("Oml extension...");
  omlExtension = new OmlLspVscodeExtension(context);
}

export function deactivate(): Thenable<void> {
  if (!omlExtension) return Promise.resolve(undefined);
  return omlExtension.deactivateLanguageClient();
}
