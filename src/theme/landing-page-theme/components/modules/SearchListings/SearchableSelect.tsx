import { useEffect, useId, useMemo, useRef, useState } from 'react';
import styles from './search-listings.module.css';

export type SearchableSelectOption = {
  label: string;
  value: string;
};

type SearchableSelectProps = {
  options: SearchableSelectOption[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
  disabled?: boolean;
};

export function SearchableSelect({
  options,
  placeholder,
  value,
  onChange,
  ariaLabel,
  disabled = false,
}: SearchableSelectProps) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const filteredOptions = useMemo(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query) {
      return options;
    }

    return options.filter((option) => option.label.toLowerCase().includes(query));
  }, [inputValue, options]);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption.label);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (activeIndex >= filteredOptions.length) {
      setActiveIndex(Math.max(filteredOptions.length - 1, 0));
    }
  }, [activeIndex, filteredOptions.length]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        if (selectedOption) {
          setInputValue(selectedOption.label);
        } else {
          setInputValue('');
        }
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [selectedOption]);

  const selectOption = (option: SearchableSelectOption) => {
    onChange(option.value);
    setInputValue(option.label);
    setIsOpen(false);
  };

  const handleInputChange = (nextValue: string) => {
    setInputValue(nextValue);
    setIsOpen(true);
    setActiveIndex(0);

    if (selectedOption && nextValue !== selectedOption.label) {
      onChange('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      if (selectedOption) {
        setInputValue(selectedOption.label);
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.min(current + 1, filteredOptions.length - 1));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.max(current - 1, 0));
      return;
    }

    if (event.key === 'Enter' && isOpen && filteredOptions[activeIndex]) {
      event.preventDefault();
      selectOption(filteredOptions[activeIndex]);
    }
  };

  return (
    <div ref={containerRef} className={styles.selectWrapper}>
      <input
        className={styles.input}
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        onChange={(event) => handleInputChange(event.target.value)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {filteredOptions.length > 0 && (
        <ul
          id={listboxId}
          className={`${styles.selectDropdown} ${isOpen ? styles.selectDropdownOpen : ''}`}
          role="listbox"
          aria-hidden={!isOpen}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={
                index === activeIndex ? styles.selectOptionActive : styles.selectOption
              }
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
