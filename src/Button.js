import PropTypes from "prop-types";
import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className("flex items-center m-2 px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary && !outline,
    "border-gray-900 bg-gray-900 text-white": secondary && !outline,
    "border-green-500 bg-green-500 text-white": success && !outline,
    "border-yellow-400 bg-yellow-400 text-white": warning && !outline,
    "border-red-500 bg-red-500 text-white": danger && !outline,

    // حالت‌های outline
    "bg-white": outline,
    "border-blue-500 text-blue-500": outline && primary,
    "border-gray-900 text-gray-900": outline && secondary,
    "border-green-500 text-green-500": outline && success,
    "border-yellow-400 text-yellow-400": outline && warning,
    "border-red-500 text-red-500": outline && danger,

    "rounded-full": rounded,
  });
  return <button {...rest} className={classes}>{children}</button>;
}
Button.propTypes = {
  checkVariationValue: (primary, secondary, success, warning, danger) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "only 1 primary,secondary,success,warning,danger must use"
      );
    }
  },
};

export default Button;
