import { Fragment, useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import logo from "../../Assets/avatar.png";
import { Dropdown } from 'rsuite';
import PeoplesIcon from '@rsuite/icons/Peoples'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import MessageIcon from '@rsuite/icons/Message'
import TagNumberIcon from '@rsuite/icons/TagNumber'
import DetailIcon from '@rsuite/icons/Detail';
import MenuIcon from '@rsuite/icons/Menu';
import { Whisper, Avatar, Popover } from 'rsuite';


import { Link } from "react-router-dom"

function Header(){
    const location = useLocation()
    const [icons, setIcon] =  useState(<MenuIcon/>)
    const [title, setTitle] = useState("")
    const [showMenu, setShowMenu] = useState(false);
    useLayoutEffect(() => {
        switch(location.pathname){
            case '/':
                setTitle("TRANG CHỦ")
                break
            case '/user':
                setIcon(<PeoplesIcon />)
                setTitle("QUẢN LÝ THÀNH VIÊN")
                break
            case '/order':
                setIcon(<DashboardIcon />)
                setTitle("QUẢN LÝ ĐƠN HÀNG")
                break
            case '/product':
                setIcon(<DetailIcon />)
                setTitle("QUẢN LÝ SẢN PHẨM")
                break     
            case '/service':
                setIcon(<TagNumberIcon />)
                setTitle("QUẢN LÝ DỊCH VỤ")
                break
            case '/infor':
                setIcon(<GearCircleIcon />)
                setTitle("QUẢN LÝ CHUNG")
                break
            case '/comment':
                setIcon(<MessageIcon />)
                setTitle("QUẢN LÝ BÌNH LUẬN")
                break
            default:
                setTitle("TRANG CHỦ")
        }
    }, [location]);
    useLayoutEffect(() => {
        function handleResize(){
            if (window.innerWidth < '1000') {
                setShowMenu(true)
            } else {
                setShowMenu(false)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    return (
        <Fragment>
            <div className="position-fixed shadow-sm d-flex justify-content-between align-items-center py-2 px-4 bg-white"
                style={{ backgroundColor: "white", height: "var(--header-height)", width:"calc(100% - var(--sidebar-width))"}}>
                    {showMenu && <div>
                        <Dropdown icon={icons}>
                            <Dropdown.Item icon={<PeoplesIcon />} as={Link} to="/user" >Quản lý thành viên</Dropdown.Item>
                            <Dropdown.Item icon={<DashboardIcon />} as={Link} to="/order">Quản lý đơn hàng</Dropdown.Item>
                            <Dropdown.Item icon={< DetailIcon/>} as={Link} to="/product">Quản lý sản phẩm</Dropdown.Item>
                            <Dropdown.Item icon={<  TagNumberIcon/>} as={Link} to="/service">Quản lý dịch vụ</Dropdown.Item>
                            <Dropdown.Item icon={<MessageIcon />} as={Link} to="/comment">Quản lý bình luạn</Dropdown.Item>
                            <Dropdown.Item icon={<GearCircleIcon/>} as={Link} to="/infor">Quản lý chung</Dropdown.Item>
                        </Dropdown>
                    </div>}
                     <span className="fs-4 fw-bold p-3">
                        {title}
                    </span>
                    <Whisper       
                        placement="bottomEnd"
                        trigger="click"
                        speaker={
                        <Popover>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/">Xem thông tin</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/" >Đăng xuất</Dropdown.Item>
                            </Dropdown.Menu>
                        </Popover>
                        }>
                        <Avatar circle src={logo} alt=""/>
                    </Whisper>
            </div>
        </Fragment>
    )
}

export default Header