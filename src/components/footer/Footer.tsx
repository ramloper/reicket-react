import "./footer.css"
import FooterIcon from './FooterIcon'
const Footer = () => {
    const footerInfoList = [
        {
            name: "home",
            imgPath: "/footer/logo.png",
            linkPath: "/"
        }, {
            name: "wish",
            imgPath: "/footer/Wish.png",
            linkPath: "/wish"
        }, {
            name: "calendar",
            imgPath: "/footer/Calendar.png",
            linkPath: "/calendar"
        }, {
            name: "myPage",
            imgPath: "/footer/myPage.png",
            linkPath: "/myPage"
        },

    ]
    return (
        <ul className='footer'>
            {footerInfoList.map((footerInfo) => <FooterIcon key={footerInfo.name} {...footerInfo} />)}
        </ul>
    )
}

export default Footer