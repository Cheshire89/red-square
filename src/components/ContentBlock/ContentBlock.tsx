import styles from "./ContentBlock.module.scss";
export function ContentBlock({
  background,
  children,
}: {
  background?: string;
  children: any;
}) {
  return (
    <section
      className={`${styles.container} ${background ? `bg-${background}` : ""}`}
    >
      {children}
    </section>
  );
}
