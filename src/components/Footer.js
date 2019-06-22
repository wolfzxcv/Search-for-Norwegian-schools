import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHashtag,
  faAppleAlt,
  faCube,
} from '@fortawesome/free-solid-svg-icons';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className="footer">
        <div>
          <div className="footer-title">Norge</div>
          <div className="om-norge">
            <div>Om Norge>></div>
            <div>Like Norge>></div>
            <div>Reise til Norge>></div>
            <div>Bo i Norge>></div>
            <div>Fordi norge er verdig vakkert>></div>
          </div>
        </div>

        <div>
          <div className="footer-title">Kontakt oss</div>
          <div className="kontakt">
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor</p>
            <p>
              Telefon: <span>12345678</span>
            </p>
          </div>
          <div className="kontakt">
            <p>Lorem ipsum Norge</p>
            <p>1234 Lorem</p>
            <p>Postboks 567</p>
            <p>
              Telefon: <span>12345678</span>
            </p>
          </div>
          <div className="kontakt-oss">Kontakt oss>></div>
        </div>

        <div>
          <div className="footer-title">Norge liker deg app</div>
          <div className="app-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Libero
            fugiat Aperiam impedit velit odit!
          </div>

          <div className="apple">
            <img src={require('../images/apple.png')} alt="apple" />
          </div>

          <div className="google">
            <img src={require('../images/google.png')} alt="google" />
          </div>
        </div>

        <div>
          <div className="footer-title">Følg oss</div>
          <div className="follow">Følg oss på sosiale medier!</div>
          <div className="icon">
            <div>
              <FontAwesomeIcon icon={faHashtag} />
            </div>
            <div>
              <FontAwesomeIcon icon={faAppleAlt} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCube} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

const StyledFooter = styled(Footer)`
  width: 100%;
  height: 448px;
  color: ${props => props.theme.colors.footerGray};
  background-color: ${props => props.theme.colors.footerBlack};

  .footer {
    width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    display: flex;

    div {
      width: 300px;
    }

    .footer-title {
      padding-left: 10px;
      padding-bottom: 8px;
      margin-bottom: 20px;
      width: 240px;
      font-size: 20px;
      border-bottom: 1px solid ${props => props.theme.colors.footerGray};
    }

    .om-norge {
      div {
        padding-left: 10px;
        margin: 20px 0 5px 0;
        height: 30px;
        color: ${props => props.theme.colors.green};
        &:hover {
          text-decoration: underline;
          cursor: not-allowed;
        }
      }
    }

    .kontakt {
      padding: 10px 0;
      p {
        margin: 5px 0;
        padding-left: 10px;
      }
      span {
        &:hover {
          text-decoration: underline;
          cursor: not-allowed;
        }
      }
    }

    .kontakt-oss {
      padding: 10px 0 10px 10px;
      color: ${props => props.theme.colors.green};
      &:hover {
        text-decoration: underline;
        cursor: not-allowed;
      }
    }

    .app-text {
      padding: 5px 0 10px 10px;
      line-height: 2;
    }

    .apple,
    .google {
      padding: 5px 0 0 10px;
      height: 45px;
      img {
        height: 90%;
        width: auto;
        border-radius: 10px;
        &:hover {
          cursor: not-allowed;
        }
      }
    }

    .follow {
      margin-top: 20px;
      padding: 10px 0 10px 10px;
    }

    .icon {
      display: flex;
      padding: 10px 0 10px 10px;
      height: 300px;

      div {
        margin: 20px 25px 0 0;
        font-size: 30px;
        width: 30px;
        height: 30px;
        &:hover {
          color: ${props => props.theme.colors.backgroundGray};
          cursor: not-allowed;
        }
      }
    }
  }
`;

StyledFooter.displayName = 'Footer';

export default StyledFooter;
