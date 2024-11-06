import { Link } from "react-router-dom";

import classes from "./Error.module.css";

export default function Error() {
  return (
    <div className={classes.errorContainer}>
      <h2 className={classes.errorCode}>404</h2>
      <p className={classes.errorMessage}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={classes.button}>
        Go to Home
      </Link>
    </div>
  );
}
