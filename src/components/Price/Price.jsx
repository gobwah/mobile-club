import { Wrapper } from './Price.styles';

const Title = () => {
  return (
    <Wrapper>
      <div>dès</div>
      <div className="big">9</div>
      <div>
        <div className="top">,90 €</div>
        <div className="bottom">/mois</div>
      </div>
    </Wrapper>
  );
};

export default Title;
