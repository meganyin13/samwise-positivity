import React from 'react'
import { ReactComponent as BEARRRR } from '../imgs/BEARRRR.svg'
import Phone from '../imgs/phone.png'
import EmailBox from './EmailBox'
import styles from '../css/Subscribe.module.css'
import { NavBar } from './Landing'

export default (): React.ReactElement => (
    <div>
        <NavBar />
        <div className={styles.SignUp}>
            <div className={styles.Left}>
            <p className={styles.Blurb}>
                Sign up for a weekly dose of good news, inspiring stories, and wellness tips that aim to spread positivity during these uncertain times :)
            </p>
            <br />
            <br />
            <EmailBox />
            <img
                className={styles.Phone2}
                src={Phone}
                alt='Screenshot of Samwise positivity newsletter on iPhone XR'
            />
            <a href='https://www.samwise.today' rel='noopener noreferrer' target='_blank'>

                <BEARRRR className={styles.BEARRRR} />
            </a>
            </div>
            <div className={styles.Right}>
            <img
                className={styles.Phone}
                src={Phone}
                alt='Screenshot of Samwise positivity newsletter on iPhone XR'
            />
            </div>
        </div>
    </div>
)
