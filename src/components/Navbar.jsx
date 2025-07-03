

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <a href="/">
          <img src="/logo1.png" alt="Logo" style={styles.logo} />
        </a>
        <a href="/" style={styles.link}>Home</a>
        <a href="/movies" style={styles.link}>Movies</a>
        <a href="/tvshows" style={styles.link}>TV Shows</a>
      </div>
      <div style={styles.right}>
        <a href="/register" style={styles.link}>Register</a>
        <a href="/login" style={styles.link}>Login</a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    color: '#ffffff',
    backgroundColor: '#003153',
    borderBottom: '1px solid #ccc'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  logo: {
    height: '60px',
    marginRight: '20px'
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500'
  }
};

export default Navbar;
