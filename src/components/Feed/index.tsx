'use client';

import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import Image from 'next/image';
import styles from './Feed.module.css';

export default function Feed() {
    return (
        <main>
            <section className={styles.feed}>

                <div className={styles.feed__info}>

                    <div className={styles.feed__titleContent}>
                        <h1 className={styles.feed__title}>Encontre o café perfeito para qualquer hora do dia</h1>

                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>

                    <div className={styles.feed__options}>

                        <div className={styles.feed__option}>
                            <span className={`${styles.feed__optionPill} ${styles['feed__optionPill--shoppingCart']}`}>
                                <ShoppingCartSimple size={16} weight="bold" color='white' />
                            </span>
                            <p>Compra simples e segura</p>
                        </div>
                        <div className={styles.feed__option}>
                            <span className={`${styles.feed__optionPill} ${styles['feed__optionPill--package']}`}>
                                <Package size={16} weight="bold" color='white' />
                            </span>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div className={styles.feed__option}>
                            <span className={`${styles.feed__optionPill} ${styles['feed__optionPill--timer']}`}>
                                <Timer size={16} weight="bold" color='white' />
                            </span>
                            <p>Entrega rápida</p>
                        </div>
                        <div className={styles.feed__option}>
                            <span className={`${styles.feed__optionPill} ${styles['feed__optionPill--coffee']}`}>
                                <Coffee size={16} weight="bold" color='white' />
                            </span>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </div>
                </div>
                <Image src="/coffee.png" alt="Café" width={476} height={360} />
            </section>

            <section>
                {/* Conteúdo adicional pode ser adicionado aqui */}
            </section>
        </main>
    );
}