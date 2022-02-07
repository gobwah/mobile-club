import { MdStars } from 'react-icons/md';
import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <a href="/#">Nos smartphones</a>
      <a href="/#">Vos questions</a>
      <a href="/#">Entreprise</a>
      <a href="/#" className="login">
        <MdStars size="30px" />
        Espace membre
      </a>
    </Wrapper>
  );
};

export default Navigation;
