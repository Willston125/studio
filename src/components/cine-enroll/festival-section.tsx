'use client';

import React from 'react';
import Link from 'next/link';
import styles from './festival-section.module.css';

export default function FestivalSection() {
    return (
        <section className={styles.festivalSection}>
            {/* ÉLÉMENTS DE DÉCOR (Animation) */}
            <div className={styles.curtainLeft}></div>
            <div className={styles.curtainRight}></div>
            <div className={styles.spotlight}></div>
            <div className={styles.spotlight}></div>
            <div className={styles.goldDust}></div>

            <div className={styles.festivalContainer}>
                {/* TITRE */}
                <div className={styles.festivalTag}>Événement Exclusif</div>
                <h2 className={styles.festivalTitle}>Le Festival <span>Arrive</span></h2>
                <p className={styles.festivalDesc}>
                    À la fin de la formation, présentez votre court-métrage devant un jury de professionnels.
                    Apprenez, créez et remportez des prix exceptionnels !
                </p>

                {/* LES PRIX (HOVER INTERACTIF) */}
                <div className={styles.prizesGrid}>

                    {/* PRIX 2 */}
                    <div className={styles.prizeCard}>
                        <span className={styles.prizeRank}>2ème Place</span>
                        <span className={styles.prizeIcon}>💻</span>
                        <div className={styles.prizeName}>PC Portable</div>
                        <div className={styles.prizeValue}>Pour le montage</div>
                    </div>

                    {/* PRIX 1 (Au milieu, mis en avant) */}
                    <div
                        className={styles.prizeCard}
                        style={{ borderColor: '#D4AF37', background: 'rgba(212, 175, 55, 0.1)' }}
                    >
                        <span className={styles.prizeRank} style={{ color: '#D4AF37' }}>🏆 1ère Place</span>
                        <span className={styles.prizeIcon}>🥇</span>
                        <div className={styles.prizeName}>200.000 FDJ</div>
                        <div className={styles.prizeValue}>Financement Projet</div>
                    </div>

                    {/* PRIX 3 */}
                    <div className={styles.prizeCard}>
                        <span className={styles.prizeRank}>3ème Place</span>
                        <span className={styles.prizeIcon}>📱</span>
                        <div className={styles.prizeName}>Smartphone</div>
                        <div className={styles.prizeValue}>Dernière Génération</div>
                    </div>

                </div>

                {/* BOUTON APPEL A L'ACTION */}
                <div style={{ marginTop: '50px' }}>
                    <Link
                        href="/inscription"
                        style={{
                            background: '#E50914',
                            color: 'white',
                            padding: '15px 30px',
                            textDecoration: 'none',
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'uppercase',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
                            display: 'inline-block'
                        }}
                    >
                        Je réserve ma place au festival
                    </Link>
                </div>

            </div>
        </section>
    );
}
