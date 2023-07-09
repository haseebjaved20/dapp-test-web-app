import { useFormik } from "formik";

const FormikUtil = (INITIAL_FORM_STATE, FORM_VALIDATION, methodName) => {
  ///Formik custom hook having submit method and initialization stuff
  return useFormik({
    enableReinitialize: true,
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,

    onSubmit: (values, { resetForm ,setSubmitting }) => {
      methodName(values,resetForm, setSubmitting);
    }
  });
};

export default FormikUtil;