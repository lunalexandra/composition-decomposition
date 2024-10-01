import classes from "./container.module.css";

interface ContainerProps {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={classes["container"]}>{children}</div>;
};
