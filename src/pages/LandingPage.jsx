import React from 'react'
import Navbar_home from '../components/layout/NavbarHome';
import ImageSlider from '../components/layout/imageSlider';
import DataTable from '../components/layout/dataTable';
import Footer from '../components/layout/Footer';
import cloud from '../../public/assets/cloud-icon.png'
import sensor from '../../public/assets/sensor-icon.png';
import analysis from '../../public/assets/analysis-icon.png';
import styles from '../styles/LandingPage.module.css';

function LandingPage() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -200; // adjust this value to your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar_home />

      <div className={styles['section-navigate']}>
        <button onClick={() => scrollToSection('AboutSection')}>About Us</button>
        <button onClick={() => scrollToSection('TechnologySection')}>Technologies</button>
        <button onClick={() => scrollToSection('PaymentSection')}>Get Started</button>
      </div>

      <div className={styles.sectionbreak} />

      <div id='AboutSection' className={styles['about-section']}>
        <ImageSlider />
        <div>
          <h1 className={styles.sectionTitle}>About Us</h1>
          <p><strong>Poultry Environment Monitoring System (PEMS) </strong>
            is an IoT-based device designed to monitor conditions inside poultry houses,
            providing poultry workers with an easy and cost-effective way to track and manage their environment. </p>
        </div>
      </div>

      <div className={styles.sectionbreak} />

      <div id='TechnologySection' className={styles['technology-section']}>
        <h1 className={styles.sectionTitle}>Technologies Used</h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src={sensor} className={styles.cardIcon} />
            <h2>Smart Sensors</h2>
            <p>Advanced IoT sensors continuously monitor temperature and ammonia levels,
              ensuring accurate, real-time environmental insights.</p>
          </div>
          <div className={styles.card}>
            <img src={analysis} className={styles.cardIcon} />
            <h2>Data Processing & Analysis</h2>
            <p>Intelligent analytics transform raw readings into actionable insights,
              helping farmers make smarter, faster management decisions.</p>
          </div>
          <div className={styles.card}>
            <img src={cloud} className={styles.cardIcon} />
            <h2>Cloud Integration</h2>
            <p>Secure cloud storage enables seamless data access anytime,
              anywhere keeping your poultry operations connected and efficient.</p>
          </div>
        </div>
      </div>

      <div className={styles.sectionbreak} />

      <div id='PaymentSection' className={styles['payment-section']}>
        <div className={styles.backgroundWave}>
        </div>
        <div className={styles.descriptionColumn}>
          <div className={styles.row}>
            <h1 className={styles.sectionTitle}>Interested?</h1>
          </div>
          <div className={styles.row}>
            <p>
              Stay in control with real-time monitoring, smart insights, and instant alerts —
              all in one platform designed to make your business smarter and faster.
            </p>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage