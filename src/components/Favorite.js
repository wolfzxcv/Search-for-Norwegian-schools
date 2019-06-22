import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorite = ({ className, favorite, markFavo, id }) => {
  const [showList, setShowList] = useState(false);
  const { mergeData } = useContext(SharedContext);

  const showResult = mergeData
    .filter(x => x.isFavorite === true)
    .map(x => (
      <>
        <div className="county">
          {x.Navn}
          <FontAwesomeIcon
            className="favorite"
            favorite={favorite}
            onClick={() => {
              markFavo(id);
            }}
            icon={faHeart}
          />
        </div>
        <div className="school">{x.FulltNavn}</div>
      </>
    ));

  console.log(`showList boolean= `, showList);
  console.log(`showResult: `, showResult);

  return (
    <div className={className} showList={showList}>
      <div className="toggle-list" onClick={() => setShowList(!showList)}>
        My favorite list
      </div>
      <div className="favo-list">{showList && showResult}</div>
    </div>
  );
};

Favorite.propTypes = {
  className: PropTypes.string,
};

const StyledFavorite = styled(Favorite)`
  border-radius: 10px;
  position: fixed;
  top: 100px;
  right: 0px;
  z-index: 100;
  box-shadow: 0 1px 1px 1px rgba(50, 50, 50, 0.1);
  width: 250px;

  .toggle-list {
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.green};
  }

  .favo-list {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.2;
    .county {
      border-top: 2px solid ${props => props.theme.colors.borderGray};
      color: #330000;
      display: flex;
      justify-content: space-between;
    }
    .favorite {
      color: ${props =>
        props.favorite ? 'red' : props.theme.colors.borderGray};
      &:hover {
        cursor: pointer;
      }
    }
    .school {
      color: ${props => props.theme.colors.black};
      font-weight: 200;
    }
  }
`;

StyledFavorite.displayName = 'Favorite';

export default StyledFavorite;
