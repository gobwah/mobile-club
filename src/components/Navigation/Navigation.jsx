import { MdStars } from 'react-icons/md';
import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <a href={document.location.pathname}>Nos smartphones</a>
      <a href={document.location.pathname}>Vos questions</a>
      <a href={document.location.pathname}>Entreprise</a>
      <a href={document.location.pathname} className="login">
        <MdStars size="30px" />
        Espace membre
      </a>
    </Wrapper>
  );
};

export default Navigation;
