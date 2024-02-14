import styles from './Footer.module.scss'
import images from '../../../assets/images';
function Footer(){
    return (
        <div className={styles.footer_container}>
            <div className={styles.address_container}>
                <div className={styles.footer_logo_container}>
                    <img src={images.logo} alt='logo'/>
                    <div className={styles.footer_title}>
                        <h4>HustEDU</h4>
                        <p>Chắp cánh tương lai</p>
                    </div>
                </div>
                <div className={styles.address_infomation}>
                    <div className={styles.infomation_container}>
                        <p>Văn Phòng tại Hà Nội </p>
                        <div className={styles.gps}>
                            <img src={images.gps} alt='gps'/>
                            <p>Số 1 - Đại Cồ Việt, Hai bà Trưng </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={images.phone} alt='phone'/>
                            <p>Hotline : +84 342 268 428</p>
                        </div>
                    </div>
                    <div className={styles.infomation_container}>
                        <p>Văn Phòng tại Hà Nội </p>
                        <div className={styles.gps}>
                            <img src={images.gps} alt='gps'/>
                            <p>Số 1 - Đại Cồ Việt, Hai bà Trưng </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={images.phone} alt='phone'/>
                            <p>Hotline : +84 342 268 428</p>
                        </div>
                    </div>
                    <div className={styles.infomation_container}>
                        <p>Văn Phòng tại Hà Nội </p>
                        <div className={styles.gps}>
                            <img src={images.gps} alt='gps'/>
                            <p>Số 1 - Đại Cồ Việt, Hai bà Trưng </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={images.phone} alt='phone'/>
                            <p>Hotline : +84 342 268 428</p>
                        </div>
                    </div>
                    <div className={styles.infomation_container}>
                        <p>Văn Phòng tại Hà Nội </p>
                        <div className={styles.gps}>
                            <img src={images.gps} alt='gps'/>
                            <p>Số 1 - Đại Cồ Việt, Hai bà Trưng </p>
                        </div>
                        <div className={styles.phone}>
                            <img src={images.phone} alt='phone'/>
                            <p>Hotline : +84 342 268 428</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contact_container}>
                <div className={styles.border}>
                    <h2>Thông tin liên hệ </h2>
                </div>
                <div className={styles.contact_infomation}>
                    <div className={styles.contact_email}>
                        <img src={images.mailbox} alt='mailbox'/>
                        <p>doquangphuc@gmail.com </p>
                    </div>
                    <div className={styles.contact_phone}>
                        <img src={images.phone} alt='phone'/>
                        <p>Hà Nội : +84 342 268 428 </p>
                    </div>
                    <div className={styles.contact_phone}>
                        <img src={images.phone} alt='phone'/>
                        <p>Hà Nội : +84 342 268 428 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;