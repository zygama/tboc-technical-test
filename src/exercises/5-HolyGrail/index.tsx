/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import { Fragment } from "react";
import css from "./style.module.css";
import src from "./holy-grail.png";

const HolyGrail = () => {
  /**
   * I could have not use CSS module classes inside div#css.wrapper.
   * But this way those CSS rules will only apply to this particular component (HolyGrail).
   * This is more secure.
   */
  return (
    <Fragment>
      <h1>Holy Grail</h1>
      <img src={src} alt={"Holy Grail"} className={css.picture} />

      {/* Flexbox solution */}
      {/* <div className={css.wrapper}>
        <header className={css.header}>Header</header>
        <main className={css.mainContainer}>
          <nav className={css.mainContainerBorder}>Menu</nav>
          <section className={css.mainContainerContent}>Content</section>
          <aside className={css.mainContainerBorder}>Ads</aside>
        </main>
        <footer className={css.footer}>Footer</footer>
      </div> */}

      {/* Grid solution */}
      <div className={css.wrapper}>
        <header className={css.header}>Header</header>
        {/* <main className={css.mainContainer}> */}
        <nav className={css.nav}>Menu</nav>
        <section className={css.section}>Content</section>
        <aside className={css.aside}>Ads</aside>
        {/* </main> */}
        <footer className={css.footer}>Footer</footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
