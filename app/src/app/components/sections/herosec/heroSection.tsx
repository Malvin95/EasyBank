import InviteButton from '../../inviteButton/inviteButton';
import Image from 'next/image';
import styles from './heroSection.module.css';
import heroBackground from '../../../../../public/images/bg-intro-desktop.svg';

export default function HeroSection() {
    return(
        <div className={styles.heroSectionContainer}>
            {/* <Image className={styles.heroBackground} src={heroBackground} alt='heroBackground' /> */}
            <div className={styles.leftHeroContainer}>
                <div className={styles.lfhSubject}>
                    <h1>Next generation digital banking</h1>
                    <h5>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </h5>
                    <div className={styles.btnContainer}>
                        <InviteButton />
                    </div>
                </div>
            </div>
            <div className={styles.rightHeroContainer}></div>
        </div>
    )
}