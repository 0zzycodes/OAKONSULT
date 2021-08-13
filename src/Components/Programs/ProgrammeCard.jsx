const ProgrammeCard = (props) => {
  return (
    <div id='ProgrammeCard'>
      <div id='dateTag'>{props.data.date}</div>
      <div id='card'>
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
        <div id='Register'>REGISTER NOW</div>
      </div>
    </div>
  );
};

export default ProgrammeCard;
