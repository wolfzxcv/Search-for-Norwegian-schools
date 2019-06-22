import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Jobbe = ({ className }) => {
  return (
    <div className={className}>
      <u>
        Interessert i å jobbe i Norge? Se våre ledige stillinger <b>her</b>.
      </u>
    </div>
  );
};

Jobbe.propTypes = {
  className: PropTypes.string,
};

const StyledJobbe = styled(Jobbe)`
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.footerBlack};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

StyledJobbe.displayName = 'Jobbe';

export default StyledJobbe;
