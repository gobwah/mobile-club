import Title from '../Title/Title';
import Price from '../Price/Price';
import Button from '../Button/Button';
import {
  ImgLeftBottom,
  ImgLeftTop,
  ImgRightBottom,
  ImgRightTop,
  Separator,
  Wrapper,
} from './Hero.styles';
import { phones } from '../../utils/images';

const Hero = () => {
  return (
    <Wrapper>
      <ImgLeftTop>
        <img
          src={phones.iphone8.src}
          alt={phones.iphone8.alt}
          width={phones.iphone8.w}
          height={phones.iphone8.h}
        />
      </ImgLeftTop>
      <ImgLeftBottom>
        <img
          src={phones.galaxyS9.src}
          alt={phones.galaxyS9.alt}
          width={phones.galaxyS9.w}
          height={phones.galaxyS9.h}
        />
      </ImgLeftBottom>
      <ImgRightTop>
        <img
          src={phones.iphone11.src}
          alt={phones.iphone11.alt}
          width={phones.iphone11.w}
          height={phones.iphone11.h}
        />
      </ImgRightTop>
      <ImgRightBottom>
        <img
          src={phones.iphoneX.src}
          alt={phones.iphoneX.alt}
          width={phones.iphoneX.w}
          height={phones.iphoneX.h}
        />
      </ImgRightBottom>
      <Title />
      <Price />
      <Button />
      <Separator />
    </Wrapper>
  );
};

export default Hero;
