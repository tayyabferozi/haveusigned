import React from "react";
import clsx from "clsx";

const MainSection = ({ mainClassName, sectionClassName, children }) => {
  return (
    <main className={clsx("container-wrap", mainClassName)}>
      <section className={clsx("space-top", sectionClassName)} id="hiw">
        {children}
      </section>
    </main>
  );
};

export default MainSection;
