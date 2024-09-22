import { MlChecklist } from "./ml_checklist";
import { MlTextEdit } from "./ml_text_edit";

export const DontShakeChecklist = MlChecklist;
export const DontShakeTextEdit = MlTextEdit;

/* eslint no-unused-labels: "off" */
DEV: new EventSource("/esbuild").addEventListener("change", (e) => {
  console.log("Build changed. Reloading page. ", e.data);
  location.reload();
});
