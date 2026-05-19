import {
  ModuleFields,
  RepeatedFieldGroup,
  TextField,
} from '@hubspot/cms-components/fields';

const sectionDefault = {
  question: 'Question text goes here',
  answer: 'Answer text goes here',
};

const sectionsDefault = [sectionDefault, sectionDefault, sectionDefault];

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Headline"
      default="Frequently Asked Questions"
    />
    <RepeatedFieldGroup
      label="Sections"
      name="sections"
      occurrence={{
        min: 1,
        max: 20,
        default: 3,
      }}
      default={sectionsDefault}
    >
      <TextField
        name="question"
        label="Question"
        default={sectionDefault.question}
      />
      <TextField
        name="answer"
        label="Answer"
        default={sectionDefault.answer}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
