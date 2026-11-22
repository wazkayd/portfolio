import styles from "./OfferingCard.module.css";

type OfferingCardProps = {
  index: number;
  title: string;
  description: string;
  contextLabel?: string;
  context?: string;
  detailsLabel: string;
  details: readonly string[];
};

export function OfferingCard({ index, title, description, contextLabel, context, detailsLabel, details }: OfferingCardProps) {
  return <article className={styles.card}>
    <span className={styles.index}>{String(index).padStart(2, "0")}</span>
    <h2>{title}</h2>
    <p className={styles.description}>{description}</p>
    {context && <div className={styles.context}>
      {contextLabel && <p className={styles.contextLabel}>{contextLabel}</p>}
      <p>{context}</p>
    </div>}
    <h3>{detailsLabel}</h3>
    <ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul>
  </article>;
}
