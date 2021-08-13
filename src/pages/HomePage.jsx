import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Scss/homepage.scss';
import '../Scss/mediaQuery.scss';

// Images
import LibraryImg from '../Assets/Library.svg';
import HeartImg from '../Assets/heart.svg';
import Star from '../Assets/star.svg';
import ChatIcon from '../Assets/ChatIcon.svg';
import PlayIcon from '../Assets/playbutton.svg';
import StackIcon from '../Assets/stackIcon.svg';
import syllabusIcon from '../Assets/syllabusIcon.svg';
import QuestionMark from '../Assets/icons/QuestionMark.svg';

// External components
import ExploreBtn from '../Components/ExploreBtn';
import SectionIcon from '../Components/SectionIcon';
import UserTag from '../Components/UserTag';
import TagDetail from '../Components/TagDetails';
import WatchStory from '../Components/WatchStory';
import SyllabusCard from '../Components/SyllabusCard';
import Dialog from '../componentz/Dialog/Dialog';
import InviteToSpeakMOdal from '../componentz/InviteToSpeakMOdal/InviteToSpeakMOdal';
import VideoModal from '../Components/VideoModal/VideoModal';
import About from '../Components/About/About';

// Internal Component

const Homepage = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [DisplayModal, ChangeDisplayModal] = useState(false);
  const [W_SdisplayModal, ChangeW_SdisplayModal] = useState(false);
  const [showStoryModal, setShowStoryModal] = useState('none');

  let showVideoPlayer;
  DisplayModal
    ? (showVideoPlayer = { display: 'flex' })
    : (showVideoPlayer = { display: 'none' });

  let showStoryPlayer;
  // useEffect(() => {
  W_SdisplayModal
    ? (showStoryPlayer = { display: 'flex' })
    : (showStoryPlayer = { display: 'none' });
  // }, [W_SdisplayModal]);

  return (
    <>
      <section id='homePage'>
        {/* Intro Video Player */}
        <div id='VideoModal' style={showVideoPlayer}>
          <VideoModal
            data={['https://www.youtube.com/embed/IpQeVtuDeIA']}
            closeFunc={() => {
              ChangeDisplayModal(false);
            }}
          />
        </div>
        {/* Watch My Story Video Player */}
        <div id='VideoModal' style={{ display: showStoryModal }}>
          <VideoModal
            data={['https://www.youtube.com/embed/-ypL6F7Mj0A']}
            closeFunc={() => {
              setShowStoryModal('none');
            }}
          />
        </div>

        {/* Section 1 */}

        <div id='intro'>
          <div className='introTextContent'>
            <div className='quoteSrc'>
              <div className='quote_dash'></div>
              <p id='quoteSource'>John 10:10</p>
            </div>
            <h1 id='quote'>
              that you may have
              <br /> life, and that more
              <br /> abundantly
            </h1>
            <div className='homepageCallToAction'>
              <Link to='/blogs'>
                <ExploreBtn data={['Explore our library', LibraryImg]} />
              </Link>
              <Link to='/about'>
                <ExploreBtn data={['About OAK', QuestionMark]} />
              </Link>
            </div>
          </div>

          <div className='introVideoButton'>
            <div className='hexagon'>
              <div
                id='play_btn'
                onClick={() => {
                  ChangeDisplayModal(true);
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section 2 */}

        <div id='whoAreYou'>
          <SectionIcon image={HeartImg} />
          <div id='whoAreYouContent'>
            <section className='AboutDeets'>
              <h1>
                Are you a Parent Carer of a Child /Young Person with
                Disabilities or Special Needs OR A Faith-Based Organisation
              </h1>
              <p>
                OAK’s mandate is to introduce the gospel of Christ to Carers. We
                empower Carers and families dealing with disability matters with
                biblical principles and truth.
              </p>
              <div className='tagGroup'>
                <UserTag data={['Parent Carers']} />
                <UserTag data={['Churches']} />
              </div>
            </section>
            <section className='userCategories'>
              <TagDetail
                data={[
                  {
                    tagName: 'FOR PARENT CARERS',
                    tagContent:
                      'Providing care for children or family members with disabilities, complex or life limiting conditions impact Carers in different ways.',
                  },
                ]}
              />
              <TagDetail
                data={[
                  {
                    tagName: 'FOR CHURCHES',
                    tagContent:
                      'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities.',
                  },
                ]}
              />
            </section>
          </div>
        </div>

        {/* Section 3 */}
        <div id='RssCategories'>
          <h2 id='sectionTitle'>OUR OFFERINGS</h2>
          <p id='sectionDetails'>
            OAK’s mandate is to introduce the gospel of Christ to Carers. We
            empower Carers and families dealing with disability matters with
            biblical principles and truth that will enable them find fulfilment
            at whatever stage they might be in their individual journeys.
          </p>

          <div className='cards_mother'>
            <div className='rssCard parents'>
              <h2 className='cardTitle'>FOR PARENT CARERS</h2>
              <p className='cardContent'>
                Providing care for children or family members with disabilities,
                complex or life limiting conditions impact Carers in different
                ways. This could be physical, emotional, social, financial, or
                spiritual just to mention a few; and in many instances, a
                combination of all these factors.
              </p>
              <Link to='./carers'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard churches'>
              <h2 className='cardTitle'>
                FOR CHURCHES AND
                <br /> FAITH-BASED ORGANISATIONS
              </h2>
              <p className='cardContent'>
                Only the gospel of Jesus can make a lasting, significant, and
                eternal difference in the lives of people with disabilities;
                just like it is for every living being on the surface of the
                earth! The needs of families dealing with disabilities go beyond
                charitable offers, as helpful as these are.
              </p>
              <Link to='./churches'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard training'>
              <h2 className='cardTitle'>TRAINING AND RESOURCES</h2>
              <p className='cardContent'>
                In partnership with Joni & Friends Ministry (USA), we train and
                work with churches to create Special Needs group/unit focused on
                meeting the needs and integrating people with special needs/ or
                disability in church life.
              </p>
              <Link to='./training-and-resourcing'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>

            <div className='rssCard publicSpeaking'>
              <h2 className='cardTitle'>PUBLIC SPEAKING</h2>
              <p className='cardContent'>
                I speak to faith and non-faith-based audiences at: Carer’s
                Groups, Women forums, Retreats, Churches and Conferences.
              </p>
              <Link to='./public-speaking'>
                <div id='learnMore_btn'>
                  <p>Learn More</p>
                  <div className='learnMore_icon'></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Section 4 */}

        <div id='aboutFounder'>
          <SectionIcon image={Star} />
          <div className='aboutContent'>
            <div id='Q_A'>
              <h1>Meet Olufunke Adeloye</h1>
              <p>
                Olufunke is the founder of OAKONSULT DISABILITIES OUTREACH
                (OAKONSULT). She strongly believes in the difference the
                ‘God-factor’ makes in caring roles and is passionate about
                Carers finding fulfillment at whatever stage they are at in
                their individual journeys. Olufunke speaks from the heart and
                draws extensively from her walk with the Lord as a Carer,
                sharing the love of Christ among families within this sphere. In
                addition to her caring role, Olufunke is a Beyond Suffering
                Course Instructor with the Joni & Friends Ministry (USA),
                certified Personal Development Coach from the Coaching Academy,
                UK, and a Public Speaker.
                <br />
                <br />
                Olufunke had her career background in both specialist and
                generalist roles in human resource practicing across the
                educational, banking, consulting, and telecommunications
                sectors. She made a transition into the field of disabilities
                due to her personal life experience, working within the third
                sector industry, to support families of children and young
                people with Special Educational Needs and Disabilities.
                Seamlessly combining transferable skills from her experience
                with her latest career move, she empowers parents/carers with
                essential information and vital tools needed to support them as
                they continue the enormous task of providing care for their
                children and young people with disabilities. She recently had
                the privilege to lead on a policy implementation project of the
                Children and Families Act 2014 which brought a needed change to
                the type of support available to children with Special
                Educational Needs in the UK.
              </p>
            </div>
            <div id='Founder'>
              <div id='founderImg'></div>
              <ExploreBtn
                onClick={() => setDialogVisible(true)}
                data={['Speak With Me', ChatIcon, true]}
              />
            </div>
            <div id='aboutFounder'>
              <p className='founderDetails'>
                Olufunke has a Diploma in Personal Performance Coaching (Merit
                Award) from the Coaching Academy, UK, MA International Social
                Policy from the University of Kent, Canterbury, UK; M.Sc.
                Geography (Area of Specialization: Population Geography and
                Resources Analysis)
              </p>
              <p className='founderDetails'>
                Olufunke has a Diploma in Personal Performance Coaching (Merit
                Award) from the Coaching Academy, UK, MA International Social
                Policy from the University of Kent, Canterbury, UK; M.Sc.
                Geography (Area of Specialization: Population Geography and
                Resources Analysis)
              </p>
              <p className='founderDetails'>
                Olufunke has a Diploma in Personal Performance Coaching (Merit
                Award) from the Coaching Academy, UK, MA International Social
                Policy from the University of Kent, Canterbury
              </p>
              <button
                style={{ border: 'none', backgroundColor: 'transparent' }}
                onClick={() => {
                  setShowStoryModal('flex');
                }}
              >
                <WatchStory data={{ text: 'Watch My Story', icon: PlayIcon }} />
              </button>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div id='syllabusIntro'>
          <SectionIcon image={StackIcon} />
          <div id='syllabusIntroContent'>
            <div id='syllabusIntroTitle'>
              <h2>OAKONSULT’s TRAINING PROGRAMS</h2>
              <Link to='./training-and-resourcing'>
                <ExploreBtn
                  data={['Browse Our Training Programs', syllabusIcon]}
                />
              </Link>
            </div>

            <div id='syllabusCards'>
              <SyllabusCard
                data={{
                  Title: 'Beyond Suffering',
                  Content:
                    ' Beyond Suffering Course has been designed by the Joni and Friends Ministry (USA) to explore the problem of suffering in general and then to examine ways in which the disability community provides the church with a dynamic model of spiritual transformation.',

                  Link: 'training-and-resourcing',
                }}
              />

              <SyllabusCard
                data={{
                  Title: 'Project Me',
                  Content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consequat dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

                  Link: 'training-and-resourcing',
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <InviteToSpeakMOdal
          setDialogVisible={setDialogVisible}
          title='Speak With Me'
        />
      </Dialog>
    </>
  );
};

export default Homepage;
