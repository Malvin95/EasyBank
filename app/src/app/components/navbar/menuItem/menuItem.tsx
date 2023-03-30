import styles from './menuItem.module.css';

interface menuItemProps {
    title: string;
}

export default function MenuItem({title}: menuItemProps) {
    return(
        <div className={styles.menuItemContainer}>
            {title}
        </div>
    )
}

