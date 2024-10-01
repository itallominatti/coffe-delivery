'use client';

import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShoppingCartSimple } from 'phosphor-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link href="/">
                    <Image src="/logo.svg" alt="home" width={85} height={40} />
                </Link>
                <div>
                    <div className={styles['nav__pill-location']}>
                        <MapPin size={24} weight="bold" />
                        <span>Porto Alegre, RS</span>
                    </div>
                    <Link href='/cart' className={styles['nav__cart']}>
                        <ShoppingCartSimple size={24} weight="bold" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}