import { NavLink } from "react-router-dom"

function Menu (){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink>Giới thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink>Điểm đến</NavLink>
                    </li>
                    <li>
                        <NavLink>Học bổng</NavLink>
                    </li>
                    <li>
                        <NavLink>Dịch vụ</NavLink>
                    </li>
                    <li>
                        <NavLink>Tin tức và sự kiện</NavLink>
                    </li>
                    <li>
                        <NavLink>Đăng kí tư vấn</NavLink>
                    </li>
                    <li>
                        <NavLink>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu