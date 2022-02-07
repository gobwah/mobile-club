import styled from 'styled-components';
import { colors } from './utils/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;

  background-color: ${colors.primary};
  color: ${colors.secondary};
  overflow-x: hidden;
`;
