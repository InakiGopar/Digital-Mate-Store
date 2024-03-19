import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import './styles/Footer.css';


export function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className='footer-border'></div>

                <div className="footer-icon-container">
                    <InstagramLogoIcon
                        height={20}
                        width={20}
                    />
                </div>
                <div className="footer-icon-container">
                    <LinkedInLogoIcon
                        height={20}
                        width={20}
                    />
                </div>
                <div className="footer-icon-container">
                    <GitHubLogoIcon
                        height={20}
                        width={20}
                    />
                </div>

                <div className='footer-border'></div>
            </div>
            <div className="footer-botton">
                <p> Hecho por Iñaki Gopar </p>
                <p> Mate Datos &copy; </p>
            </div>
            
        </footer>
    )
}