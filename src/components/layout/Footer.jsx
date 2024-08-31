import React from 'react';
import logo from '@/assets/logo.png'; // Logonuzun yolunu doğru ayarlayın

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Sol üstte logo */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Şirket Hakkında</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Şirket Felaketi</li>
            <li style={styles.listItem}>Sıkça Sorulan Sorular</li>
            <li style={styles.listItem}>Temas Etmek</li>
            <li style={styles.listItem}>Gizlilik Politikası</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Bize Ulaşın</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>E-posta: info@company.com</li>
            <li style={styles.listItem}>Telefon: +90 123 456 78 90</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.heading}>Sosyal Bağlantılar</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.icon} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" style={styles.icon} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://youtube.com" style={styles.icon} aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com" style={styles.icon} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2e8b57', // Yeşil arka plan rengi
    padding: '20px 0',
    color: 'white',
    position: 'relative',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logoContainer: {
    position: 'absolute',
    top: '10px',
    left: '20px',
  },
  logo: {
    width: '60px',
    height: 'auto',
  },
  column: {
    flex: '1 1 200px', // Minimum genişlik 200px
    margin: '10px',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '8px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap', // İkonları sarmalayarak taşmalarını önler
  },
  icon: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '24px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#3b5998',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Responsive breakpoints
const mediaQueries = {
  small: '@media (max-width: 600px)',
  medium: '@media (max-width: 900px)',
};

const responsiveStyles = {
  [mediaQueries.small]: {
    footer: {
      padding: '10px 0',
    },
    logoContainer: {
      position: 'relative',
      top: 'initial',
      left: 'initial',
      marginBottom: '10px',
    },
    logo: {
      width: '50px',
    },
    column: {
      flex: '1 1 100%',
    },
    socialIcons: {
      justifyContent: 'center',
    },
  },
  [mediaQueries.medium]: {
    footer: {
      padding: '15px 0',
    },
    column: {
      flex: '1 1 45%',
    },
  },
};

Object.assign(styles, responsiveStyles);
