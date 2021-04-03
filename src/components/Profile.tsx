import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62625213?v=4" alt="Matheus Gomes"/>
      <div>
        <strong>Matheus Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}