import { Button } from "../../components";
import { INTENT, SIZE } from "../../components/Button/Button.constants";
import styles from "./ComponentPlayground.module.css";

function ComponentPlayground() {
  return (
    <div className={styles.playground}>
      <div className={styles.playground__container}>
        <h1 className={styles.playground__title}>Component Playground</h1>
        <p className={styles.playground__subtitle}>
          Prueba y visualiza los diferentes estados de los componentes
        </p>

        {/* Button Component */}
        <section className={styles.section}>
          <h2 className={styles.section__title}>Button Component</h2>

          {/* Intents */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>Intents</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY}>Primary Button</Button>
                <span className={styles.demo__label}>Primary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY}>Secondary Button</Button>
                <span className={styles.demo__label}>Secondary</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>Sizes</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button size={SIZE.SMALL}>Small Button</Button>
                <span className={styles.demo__label}>Small</span>
              </div>
              <div className={styles.demo__item}>
                <Button size={SIZE.MEDIUM}>Medium Button</Button>
                <span className={styles.demo__label}>Medium</span>
              </div>
              <div className={styles.demo__item}>
                <Button size={SIZE.LARGE}>Large Button</Button>
                <span className={styles.demo__label}>Large</span>
              </div>
            </div>
          </div>

          {/* With Icons */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>With Icons</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY} icon="⭐">
                  With Icon
                </Button>
                <span className={styles.demo__label}>Primary + Icon</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY} icon="🎮">
                  With Icon
                </Button>
                <span className={styles.demo__label}>Secondary + Icon</span>
              </div>
            </div>
          </div>

          {/* Disabled State */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>Disabled State</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY} disabled>
                  Disabled Primary
                </Button>
                <span className={styles.demo__label}>Disabled Primary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY} disabled>
                  Disabled Secondary
                </Button>
                <span className={styles.demo__label}>Disabled Secondary</span>
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>Interactive Examples</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button
                  intent={INTENT.PRIMARY}
                  onClick={() => alert("Primary button clicked!")}
                >
                  Click Me
                </Button>
                <span className={styles.demo__label}>With onClick</span>
              </div>
              <div className={styles.demo__item}>
                <Button
                  intent={INTENT.SECONDARY}
                  onClick={() => console.log("Secondary clicked")}
                >
                  Console Log
                </Button>
                <span className={styles.demo__label}>Console Log</span>
              </div>
            </div>
          </div>

          {/* All Combinations */}
          <div className={styles.demo}>
            <h3 className={styles.demo__title}>All Size Combinations</h3>
            <div className={styles.demo__grid}>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY} size={SIZE.SMALL}>
                  Small Primary
                </Button>
                <span className={styles.demo__label}>Small Primary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY} size={SIZE.MEDIUM}>
                  Medium Primary
                </Button>
                <span className={styles.demo__label}>Medium Primary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.PRIMARY} size={SIZE.LARGE}>
                  Large Primary
                </Button>
                <span className={styles.demo__label}>Large Primary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY} size={SIZE.SMALL}>
                  Small Secondary
                </Button>
                <span className={styles.demo__label}>Small Secondary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY} size={SIZE.MEDIUM}>
                  Medium Secondary
                </Button>
                <span className={styles.demo__label}>Medium Secondary</span>
              </div>
              <div className={styles.demo__item}>
                <Button intent={INTENT.SECONDARY} size={SIZE.LARGE}>
                  Large Secondary
                </Button>
                <span className={styles.demo__label}>Large Secondary</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export { ComponentPlayground };




