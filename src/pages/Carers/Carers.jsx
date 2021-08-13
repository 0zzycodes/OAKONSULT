import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LibraryImg from '../../Assets/Library.svg';
import GetCourseModal from '../../componentz/admin/GetCourseModal/GetCourseModal';
import Dialog from '../../componentz/Dialog/Dialog';
import VideoModal from '../../Components/VideoModal/VideoModal';

import './Carers.scss';

const Carers = () => {
  const [courseType, setCourseType] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [DisplayModal, ChangeDisplayModal] = useState(false);
  let showVideoPlayer;
  DisplayModal
    ? (showVideoPlayer = { display: 'flex' })
    : (showVideoPlayer = { display: 'none' });

  return (
    <>
      <Helmet>
        <title>Carers &mdash; Oak</title>
        <meta property='og:title' content='Churches &mdash; Oak' />
        <meta property='og:type' content='website' />
        <meta name='description' content='' />
        <meta property='og:site_name' content='Oakonsult' />
      </Helmet>
      <div id='Carers_intro'>
        <div
          id='VideoModal'
          style={showVideoPlayer}
          onClick={() => {
            ChangeDisplayModal(false);
          }}
        >
          <VideoModal
            data={['https://www.youtube.com/embed/FMXHY5xSbOE']}
            closeFunc={() => {
              ChangeDisplayModal(false);
            }}
          />
        </div>

        <div className='introTextContent'>
          <div className='quoteSrc'>
            <div className='quote_dash'></div>
            <p id='quoteSource'>John 10:10</p>
          </div>
          <h1 id='quote'>Parent Carers</h1>
          <p id='quoteText'>
            At OAKONSULT we are passionate about empowering and supporting
            Carers to garner inner strength and forge ahead in their individual
            lives not withstanding the associated challenges.
          </p>
          {/* btn */}
          <div
            id='watchStory'
            onClick={() => {
              ChangeDisplayModal(true);
            }}
          >
            <div className='icon'></div>
            <p className='text'>My Message </p>
          </div>
        </div>

        <div className='introVideoButton'>
          <div className='hexagon'></div>
        </div>
      </div>
      <div id='Carer_goals'>
        <div id='forSiblings'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/-ypL6F7Mj0A'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/uecw4ymegRg'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>

        <div className='bgLayer'>
          <div id='heartIcon'></div>
          <p>
            Providing care for children or family members with disabilities,
            complex or life limiting conditions impact Carers in different ways.
            This could be physical, emotional, social, financial, or spiritual
            just to mention a few; and in many instances, a combination of all
            these factors.
            <br />
            <br />
            In my personal experience, it has been a combination of all these
            factors and so much more! I have learnt however, that the decisions
            we make or are not able to make through our individual journeys in
            this terrain go a long way to determine the ‘what’, ‘how’, and
            ‘when’ of our lives.
          </p>
        </div>
      </div>
      <div id='forYou'>
        <h1>Something for you</h1>
        <p>
          At OAKONSULT we are passionate about empowering and supporting Carers
          to garner inner strength and forge ahead in their individual lives
          notwithstanding the associated challenges.
          <br />
          <br />
          Using biblical principles in workshops and bespoke training programs,
          we seek to equip Carers with necessary skills to support themselves
          and enable them to carry out their caring responsibilities
          effectively.
          <br />
          <br />
          These training programs provide life transforming experience, potent
          and sustainable for purposeful living.
        </p>
      </div>
      <div id='availiableCourses'>
        <h2>Available Courses/Materials</h2>
        <div className='courses'>
          <div className='carersCourse '>
            <div className='blueTag'></div>
            <div className='courseContainer'>
              <h3>
                Bespoke training
                <br /> programs for Carers
              </h3>
              <ul>
                <li>The Carer and Time Management</li>
                <li>The Carer and Relationship Management</li>
                <li>The Carer’s Career- A possibility?</li>
                <li> Getting Carers into paid work</li>
                <li>Workplace Productivity and the Carer</li>
                <li> Financial Matter for Carers</li>
                <li>Faith and the Carer (A Free Course)</li>
              </ul>
              <div
                className='getCourse'
                onClick={() => {
                  setCourseType('Bespoke training programs for Carers');
                  setDialogVisible(true);
                }}
              >
                GET THIS COURSE
              </div>
            </div>
          </div>
          <div className='carersCourse'>
            <div className='blueTag'></div>
            <div className='courseContainer'>
              <h3>PROJECT ME</h3>
              <p id='ProjectMeAim'>
                ‘Project Me’ aims to support carers to find fulfilment and
                purpose
                <br /> in her caring role; and to push beyond boundaries for
                herself!
                <br /> Project Me will therefore:
              </p>

              <ul>
                <li>Give Carers the courage to let go</li>
                <li>Allow Carers to set their minds free to dream again</li>
                <li>
                  Give Carers the encouragement needed to pursue personal dreams
                </li>
                <li>
                  Liberate Carers from the ‘guilt’ of personal success or
                  achievement
                </li>
                <li>
                  Give opportunities for Carers to learn from and give support
                  to one another.
                </li>
              </ul>
              <div
                className='getCourse'
                onClick={() => {
                  setCourseType('Project Me');
                  setDialogVisible(true);
                }}
              >
                GET THIS COURSE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This button uses the format of ExploreBtn.jsx and ExploreBtn.scss with little modification */}
      <Link to='blogs/for-carers'>
        <div
          className='SeeRelatedArticle CTA_Btn'
          id='btn'
          style={{
            backgroundColor: '#009ba7',
            marginBottom: '6rem',
            marginTop: '3rem',
          }}
        >
          <div
            id='icon'
            style={{
              height: '50px',
              width: '50px',
              backgroundImage: `url(${LibraryImg})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
            }}
          ></div>
          <p>See Related Article</p>
        </div>
      </Link>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <GetCourseModal
          courseType={courseType}
          setDialogVisible={setDialogVisible}
        />
      </Dialog>
    </>
  );
};

export default Carers;
