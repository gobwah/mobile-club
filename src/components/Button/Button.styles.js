import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.button`
  background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.35),
      hsla(0, 0%, 100%, 0)
    ),
    linear-gradient(265.75deg, ${colors.tertiary}, ${colors.tertiary});
  color: ${colors.secondary};

  padding: 0 1.5rem;
  height: 3.5rem;

  font-family: 'GD Boing';
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  box-shadow: 0 27px 63px rgb(6 0 48 / 27%),
    0 9.85544px 22.996px rgb(6 0 48 / 18%),
    0 4.78464px 11.1641px rgb(6 0 48 / 13%),
    0 2.34552px 5.47287px rgb(6 0 48 / 10%),
    0 0.927421px 2.16398px rgb(6 0 48 / 6%);

  border-radius: 27px;
  border: none;

  cursor: pointer;
`;
