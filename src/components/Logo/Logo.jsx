import { logo } from '../../utils/images';
import { Wrapper } from './Logo.styles';

const Logo = () => {
  return (
    <Wrapper href="/">
      <img src={logo.src} alt={logo.alt} />
    </Wrapper>
  );
};

export default Logo;
