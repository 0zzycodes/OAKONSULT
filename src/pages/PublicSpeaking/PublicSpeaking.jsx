import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

import './PublicSpeaking.scss';
import TopicCard from '../../Components/TopicCard/TopicCard';
import ChatIcon from '../../Assets/ChatIcon.svg';
import VideoModal from '../../Components/VideoModal/VideoModal';

const PublicSpeaking = () => {
  const [DisplayModal, ChangeDisplayModal] = useState(false);
  let showVideoPlayer;
  DisplayModal
    ? (showVideoPlayer = { display: 'flex' })
    : (showVideoPlayer = { display: 'none' });
  return (
    <>
      <Helmet>
        <title>Public Speaking &mdash; Oak</title>
        <meta property='og:title' content='Public Speaking &mdash; Oak' />
        <meta property='og:type' content='website' />
        <meta name='description' content='' />
        <meta property='og:site_name' content='Oakonsult' />
      </Helmet>
      <div id='P_Sintro'>
        <div
          id='VideoModal'
          style={showVideoPlayer}
          onClick={() => {
            ChangeDisplayModal(false);
          }}
        >
          <VideoModal
            data={['https://www.youtube.com/embed/4iir1nvI444']}
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
          <h1 id='quote'>
            Public
            <br />
            Speaking
          </h1>
          <p id='quoteText'>
            I speak to faith and non-faith-based audiences at: Carer’s Groups,
            Women forums, Retreats, Churches and Conferences.
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
      <div id='PS_goals'>
        <div className='bgLayer'>
          <div id='heartIcon'></div>
          <p>
            I speak to faith and non-faith-based audiences at: Carer’s Groups,
            Women forums, Retreats, Churches and Conferences.
            <br />
            <br /> I have found out that absolutely nothing prepares you for the
            disability of your child. Even though some parents have the
            ‘opportunity’ of knowing about their children’s condition during
            pregnancy, the reality of ‘life as a Carer’ still pales until you
            begin to live it!
            <br />
            <br /> In my situation, we had no idea we would be going on this
            route until after 18 months of nurturing a healthy child!
          </p>
        </div>
      </div>
      <div id='PS_forYou'>
        <h1>Olufunke will inspire your audience to:</h1>
        <ul>
          <li>Know God’s mind about disabilities</li>
          <li>
            Create a more inclusive environment in your
            church/organization/group
          </li>
          <li>
            Be more deliberate about reaching out to people with disabilities
          </li>
          <li>Become a disability friendly church/organization/community</li>
          <li>Support more families affected by disabilities</li>
        </ul>
      </div>
      <div id='topicsSection'>
        <div id='questionAndImage'>
          <div id='questions'>
            <h3>As Carers therefore,</h3>
            <ul>
              <li>How do you navigate this terrain?</li>
              <li>What are the nagging questions?</li>
              <li>Where is God in all this?</li>
              <li>How do you move on from here?</li>
            </ul>
          </div>
          <div id='PS_Image'></div>
        </div>

        <div id='note'>
          I speak on these sometimes-sensitive issues with candor and clarity; I
          challenge, inspire and motivate my audience by combining biblical
          principles with the practicalities needful for an empowered and
          purposeful life as a Carer.
        </div>

        <div id='whatWeDiscuss'>
          <h3>Some of the topics I speak on are:</h3>
          <TopicCard data={{ content: 'Accepting the ‘Detour’' }} />
          <TopicCard
            data={{ content: 'What has ‘FAITH’ got to do with it?' }}
          />
          <TopicCard data={{ content: 'He gives peace' }} />
          <TopicCard data={{ content: 'When it’s all quiet' }} />
          <TopicCard data={{ content: 'The Carer and the family' }} />
          <TopicCard
            data={{ content: 'Coming home to myself – coming home' }}
          />
          <TopicCard data={{ content: 'Churches and other organisations' }} />
        </div>

        <div id='theChurch'>
          <div id='theChurchResponse'>
            <h2>THE CHURCH</h2>
            <p>
              The Church’s response to the issues of disabilities varies widely
              depending on diverse factors ranging but not limited to church
              denomination; attitude; knowledge; exposure; social; geographical;
              cultural, and several other related factors. While some
              erroneously believe disability is a “result of someone’s sins” or
              God trying to ‘punish’ an individual or the family; some others
              believe God must heal every disability and the person with
              disability should have ‘faith’, just to mention a few.
            </p>
          </div>
          <div id='churchTopic'>
            <h3>Some of the topics of discussion in churches are:</h3>
            <ul>
              <li>
                Identifying the 5 stages of disability – a journey of attitudes
              </li>
              <li>Disability – Healing or Acceptance?</li>
              <li>Disability and the Church</li>
              <li>Disability – how to connect with the family</li>
              <li>God’s role in disability</li>
              <li>Common myths about disability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* This button uses the format of ExploreBtn.jsx and ExploreBtn.scss with little modification */}
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
            backgroundImage: `url(${ChatIcon})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%',
          }}
        ></div>
        <p>Invite Me To Speak</p>
      </div>
    </>
  );
};

export default PublicSpeaking;
