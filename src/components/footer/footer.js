/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Heading,Grid} from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'src/assets/brandinglogo.png';
export default function Footer() {
  return (
    <footer sx={styles.footer_dark}>
    </footer>
  );
}
const styles = {
    footer_dark: {
      padding: "50px 0",
      color : "#f0f9ff",
      backgroundColor : "#282d32",
    },
}