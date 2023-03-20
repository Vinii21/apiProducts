import logoVini from '../assets/viniLogo.svg'

const Footer = () => {
    return (
        <footer>
           <a href="https://main--vinicio-chavarria.netlify.app/" target="_blank"><img src={logoVini} alt="Logo Vinicio Chavarria" width="30px"/></a>
           <span>By Vinicio Chavarría</span>
        </footer>
    );
}
 
export default Footer;