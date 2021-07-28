import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styles from "./form.module.scss";

export function Input({ name, ...rest }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input
        className={styles.input}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <span
          style={{
            color: "#fc3c00",
            position: "absolute",
            marginTop: "10px",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
