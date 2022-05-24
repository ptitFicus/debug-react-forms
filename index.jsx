import { Form, type, format, constraints } from "@maif/react-forms";

const FEATURE_NAME_REGEXP = /^[a-zA-Z0-9_-]+$/;

function FeatureEdition(feature) {
  const schema = {
    name: {
      name: type.string,
      label: "name",
      placeholder: "Your age",
      defaultValue: feature.name,
      constraints: [
        constraints.matches(
          FEATURE_NAME_REGEXP,
          `Feature name must match ${FEATURE_NAME_REGEXP} regex`
        ),
      ],
    },
  };

  const flow = ["name"];

  return (
    <Form
      schema={schema}
      flow={flow}
      onSubmit={(item) => console.log({ item })}
    />
  );
}
