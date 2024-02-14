import styles from './Header.module.scss'
import images from '../../../assets/images';
//import SearchIcon from '@mui/icons-material/Search';
function Header (){
    return (
        <div style={{borderBottom: " 1px solid rgba(22, 24, 35, 0.2)"}}>
        <div className={styles.container}>
            <div className={styles.info_container}>
                <div className={styles.logo_container}>
                    <img src={images.logo} alt='logo'/>
                    <div className={styles.title}>
                        <h1>HustEDU</h1>
                        <p>Chắp cánh tương lai</p>
                    </div>
                </div>
                <div className={styles.email_container}>
                    <img src={images.email} alt='email'/>
                    <div className={styles.email_title}>
                        <div>EMAIL</div>
                        <p>doquangphuc18102001@gmail.com</p>
                    </div>
                </div>
                <div className={styles.hotline_container}>
                    <img src={images.hotline}  alt='hotline'/>
                    <div className={styles.hotline_title}>
                        <div>HOTLINE</div>
                        <p>0342246482</p>
                    </div>
                </div>
            </div>
            <div className={styles.search_container}>
                <div className={styles.search_bar}>
                    <input placeholder='Search here'/>
                    <button className={styles.search_btn}>
                        Search
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;