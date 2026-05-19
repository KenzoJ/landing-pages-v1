import { TextFieldType } from '@hubspot/cms-components/fields';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../../utils/content-fields.js';
import { ButtonContentType } from '../../../fieldLibrary/ButtonContent/types.js';
import { Button } from '../../Button/ButtonComponent.js';
import styles from '../search-listings.module.css';

export type SearchListingsFieldValues = {
  studioPlaceholder: TextFieldType['default'];
  cityPlaceholder: TextFieldType['default'];
  button: ButtonContentType;
};

type SearchListingsIslandProps = {
  fieldValues: SearchListingsFieldValues;
};

export default function SearchListingsIsland({ fieldValues }: SearchListingsIslandProps) {
  const { studioPlaceholder, cityPlaceholder, button } = fieldValues;

  return (
    <div className={styles.outer}>
      <form className={styles.form} aria-label="Search listings">
        <input
          className={styles.input}
          type="text"
          name="studio"
          placeholder={studioPlaceholder}
          aria-label={studioPlaceholder}
        />
        <input
          className={styles.input}
          type="text"
          name="city"
          placeholder={cityPlaceholder}
          aria-label={cityPlaceholder}
        />
        <div className={styles.buttonWrapper}>
          <Button
            buttonStyle="primary"
            buttonSize="medium"
            href={getLinkFieldHref(button.buttonContentLink)}
            rel={getLinkFieldRel(button.buttonContentLink)}
            target={getLinkFieldTarget(button.buttonContentLink)}
            showIcon={button.buttonContentShowIcon}
            iconFieldPath="searchListings.button.buttonContentIcon"
            iconPosition={button.buttonContentIconPosition}
          >
            {button.buttonContentText}
          </Button>
        </div>
      </form>
    </div>
  );
}
