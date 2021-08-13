import moment from 'moment';
import React from 'react';
import renderHTML from 'react-render-html';
import CustomButton from '../CustomButton/CustomButton';
import Spacing from '../Spacing/Spacing';
import placeholder from '../../assetz/images/placeholder.png';

import './styles.scss';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/Colors';

const TagOverviewPostPreview = ({
  data: { id, title, hook, created_at, main_tag, thumbnail, tumbnail },
}) => {
  const history = useHistory();
  const OnTagClick = () => {
    history.push(
      `${
        main_tag === 'for-parents'
          ? '/blogs/for-parents'
          : main_tag === 'for-siblings'
          ? '/blogs/for-siblings'
          : '/blogs/for-carers'
      }`
    );
  };
  return (
    <div className={`blog-overview-post-preview-container`}>
      <div className={`blog-overview-post-preview`}>
        <div
          className={`flex-center-column tumbnail`}
          style={{
            backgroundImage:
              main_tag === 'for-parents'
                ? `linear-gradient(#cac492b4, #cac4923f), url(${
                    tumbnail || thumbnail || placeholder
                  })`
                : main_tag === 'for-siblings'
                ? `linear-gradient(#cac492b4, #cac4923f), url(${
                    tumbnail || thumbnail || placeholder
                  })`
                : `linear-gradient(#cac492b4, #cac4923f), url(${
                    tumbnail || thumbnail || placeholder
                  })`,
          }}
        >
          <CustomButton
            label={main_tag}
            onClick={OnTagClick}
            className={`${
              main_tag === 'for-parents'
                ? 'for-parents-button'
                : main_tag === 'for-siblings'
                ? 'for-siblings-button'
                : 'for-carers-button'
            } tag-button`}
          />
          <div className={`title-container`}>
            <Link
              to={{
                pathname: `${
                  main_tag === 'for-parents'
                    ? '/blogs/for-parents'
                    : main_tag === 'for-siblings'
                    ? '/blogs/for-siblings'
                    : '/blogs/for-carers'
                }/${title.split(' ').join('-').toLowerCase()}`,
                search: id,
              }}
            >
              <h1
                className={`title`}
                onClick={() =>
                  history.push(
                    `${
                      main_tag === 'for-parents'
                        ? '/blogs/for-parents'
                        : main_tag === 'for-siblings'
                        ? '/blogs/for-siblings'
                        : '/blogs/for-carers'
                    }/${title.split(' ').join('-').toLowerCase()}`
                  )
                }
              >
                {title}
              </h1>
            </Link>
            <Spacing height={`1em`} />
            <span
              className={`time`}
              style={{
                color:
                  main_tag === 'for-parents'
                    ? colors.for_parents
                    : main_tag === 'for-siblings'
                    ? colors.for_siblings
                    : colors.for_carers,
              }}
            >
              {moment().fromNow(created_at)}
            </span>
          </div>
        </div>
        <Spacing height={`1em`} />
        <p className={`hook`}>{renderHTML(`${hook}`)}</p>
      </div>
    </div>
  );
};

export default TagOverviewPostPreview;
