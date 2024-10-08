import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { mlUiStyles } from "./ml_ui_styles";
import { MlTextEdit } from "./ml_text_edit";

type ChecklistItem = {
  id: number;
  text: string;
  checked: boolean;
};

@customElement("ml-checklist")
export class MlChecklist extends LitElement {
  @property({ type: Boolean, reflect: true })
  accessor hideChecked = false;

  // @event hideChecked state changed.
  static readonly HIDE_CHECKED_CHANGE = "hideCheckedChange";

  // @event An item is added to the list.
  static readonly ITEM_ADD = "itemAdd";

  // @event An items checked state or text change.
  static readonly ITEM_CHANGE = "itemChange";

  // @event An item is removed from the list.
  static readonly ITEM_DELETE = "itemDelete";

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

  @query("#newitem")
  private accessor _input!: HTMLInputElement;

  private _nextId = 1;

  protected override render(): unknown {
    return html`
      <label>
        <input
          type="checkbox"
          @change=${this._onHideCheckedCheckboxChange}
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

  private async _onHideCheckedCheckboxChange(ev: Event) {
    this.hideChecked = (ev.target as HTMLInputElement).checked;

    await this.updateComplete;

    this.dispatchEvent(
      new CustomEvent(MlChecklist.HIDE_CHECKED_CHANGE, {
        bubbles: true,
        composed: true,
        detail: { hideChecked: this.hideChecked },
      }),
    );
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
    item.text = (ev.target as MlTextEdit).text;

    ev.stopPropagation();

    this.dispatchEvent(
      new CustomEvent(MlChecklist.ITEM_CHANGE, {
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
      new CustomEvent(MlChecklist.ITEM_CHANGE, {
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
      new CustomEvent(MlChecklist.ITEM_ADD, {
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
      new CustomEvent(MlChecklist.ITEM_DELETE, {
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
