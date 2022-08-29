import * as yup from "yup";
const recipeSchema = yup
  .object()
  .noUnknown()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    imageUrl: yup.string().required(),
    category: yup.string().required(),
    ingredients: yup
      .array()
      .of(
        yup.object().shape({
          ingredient: yup.string().required(),
          amount: yup.number().required(),
          unit: yup.string().required(),
        })
      )
      .required(),
    instructions: yup
      .array()
      .of(
        yup.object().shape({
          order: yup.number(),
          value: yup.string().required(),
        })
      )
      .required(),
  });

const categorySchema = yup.object().noUnknown().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string().required(),
});

module.exports = { recipeSchema, categorySchema };
