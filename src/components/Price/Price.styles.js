import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 62px;

  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;

  .big {
    height: 100%;
    font-size: 60px;
    margin-bottom: 8px;
    margin-left: 5px;
    color: ${colors.tertiary};
  }

  .top {
    color: ${colors.tertiary};
    position: relative;
    top: 8px;
  }
`;
