import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

import './TrainingAndResourcing.scss';
import TopicCard from '../../Components/TopicCard/TopicCard';
import VideoModal from '../../Components/VideoModal/VideoModal';
import Dialog from '../../componentz/Dialog/Dialog';
import InviteToSpeakMOdal from '../../componentz/InviteToSpeakMOdal/InviteToSpeakMOdal';
import GetCourseModal from '../../componentz/admin/GetCourseModal/GetCourseModal';

const TrainingAndResourcing = () => {
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
        <title>Training and Resourcing &mdash; Oak</title>
        <meta
          property='og:title'
          content='Training and Resourcing &mdash; Oak'
        />
        <meta property='og:type' content='website' />
        <meta name='description' content='' />
        <meta property='og:site_name' content='Oakonsult' />
      </Helmet>
      <div id='Training_intro'>
        <div
          id='VideoModal'
          style={showVideoPlayer}
          onClick={() => {
            ChangeDisplayModal(false);
          }}
        >
          <VideoModal
            data={['https://www.youtube.com/embed/IpQeVtuDeIA']}
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
          <h1 id='quote'>TRAINING & RESOURCING</h1>
          <p id='quoteText'>
            In partnership with Joni & Friends Ministry (USA), we train and work
            with churches to create Special Needs group/unit focused on meeting
            the needs and integrating people with special needs/ or disability
            in church life.
          </p>
          {/* btn */}
          <div
            id='watchStory'
            onClick={() => {
              ChangeDisplayModal(true);
            }}
          >
            <div className='icon'></div>
            <p className='text'>My Message To Churches</p>
          </div>
        </div>

        <div className='introVideoButton'>
          <div className='hexagon'></div>
        </div>
      </div>
      <div id='Training_goals'>
        <div className='bgLayer'>
          <div id='heartIcon'></div>

          <p>
            “For I am persuaded that neither death nor life, nor angels nor
            principalities nor powers, nor things present nor things to come,
            nor height nor depth, nor any other created thing, shall be able to
            separate us from the love of God which is in Christ Jesus our Lord”.
            Romans 8:38-39 (ERV)
            <br />
            <br /> Beyond Suffering Course has been designed by the Joni and
            Friends Ministry (USA) to explore the problem of suffering in
            general and then to examine ways in which the disability community
            provides the church with a dynamic model of spiritual
            transformation.
          </p>
        </div>
      </div>
      <div id='Training_forYou'>
        <h1>
          Beyond Suffering Course (BYS) - A Christian Perspective to Disability
        </h1>
        <p>
          People with disabilities are considered one of the world’s largest
          under-represented groups.
          <br />
          <br /> The church is largely unprepared for the burgeoning disabled
          population.
        </p>
        <ul>
          <li>
            Have you ever suffered physically, emotionally, or spiritually and
            wondered why?
          </li>
          <li>
            Do you have family members or friends with disabilities and struggle
            to know what to say or how to act around them?
          </li>
        </ul>
        <div
          className='getCourse'
          onClick={() => {
            setDialogVisible(true);
          }}
        >
          GET THIS COURSE
        </div>
      </div>

      <div id='TargetAndGoals'>
        <div id='ForWho'>
          <h2>Who is this for?</h2>
          <p>The BYS Course Prepares:</p>
          <ul>
            <li>
              Leaders in ministry, education, medicine, and science to become
              involved in this life-changing ministry
            </li>
            <li>
              Students in the seminary and other Bible Colleges and Institutions{' '}
            </li>
            <li>
              Individuals seeking to know and understand more of the theology of
              suffering in a broken world
            </li>
            <li>
              Parent/Carers of anyone with disabilities seeking for more
              understanding and answers to those difficult questions e.g., why
              did God allow my child or loved one to have disabilities despite
              my faith? Why has God not healed or deliver in line with Biblical
              examples?
            </li>
          </ul>
        </div>
        <div id='Aim'>
          <h3>Aim</h3>
          <p>The BYS Course seeks to:</p>
          <ul>
            <li>
              Provide a deeper understanding of the disability community and the
              church’s obligation to reach out to those who are most vulnerable
            </li>
            <li>
              Address the issue of suffering as a Christian and implications for
              how the Christian community views the issues of disability
            </li>
            <li>
              Learn to embrace the student’s own brokenness in a whole new way
            </li>
          </ul>
        </div>
      </div>
      <div id='CourseDistributionCard'>
        <div id='pinkTag'></div>
        <div id='topicCardContent'>
          OAKONSULT DISABILITIES OUTREACH offers the Beyond Suffering Course to
          the above listed audiences and delivers the course in Churches,
          Conferences or as workshops.
        </div>
      </div>

      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <GetCourseModal
          courseType={courseType}
          setDialogVisible={setDialogVisible}
        />
      </Dialog>
    </>
  );
};

export default TrainingAndResourcing;
