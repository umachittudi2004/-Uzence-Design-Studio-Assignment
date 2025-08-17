import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  clearable?: boolean;
  passwordToggle?: boolean;
  loading?: boolean;
  id?: string;
}

// Utility classes for sizes & variants
const sizeClass = (size: "sm" | "md" | "lg" = "md") =>
  size === "sm" ? "input-sm" : size === "lg" ? "input-lg" : "input-md";

const variantClass = (variant: "filled" | "outlined" | "ghost" = "outlined") =>
  variant === "filled"
    ? "input-filled"
    : variant === "ghost"
    ? "input-ghost"
    : "input-outlined";

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  passwordToggle = false,
  loading = false,
  id,
}) => {
  const [show, setShow] = React.useState(false);
  const isPassword = type === "password";
  const inputType =
    isPassword && passwordToggle ? (show ? "text" : "password") : type;

  const inputId =
    id ||
    `input-${label?.toLowerCase().replace(/\s+/g, "-") ||
      Math.random().toString(36).slice(2, 8)}`;

  // Accessibility: pick correct describedBy
  const describedBy =
    invalid && errorMessage
      ? inputId + "-error"
      : helperText
      ? inputId + "-help"
      : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid ? "true" : undefined}
          aria-describedby={describedBy}
          aria-errormessage={invalid && errorMessage ? inputId + "-error" : undefined}
          className={[
            "input-base",
            sizeClass(size),
            variantClass(variant),
            invalid ? "border-red-500 focus:ring-red-200" : "focus-ring",
            "pr-16", // spacing for buttons/spinner
          ].join(" ")}
          type={inputType}
        />

        {/* Loading spinner */}
        {loading && (
          <span
            className="absolute inset-y-0 right-2 my-auto h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-transparent"
            aria-hidden="true"
          />
        )}

        {/* Clear button */}
        {clearable && value && !loading && (
          <button
            type="button"
            className="absolute inset-y-0 right-2 my-auto text-sm px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() =>
              onChange &&
              onChange({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            aria-label="Clear input"
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {isPassword && passwordToggle && !loading && (
          <button
            type="button"
            className="absolute inset-y-0 right-10 my-auto text-xs px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {/* Helper or error text */}
      {invalid && errorMessage ? (
        <p
          id={inputId + "-error"}
          className="mt-1 text-xs text-red-600"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : helperText ? (
        <p id={inputId + "-help"} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
