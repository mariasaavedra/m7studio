import styles from './AnimatedText.module.css';

const word = 'DIGITAL - DESIGN - DEVELOPMENT - MARKETING - BRANDING - STRATEGY';

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
      <div className={styles.wrapper}>
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
