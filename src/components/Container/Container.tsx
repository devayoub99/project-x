import classes from "./Container.module.css";

export default function Container({
  variant,
  children,
  ...props
}: {
  variant?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`${classes.container} ${variant ? classes[variant] : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
