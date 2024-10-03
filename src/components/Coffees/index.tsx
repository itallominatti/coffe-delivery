import styles from './Coffees.module.css';
import Image from 'next/image';

export default function Coffees() {
    return (
        <section className={styles.feedCoffee}>
            <h2 className={styles.feedCoffee__title}>Nossos cafés</h2>
            <div className={styles.feedCoffee__wrapperCoffees}>
                <div className={styles.coffeeCard}>
                    <Image src="/" alt="" width={120} height={120} /> 
                    <div className={styles.coffeCard__wrapperPills}>
                        <span className={styles.pill}>tradicional</span>
                        <span className={styles.pill}>com leite</span>
                    </div>
                </div>
            </div>
        </section>
    )
}