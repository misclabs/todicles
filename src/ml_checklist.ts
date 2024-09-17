import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { mlUiStyles } from "./ml_ui_styles";

type ChecklistItem = {
  id: number;
  text: string;
  checked: boolean;
};

@customElement("ml-checklist")
export class MlChecklist extends LitElement {
  static override styles = [
    mlUiStyles,
    css`
      ul {
        padding: 0;
        list-style-type: none;
      }
      li {
        display: flex;
        align-content: center;
      }
      input[type="checkbox"] {
        margin-right: 1rem;
      }
      li > ml-text-edit {
        flex-grow: 1;
      }
      .checked {
        color: #777;
      }
      .bottomBar {
        display: flex;
        align-content: center;
      }
      .grow {
        flex-grow: 1;
      }
    `,
  ];

  @state()
  private accessor listItems: ChecklistItem[] = [];

  @state()
  private accessor addButtonEnabled: boolean = false;

  @property({ type: Boolean })
  accessor hideChecked = false;

  @query("#newitem")
  private accessor _input!: HTMLInputElement;

  private _nextId = 1;

  protected override render(): unknown {
    return html`
      <label>
        <input
          type="checkbox"
          @change=${(ev: Event) => {
            this.hideChecked = (ev.target as HTMLInputElement).checked;
          }}
          ?checked=${this.hideChecked}
        />
        Hide Checked Items
      </label>
      <hr />
      ${this._genItemListHtml()}
      <hr />
      <div class="bottomBar">
        <input
          id="newitem"
          class="grow"
          @keydown=${this._onAddInputKeyDown}
          @input=${this._onAddInputInput}
        />
        <button
          part="add-button"
          @mousedown=${this._addItem}
          ?disabled=${!this.addButtonEnabled}
        >
          Add
        </button>
      </div>
    `;
  }

  private _genItemListHtml(): TemplateResult {
    const items = this.hideChecked
      ? this.listItems.filter((item) => !item.checked)
      : this.listItems;

    if (items.length === 0) return html`<slot name="empty"></slot>`;

    // NOTE(Jess): Using repeat to render li elements here to keep the the
    // checkbox state in sync when hideChecked state changes. This would
    // also be a problem if reordering of items was added.

    const idFn = (item: ChecklistItem) => item.id;
    const renderFn = (item: ChecklistItem) => html`
      <li class=${item.checked ? "checked" : ""}>
        <input
          type="checkbox"
          ?checked=${item.checked}
          @change=${(event: Event) => this._onItemCheckboxChange(item, event)}
        />

        <ml-text-edit
          @change=${(ev: Event) => this._onItemTextChange(item, ev)}
          text=${item.text}
        >
        </ml-text-edit>

        <button @mousedown=${() => this._deleteItem(item.id)}>Delete</button>
      </li>
    `;

    return html`
      <ul @change=${this._onItemTextChange}>
        ${repeat(items, idFn, renderFn)}
      </ul>
    `;
  }

  private _onAddInputKeyDown(event: KeyboardEvent): void {
    if (event.code === "Enter" && this.addButtonEnabled) {
      this._addItem();
    }
  }

  private _isAddInputValid(): boolean {
    const value = this._input.value.trim();
    return typeof value === "string" && value.length > 0;
  }

  private _onAddInputInput(): void {
    this.addButtonEnabled = this._isAddInputValid();
  }

  private _onItemTextChange(item: ChecklistItem, ev: Event): void {
    ev.stopPropagation();

    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: { item: item },
      }),
    );
  }

  private _onItemCheckboxChange(item: ChecklistItem, ev: Event): void {
    item.checked = (ev.target as HTMLInputElement).checked;

    ev.stopPropagation();

    this.dispatchEvent(
      new CustomEvent("change", {
        bubbles: true,
        composed: true,
        detail: { item: item },
      }),
    );

    this.requestUpdate();
  }

  private _addItem() {
    const newItem = {
      id: this._nextId++,
      text: this._input.value,
      checked: false,
    };
    this.listItems = [...this.listItems, newItem];

    this._input.value = "";
    this.addButtonEnabled = false;

    this.dispatchEvent(
      new CustomEvent("add", {
        bubbles: true,
        composed: true,
        detail: { item: newItem },
      }),
    );
  }

  private _deleteItem(id: number): void {
    let deletedItem = null;
    this.listItems = this.listItems.filter((item) => {
      if (id === item.id) {
        deletedItem = item;
        return false;
      }

      return true;
    });

    this.dispatchEvent(
      new CustomEvent("delete", {
        bubbles: true,
        composed: true,
        detail: { item: deletedItem },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ml-checklist": MlChecklist;
  }
}
