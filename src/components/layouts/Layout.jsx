import Navbar from "./Navbar";

import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
