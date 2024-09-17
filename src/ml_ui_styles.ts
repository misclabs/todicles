import { css } from "lit";

export const mlUiStyles = css`
  fieldset {
    padding: 0.35rem 0.75rem 0.625rem;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.19;
    /* margin: 0; */
    margin: 0.25rem;
    color: var(--ml-color);
  }
  button,
  input {
    overflow: visible; /* Show overflow in Edge. */
  }
  input[type="text"],
  input:not([type]),
  input[type="password"] {
    min-width: 2.75rem;
    min-height: calc(2.75rem - 6px); /* text has 2px border and 1px padding */
  }
  button,
  select {
    text-transform: none; /* Remove inheritance of text transform in Edge. */
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button; /* Allow styling these types in iOS and Safari. */
  }
  button {
    border: 1px solid var(--ml-color);
    border-radius: 0.25rem;

    background: var(--ml-background-color);
    color: var(--ml-color);

    cursor: pointer;

    padding: 0.25rem 0.5rem;

    text-decoration: none;
    --webkit-appearance: button;
    white-space: nowrap;
    /* min-width: 2.75rem; */
    min-width: 6ch;
    min-height: 2.75rem;

    outline: 3px solid var(blue);
  }
  button[disabled] {
    /* opacity: 0.75; */
    border-color: var(--ml-disabled-color);
    color: var(--ml-disabled-color);
    pointer-events: none;
  }
  button:hover {
    border-color: var(--ml-highlight-color);
    color: var(--ml-highlight-color);
  }
  button:active {
    /* pressed */
    background-color: var(--ml-light-bg-color);
    border-color: var(--ml-highlight-color);
    color: var(--ml-highlight-color);
  }
`;
