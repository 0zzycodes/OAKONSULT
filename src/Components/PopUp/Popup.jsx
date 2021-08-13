import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Popup.scss';
import Dialog from '../../componentz/Dialog/Dialog';
import InviteToSpeakMOdal from '../../componentz/InviteToSpeakMOdal/InviteToSpeakMOdal';

const Popup = (props) => {
  // console.log(props.data.length > 0);
  let randomSelected =
    props.data && Math.floor(Math.random() * props.data.length);
  // console.log(randomSelected);
  let displayValue;
  const [showPopUp, changeShowPopUp] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      changeShowPopUp(true);
    }, 500);
  }, []);

  showPopUp
    ? (displayValue = { display: 'flex' })
    : (displayValue = { display: 'none' });

  return (
    <div id='bg_Blur' style={displayValue}>
      <div id='popUp'>
        <div
          className='close'
          onClick={() => {
            changeShowPopUp(false);
          }}
        ></div>
        <div className='popUpcontent'>
          <h2 className='popUpTitle'>GOD PROMISES</h2>
          <p className='popUpText'>
            {props.data.length > 0 && props.data[randomSelected].quote}
          </p>
          <div className='popUpSource'>
            {(props.data.length > 0 &&
              props.data[randomSelected].bible_verse) ||
              ''}
          </div>
        </div>

        <div className='horizontalLine'></div>
        <div className='popupNav'>
          <div className='welcome'>
            <div className='popupImg'></div>
            <h2>Welcome to OAKonsult, thanks for visiting</h2>
          </div>

          <div className='navLinks'>
            <p
              className='speakWithMe nav_btn'
              onClick={() => {
                setDialogVisible(true);
                // changeShowPopUp(false);
              }}
            >
              Speak with me
            </p>

            <Link
              to='/training-and-resourcing'
              className='nav_btn'
              onClick={() => {
                changeShowPopUp(false);
              }}
            >
              Training and Resources
            </Link>

            <a
              href='https://www.youtube.com/channel/UChT6azxnwdbpt5fncV1q7EQ'
              target='_blank'
              className='nav_btn YT_btn'
            >
              Watch Youtube Videos
            </a>
          </div>
        </div>
      </div>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <InviteToSpeakMOdal setDialogVisible={setDialogVisible} />
      </Dialog>
    </div>
  );
};

export default Popup;
