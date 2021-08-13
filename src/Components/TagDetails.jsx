import '../Scss/TagDetails.scss';

const TagDetail = (props) => {
  let color;
  if (props.data[0].tagName) {
    switch (props.data[0].tagName) {
      case 'FOR PARENT CARERS':
        color = { background: '#cbc593' };
        break;
      case 'FOR CHURCHES':
        color = { background: '#009ba7' };
        break;

      default:
        console.info("There's a bug in tag color switcher");
        break;
    }
  }
  return (
    <div id='tagDetails'>
      <div className='tagColor' style={color}></div>

      <div className='tagDeets'>
        <h3>{props.data[0].tagName}</h3>
        <p>{props.data[0].tagContent}</p>
      </div>
    </div>
  );
};

export default TagDetail;
