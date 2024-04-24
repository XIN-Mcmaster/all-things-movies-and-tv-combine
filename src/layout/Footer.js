import React from "react";

const Footer = () => {

    return (
        <footer className='ontario-footer ontario-footer--default'>
            <div className='ontario-row'>
                <div className='ontario-columns ontario-small-12'>
                    <ul className='ontario-footer__links-container ontario-footer__links-container--inline'>
                        <li><a className='ontario-footer__link' href='https://www.ontario.ca/page/accessibility'>Accessibility</a></li>
                        <li><a className='ontario-footer__link' href='https://www.ontario.ca/page/privacy-statement'>Privacy</a></li>
                        <li><a className='ontario-footer__link' href='#'>Contact us</a></li>
                    </ul>
                    <div className='ontario-footer__copyright'>
                        <a className='ontario-footer__link' href='https://www.ontario.ca/page/copyright-information'>&copy; King's Printer for Ontario,
                            <span className='ontario-nbsp'>2012&ndash;24</span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;