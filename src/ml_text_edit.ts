import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { mlUiStyles } from "./ml_ui_styles";

@customElement("ml-text-edit")
export class MlTextEdit extends LitElement {
  static override styles = [
    mlUiStyles,
    css`
      :host {
        display: flex;
        align-content: center;
      }
      .grow {
        flex-grow: 1;
      }
      .textContainer {
        display: flex;
        align-items: center;
        align-content: center;
        margin-left: 0.5rem;
      }
      button {
        min-width: 6ch;
      }
    `,
  ];

  @property({
    attribute: "editing",
    type: Boolean,
    reflect: true,
  })
  accessor editing = false;

  @property({
    attribute: "text",
  })
  accessor text = "";

  @property({ type: Boolean })
  accessor disabled = false;

  @query("input")
  private accessor _input!: HTMLInputElement;

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has("editing") && this.editing) {
      this._input.select();
    }
  }

  protected override render(): unknown {
    if (!this.editing)
      return html`
        <div class="grow textContainer" @click=${() => (this.editing = true)}>
          ${this.text}
        </div>
        <button @click=${() => (this.editing = true)}>Edit</button>
      `;

    return html`
      <input
        class="grow"
        type="text"
        value="${this.text}"
        autofocus
        @change=${this._onInputChange}
        @keydown=${this._onInputKeyDown}
      />
      <button
        @mousedown=${() => this._finishEditing()}
        style="text-decoration-line: none;"
      >
        Save
      </button>
    `;
  }

  private _onInputChange(): void {
    this._finishEditing();
  }

  private _onInputKeyDown(event: KeyboardEvent): void {
    if (event.code === "Escape") this._finishEditing(true);
  }

  private async _finishEditing(discardChanges?: boolean) {
    if (!this.editing) return;

    let changed = false;
    if (!discardChanges && this.text !== this._input.value) {
      this.text = this._input.value;
      changed = true;
    }

    this.editing = false;

    if (changed) {
      await this.updateComplete;

      this.dispatchEvent(
        new Event("change", {
          bubbles: true,
          composed: true,
        }),
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ml-text-edit": MlTextEdit;
  }
}
