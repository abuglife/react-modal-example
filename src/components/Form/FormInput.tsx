import React, { ReactNode, useEffect, useRef, useState } from "react";
import { InputBase } from "@mui/material";
import { FormikProps } from "formik";
import * as FormUtils from "../../utils/form";
import autoAnimate from "@formkit/auto-animate";
import styles from './FormInput.module.scss';
import classNames from "classnames";

export type FormInputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  fieldKey?: string;
  errors?: string[];
  type?: string;
  prefix?: string;
  prependIcon?: ReactNode;
  isLoading?: boolean;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  formik?: FormikProps<any>;
};

function FormInput({
  id,
  placeholder,
  name,
  type,
  errors,
  prependIcon,
  formik,
  autoFocus,
  label,
  disabled,
  isLoading,
}: FormInputProps) {
  const isError =
    ((formik?.touched ? (formik?.touched as any)[name] : null) &&
      (Boolean(formik?.errors ? (formik?.errors as any)[name] : null) as any)) ||
    (errors?.length ? true : false);

  const [isFocus, setIsFocus] = useState(false);
  const getValue = FormUtils.getDataValue(formik, name);
  const inputId = id || name;
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 100 });
  }, [parent, isLoading]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingLabel}></div>
        <div className={styles.loadingInput}></div>
      </div>
    );
  }

  return (
    <div ref={parent} className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={
        classNames(styles.inputContainer,
          {
            [styles.isError]: isError,
            [styles.isFocus]: isFocus
          }
        )
      }>
        {prependIcon && <div className={styles.icon}>{prependIcon}</div>}
        <InputBase
          name={name}
          placeholder={placeholder}
          className={styles.input}
          type={type}
          id={inputId}
          inputRef={(input: any) => {
            if (autoFocus) {
              input && input.focus();
            }
          }}
          disabled={disabled}
          value={formik?.values ? getValue : null}
          onChange={formik?.handleChange}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          error={isError}
        />
      </div>
      {isError && (formik?.errors ? (formik?.errors as any)[name] : null) ? (
        <Hint>* {(formik?.errors as any)[name]}</Hint>
      ) : null}

      {errors?.length && <Hint>* {errors[0]}</Hint>}
    </div>
  )
}

interface HintProps {
  children: ReactNode
}

const Hint = ({ children }: HintProps) => {
  return <div className={styles.hint}>{children}</div>
}

export default FormInput;
