// import * as yup from "yup";
// const recipeSchema = yup
//   .object()
//   .noUnknown()
//   .shape({
//     title: yup.string().required(),
//     description: yup.string().required(),
//     imageUrl:yup.string().required(),
//     timeInMins: yup.number().required(),
//     category: yup.array().of(yup.string()),
//     ingredients: yup.array().of(yup.object().shape({
//     ingredient: yup.string(),
//     amount: yup.number(),
          
//     })).required(),
//     instructions: yup.array().of(yup.string()).required(),
//   });

// module.exports = { recipeSchema };