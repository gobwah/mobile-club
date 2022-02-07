import styled from 'styled-components';
import { separator } from '../../utils/images';

export const Wrapper = styled.main`
  text-align: center;
`;

export const ImgLeftTop = styled.div`
  height: 0;
  position: relative;
  left: -540px;
  top: 140px;
`;

export const ImgLeftBottom = styled.div`
  height: 0;
  position: relative;
  left: -400px;
  top: 410px;
`;

export const ImgRightTop = styled.div`
  height: 0;
  position: relative;
  right: -620px;
  top: 110px;
`;

export const ImgRightBottom = styled.div`
  height: 0;
  position: relative;
  right: -460px;
  top: 360px;
`;

export const Separator = styled.div`
  position: relative;
  top: 160px;
  margin: auto;
  text-align: center;
  background: url(${separator.src}) no-repeat;
  background-position: center;
  height: 95px;
  width: 353px;
`;
