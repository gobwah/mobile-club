import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-right: 2.25rem;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.375;
    text-decoration: none;

    &:after {
      display: block;
      width: 100%;
      background-color: white;
      content: ' ';
      height: 2px;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }

    &:visited {
      color: white;
    }
  }

  .login {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 1.5rem;
    background: ${colors.quaternary};
    border-radius: 27px;
    height: 54px;
    margin-right: 0;

    svg {
      flex-shrink: 0;
      margin-right: 0.75rem;
    }
  }
`;
