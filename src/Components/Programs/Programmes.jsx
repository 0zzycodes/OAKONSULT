import { useState } from 'react';
import './Programmes.scss';
import ProgrammeCard from './ProgrammeCard';
import PastProgrammes from './PastProgrammes';
import CurrentProgrammes from './CurrentProgrammes';

const Programmes = () => {
  const [ProgrammeSort, ChangeProgrammeSort] = useState('Current');
  let currentStyle;
  let pastStyle;
  let colorSwitch = { currentColor: '#009ba7', pastColor: '#009ba799' };

  switch (ProgrammeSort) {
    case 'Current':
      console.log('current programmes');
      currentStyle = { display: 'block' };
      pastStyle = { display: 'none' };
      colorSwitch.currentColor = '#009ba7';
      colorSwitch.pastColor = '#009ba799';

      break;
    case 'Past':
      console.log('Past programmes');
      currentStyle = { display: 'none' };
      pastStyle = { display: 'block' };
      colorSwitch.currentColor = '#009ba799';
      colorSwitch.pastColor = '#009ba7';

      break;
    default:
      console.log('Error in programme switcher');
  }

  return (
    <div id='Programmes'>
      <div id='ProgrammesIntro'>
        <h2 id='Title'>
          OUR
          <br /> PROGRAMMES
        </h2>
        <div id='calenderImage'></div>
      </div>
      <div id='programmesSection'>
        <div id='selectionNavBar'>
          <div
            id='current'
            className='programSelection'
            onClick={() => {
              ChangeProgrammeSort('Current');
            }}
            style={{ background: colorSwitch.currentColor }}
          >
            CURRENT PROGRAMS
          </div>
          <div
            id='past'
            className='programSelection'
            onClick={() => {
              ChangeProgrammeSort('Past');
            }}
            style={{ background: colorSwitch.pastColor }}
          >
            PAST PROGRAMS
          </div>
        </div>

        <div id='AvailiableProgrammes'>
          <div className='current' style={pastStyle}>
            <PastProgrammes />
          </div>

          <div className='past' style={currentStyle}>
            <CurrentProgrammes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
