import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Icon } from '@hubspot/cms-components';
import { TextFieldType } from '@hubspot/cms-components/fields';
import { ButtonContentType } from '../../../fieldLibrary/ButtonContent/types.js';
import { buildListingsSearchUrl } from '../../../utils/build-listings-search-url.js';
import { fetchSearchMetadata, type SearchMetadata } from '../../../utils/search-metadata.js';
import cx from '../../../utils/classnames.js';
import { SearchableSelect } from '../SearchableSelect.js';
import styles from '../search-listings.module.css';

export type SearchListingsFieldValues = {
  listingsBaseUrl: TextFieldType['default'];
  studioPlaceholder: TextFieldType['default'];
  cityPlaceholder: TextFieldType['default'];
  button: ButtonContentType;
};

type SearchListingsIslandProps = {
  fieldValues: SearchListingsFieldValues;
};

export default function SearchListingsIsland({ fieldValues }: SearchListingsIslandProps) {
  const { listingsBaseUrl, studioPlaceholder, cityPlaceholder, button } = fieldValues;
  const [metadata, setMetadata] = useState<SearchMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [categorySlug, setCategorySlug] = useState('');
  const [cityId, setCityId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    fetchSearchMetadata()
      .then((data) => {
        if (isMounted) {
          setMetadata(data);
          setLoadError('');
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoadError('Unable to load search options.');
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const categoryOptions = useMemo(
    () =>
      metadata?.categories.map((category) => ({
        label: category.name,
        value: category.slug,
      })) ?? [],
    [metadata],
  );

  const cityOptions = useMemo(
    () =>
      metadata?.cities.map((city) => ({
        label: city.name,
        value: String(city.id),
      })) ?? [],
    [metadata],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationMessage('');

    const selectedCategory =
      metadata?.categories.find((category) => category.slug === categorySlug) ??
      metadata?.categories.find(
        (category) =>
          !categorySlug &&
          category.name.toLowerCase() === studioPlaceholder.trim().toLowerCase(),
      );
    const selectedCity =
      metadata?.cities.find((city) => String(city.id) === cityId) ??
      metadata?.cities.find(
        (city) =>
          !cityId && city.name.toLowerCase() === cityPlaceholder.trim().toLowerCase(),
      );

    if (!selectedCategory || !selectedCity) {
      setValidationMessage('Select a category and city to continue.');
      return;
    }

    const url = buildListingsSearchUrl(listingsBaseUrl, {
      categorySlug: selectedCategory.slug,
      cityId: selectedCity.id,
    });

    if (!url) {
      setValidationMessage('Listings base URL is invalid.');
      return;
    }

    const target = button.buttonContentLink?.open_in_new_tab ? '_blank' : '_self';
    window.open(url, target);
  };

  return (
    <div className={styles.outer}>
      <form className={styles.form} aria-label="Search listings" onSubmit={handleSubmit}>
        <SearchableSelect
          options={categoryOptions}
          placeholder={studioPlaceholder}
          value={categorySlug}
          onChange={setCategorySlug}
          ariaLabel={studioPlaceholder}
          disabled={isLoading || Boolean(loadError)}
        />
        <SearchableSelect
          options={cityOptions}
          placeholder={cityPlaceholder}
          value={cityId}
          onChange={setCityId}
          ariaLabel={cityPlaceholder}
          disabled={isLoading || Boolean(loadError)}
        />
        <div className={styles.buttonWrapper}>
          <button
            type="submit"
            className={styles.exploreButton}
            disabled={isLoading || Boolean(loadError)}
          >
            <span className={styles.exploreButtonLabel}>
              {button.buttonContentShowIcon &&
                button.buttonContentIconPosition === 'left' && (
                  <Icon
                    className={cx(
                      styles.exploreButtonIcon,
                      styles.exploreButtonIconLeft,
                    )}
                    purpose="DECORATIVE"
                    fieldPath="searchListings.button.buttonContentIcon"
                  />
                )}
              {button.buttonContentText}
              {button.buttonContentShowIcon &&
                button.buttonContentIconPosition === 'right' && (
                  <Icon
                    className={cx(
                      styles.exploreButtonIcon,
                      styles.exploreButtonIconRight,
                    )}
                    purpose="DECORATIVE"
                    fieldPath="searchListings.button.buttonContentIcon"
                  />
                )}
            </span>
            <span className={styles.exploreButtonShimmer} aria-hidden="true" />
            <span
              className={cx(
                styles.exploreButtonCorner,
                styles.exploreButtonCornerTopLeft,
              )}
              aria-hidden="true"
            />
            <span
              className={cx(
                styles.exploreButtonCorner,
                styles.exploreButtonCornerTopRight,
              )}
              aria-hidden="true"
            />
            <span
              className={cx(
                styles.exploreButtonCorner,
                styles.exploreButtonCornerBottomLeft,
              )}
              aria-hidden="true"
            />
            <span
              className={cx(
                styles.exploreButtonCorner,
                styles.exploreButtonCornerBottomRight,
              )}
              aria-hidden="true"
            />
          </button>
        </div>
        {(validationMessage || loadError) && (
          <p className={styles.validationMessage} role="alert">
            {validationMessage || loadError}
          </p>
        )}
      </form>
    </div>
  );
}
