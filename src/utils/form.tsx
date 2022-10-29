import { FormikProps } from "formik";

export const getDataValue = (formik?: FormikProps<any>, name: string = '') => {
  if (name.includes(".")) {
    const splited = name.split(".");
    let data = formik?.values
    for (let i = 0; i < splited.length; i++) {
      data = data && data[splited[i]] ? data[splited[i]] : null
    }
    return data
  }
  return formik?.values[name];
}