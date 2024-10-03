'use client';

import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import Image from 'next/image';
import styles from './Summary.module.css';

export default function Summary() {
    return (
        <section className={styles.feedSummary}>

            <div className={styles.feedSummary__info}>

                <div className={styles.feedSummary__titleContent}>
                    <h1 className={styles.feedSummary__title}>Encontre o café perfeito para qualquer hora do dia</h1>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>

                <div className={styles.feedSummary__options}>

                    <div className={styles.feedSummary__option}>
                        <span className={`${styles.feedSummary__optionPill} ${styles['feedSummary__optionPill--shoppingCart']}`}>
                            <ShoppingCartSimple size={16} weight="bold" color='white' />
                        </span>
                        <p>Compra simples e segura</p>
                    </div>
                    <div className={styles.feedSummary__option}>
                        <span className={`${styles.feedSummary__optionPill} ${styles['feedSummary__optionPill--package']}`}>
                            <Package size={16} weight="bold" color='white' />
                        </span>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className={styles.feedSummary__option}>
                        <span className={`${styles.feedSummary__optionPill} ${styles['feedSummary__optionPill--timer']}`}>
                            <Timer size={16} weight="bold" color='white' />
                        </span>
                        <p>Entrega rápida</p>
                    </div>
                    <div className={styles.feedSummary__option}>
                        <span className={`${styles.feedSummary__optionPill} ${styles['feedSummary__optionPill--coffee']}`}>
                            <Coffee size={16} weight="bold" color='white' />
                        </span>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>
            <Image src="/coffee.png" alt="Café" width={476} height={360} />
        </section>
    )
}