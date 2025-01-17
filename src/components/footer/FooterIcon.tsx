import { Link } from 'react-router-dom'
import "./FooterIcon.css"
interface FooterIconInfo {
    name: string,
    imgPath: string,
    linkPath: string
}
const FooterIcon = (footerIconInfo: FooterIconInfo) => {
    return (
        <li className='footerIcon'>
            <Link to={footerIconInfo.linkPath}>
                <img src={footerIconInfo.imgPath} className='myImg' />
                <p className='footerText'>{footerIconInfo.name}</p>
            </Link>

        </li>
    )
}

export default FooterIcon
