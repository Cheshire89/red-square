import styles from "./ContentBlock.module.scss";
interface ContentBlockParams {
  background?: string;
  children: any;
  height?: string;
  center?: boolean;
}
export function ContentBlock({
  background,
  children,
  height,
  center,
}: ContentBlockParams) {
  const classes = `
    ${styles.container}
    ${background ? ` bg-${background}` : ""}
    ${center ? ` ${styles.center}` : ""}
  `;
  return (
    <section
      className={`${classes}`}
      style={{
        height: height && height,
        minHeight: height && "0px",
      }}
    >
      {children}
    </section>
  );
}
