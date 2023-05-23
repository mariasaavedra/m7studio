import styles from './AnimatedText.module.css';

const word = 'shopify - squarespace - ecommerce - branding -';

interface AnimatedTextProps {
  position: 'top' | 'bottom';
}

export default function AnimatedText(props: AnimatedTextProps) {
  function getClasses() {
    if (props.position === 'top') {
      return styles.top;
    } else {
      return styles.bottom;
    }
  }

  return (
    <div className={styles.AnimatedTextComponent + ' ' + getClasses()}>
      <div className={styles.wrapper + ' tracking-widest'}>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
      </div>
    </div>
  );
}
