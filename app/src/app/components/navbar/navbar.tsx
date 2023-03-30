import MenuItem from './menuItem/menuItem';
import styles from './navbar.module.css';

export default function Navbar() {
    return(
        <div className={styles.container}>
            <div className={styles.containerItem}>
                logo
            </div>
            <div className={styles.containerItem}>
                <div className={styles.listContainer}>
                    <MenuItem title='Home'/>
                    <MenuItem title='About'/>
                    <MenuItem title='Contact'/>
                    <MenuItem title='Blog'/>
                    <MenuItem title='Careers'/>
                </div>
            </div>
            <div className={styles.containerItem}>
                invite Button
            </div>
        </div>
    );
}