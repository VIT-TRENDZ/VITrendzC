/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link path = '/'
      sx = {{
        variant : "links.logo",
        display : 'flex',
        cursor: "pointer",
        mr:15,
        height : 50,
        width : 50,
      }}
      {...rest}    
    >
      <Image src = {src} alt = "VITrendz Logo" />
    </Link>
  );
}
