import styles from './PageNotFound.module.scss';
function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.message}>
          Oops! The page you are looking for could not be found.
        </p>
        <a className={styles.link} href="/">
          Go Back To Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
