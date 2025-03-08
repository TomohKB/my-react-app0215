interface FooterProps {
    title: string;
}

const Footer = ({title}: FooterProps) => {
    return(
        <footer>
            <h2>{title}</h2>
        </footer>
    )
}

export default Footer;