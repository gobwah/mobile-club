import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.h1`
  font-size: 110px;
  line-height: 100px;
  max-width: 850px;
  margin-bottom: 44px;

  span {
    text-decoration: line-through;
    color: ${colors.secondary};

    span {
      color: ${colors.tertiary};
      text-decoration: none;
    }
  }
`;
