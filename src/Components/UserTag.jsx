import React from 'react';
import '../Scss/userTag.scss';

const UserTag = (props) => {
  let color;
  if (props.data[0]) {
    switch (props.data[0]) {
      case 'Parent Carers':
        color = { background: '#cac492' };
        break;
      case 'Churches':
        color = { background: '#009ba7' };
        break;

      default:
        console.log("There's a bug in tag color switcher");
        break;
    }
  }
  return (
    <div id='user_tag' style={color}>
      {props.data[0]}
    </div>
  );
};

export default UserTag;
