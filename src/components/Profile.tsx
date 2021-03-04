import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://yt3.ggpht.com/yti/ANoDKi6TjCIXALQYTEykTq7-ZEyFUdpS5wPAtlucRcJKdA=s88-c-k-c0x00ffffff-no-rj-mo" alt="João Dias" />
            <div>
                <strong>João Dias</strong>
                <p>
                    <img src="icons/Level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}