import { createPopper } from "@popperjs/core";
import clsx from "clsx";
import { Input } from "components/atoms";
import { cloneElement, useCallback, useMemo, useRef, useState } from "react";
import { __DEV__ } from "utils";

import "assets/elements/autocomplete.scss";

export interface AutocompletePropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  shouldItemRender?: (item: any, value: any) => void;
  getItemValue: (e: any) => string | undefined;
  onSelect?: (value?: any) => void;
  onChange?: (value?: any) => void;
  className?: string;
  items: Array<any>;
  value: any;
}

type OptionsType = {
  _ignoreBlur: boolean;
  _ignoreFocus: boolean;
};

const Autocomplete = (props: AutocompletePropsType) => {
  const {
    items,
    shouldItemRender,
    getItemValue,
    onBlur,
    onFocus,
    onChange,
    onSelect,
    value,
    className,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [options, setOptions] = useState<OptionsType>({
    _ignoreBlur: false,
    _ignoreFocus: false,
  });

  const getFilteredItems = useCallback(() => {
    let renderedOtems = [...items];
    if (shouldItemRender) {
      renderedOtems = items.filter((item) => shouldItemRender(item, value));
    }
    return renderedOtems;
  }, [value, items, shouldItemRender]);

  const handleInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (!options._ignoreFocus) {
        if (!isOpen) setIsOpen(true);
        if (onFocus) {
          onFocus(event);
        }
      }
    },
    [options, isOpen, setIsOpen, onFocus]
  );

  const handleInputBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (options._ignoreBlur) {
        setOptions({
          ...options,
          _ignoreFocus: true,
        });
        inputRef.current && inputRef.current.focus();
        return;
      }
      setIsOpen(false);
      setHighlightedIndex(null);
      if (onBlur) {
        onBlur(event);
      }
    },
    [inputRef, options, setOptions, setIsOpen, setHighlightedIndex, onBlur]
  );

  const keyDownHandlers = useMemo(() => {
    return {
      ArrowDown(event: KeyboardEvent) {
        event.preventDefault();
        const items = getFilteredItems();
        if (!items.length) return;
        let index = highlightedIndex === null ? -1 : highlightedIndex;
        index = (index + 1) % items.length;
        if (index > -1 && index !== highlightedIndex) {
          setHighlightedIndex(index);
          setIsOpen(true);
        }
      },

      ArrowUp(event: KeyboardEvent) {
        event.preventDefault();
        const items = getFilteredItems();
        if (!items.length) return;
        let index = highlightedIndex === null ? items.length : highlightedIndex;
        index = (index - 1 + items.length) % items.length;
        if (index !== items.length) {
          setHighlightedIndex(index);
          setIsOpen(true);
        }
      },

      Enter(event: KeyboardEvent) {
        // Key code 229 is used for selecting items from character selectors (Pinyin, Kana, etc)
        if (event.keyCode !== 13) return;
        // In case the user is currently hovering over the menu
        setOptions({ ...options, _ignoreBlur: false });
        if (!isOpen) {
          // menu is closed so there is no selection to accept -> do nothing
          return;
        } else if (highlightedIndex === null) {
          // input has focus but no menu item is selected + enter is hit -> close the menu, highlight whatever's in input
          setIsOpen(false);
          inputRef.current && inputRef.current.select();
        } else {
          // text entered + menu item has been highlighted + enter is hit -> update value to that of selected menu item, close the menu
          event.preventDefault();
          const item = getFilteredItems()[highlightedIndex];
          const value: any = getItemValue(item);
          setIsOpen(false);
          setHighlightedIndex(null);
          inputRef.current &&
            inputRef.current.setSelectionRange(value.length, value.length);
          if (onSelect) onSelect(item);
          if (onChange) onChange(value);
        }
      },
      Escape() {
        // In case the user is currently hovering over the menu
        setOptions({ ...options, _ignoreBlur: false });
        setIsOpen(false);
        setHighlightedIndex(null);
      },
      Tab() {
        // In case the user is currently hovering over the menu
        setOptions({ ...options, _ignoreBlur: false });
      },
    };
  }, [
    highlightedIndex,
    inputRef,
    isOpen,
    options,
    setOptions,
    setHighlightedIndex,
    getFilteredItems,
    getItemValue,
    setIsOpen,
    onChange,
    onSelect,
  ]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent): void => {
      if ((keyDownHandlers as any)[event.key])
        (keyDownHandlers as any)[event.key].call(this, event);
      else if (!isOpen) {
        setIsOpen(true);
      }
    },
    [isOpen, setIsOpen, keyDownHandlers]
  );

  const isInputFocused = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    return el.ownerDocument && el === el.ownerDocument.activeElement;
  }, [inputRef]);

  const handleInputClick = useCallback(() => {
    if (isInputFocused() && !isOpen) {
      onChange && onChange(value);
      setIsOpen(true);
    }
  }, [isOpen, value, isInputFocused, setIsOpen, onChange]);

  const selectItemFromMouse = useCallback(
    (item: any) => {
      const value = getItemValue(item);
      // The menu will re-render before a mouseLeave event
      // happens. Clear the flag to release control over focus
      setOptions({ ...options, _ignoreBlur: false });
      setIsOpen(false);
      setHighlightedIndex(null);
      if (onSelect) onSelect(item);
      if (onChange) onChange(value);
    },
    [
      options,
      setOptions,
      setIsOpen,
      setHighlightedIndex,
      getItemValue,
      onChange,
      onSelect,
    ]
  );

  const renderMenu = useCallback(() => {
    const items = getFilteredItems().map((item, index) => {
      const element = (
        <li
          className={clsx(
            "c-autocomplete--item",
            highlightedIndex === index && "c-autocomplete--item--highlight"
          )}
          key={`${getItemValue(item)}${index}`}
        >
          {getItemValue(item)}
        </li>
      );
      return cloneElement(element, {
        onMouseEnter: () => setHighlightedIndex(index),
        onClick: () => selectItemFromMouse(item),
      });
    });
    const menuContainer = <ul className="c-autocomplete--menu">{items}</ul>;

    const modifiers = [
      {
        name: "offset",
        options: {
          offset: [0, 5],
        },
      },
      {
        name: "flip",
        options: {
          altBoundary: true,
        },
      },
    ];
    return cloneElement(menuContainer, {
      ref: (e: HTMLElement | null) => {
        if (e && inputRef.current) {
          menuRef.current = e;
          createPopper(inputRef.current, e, {
            placement: "bottom-start",
            modifiers,
          });
        }
      },
      // Ignore blur to prevent menu from de-rendering before we can process click
      onTouchStart: () => setOptions({ ...options, _ignoreBlur: true }),
      onMouseEnter: () => setOptions({ ...options, _ignoreBlur: true }),
      onMouseLeave: () => setOptions({ ...options, _ignoreBlur: false }),
    });
  }, [
    getFilteredItems,
    selectItemFromMouse,
    getItemValue,
    highlightedIndex,
    options,
  ]);

  return (
    <>
      <Input
        role="combobox"
        aria-autocomplete="list"
        autoComplete="off"
        className={clsx("c-autocomplete", className)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={(event) => {
          onChange && onChange(event.target.value as any);
        }}
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
        onClick={handleInputClick}
        value={value}
        ref={inputRef}
        {...rest}
      ></Input>
      {isOpen && renderMenu()}
    </>
  );
};

Autocomplete.defaultProps = {
  value: "",
};

if (__DEV__) {
  Autocomplete.displayName = "Autocomplete";
}

export { Autocomplete };
