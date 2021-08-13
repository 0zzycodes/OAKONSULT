import ProgrammeCard from './ProgrammeCard';
const CurrentProgrammes = () => {
  return (
    <div id='currentProgrammes' style={{ display: 'flex' }}>
      <ProgrammeCard
        data={{
          date: '20th July 2026',
          title: 'You are closer then you think- keep going',
          content:
            'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the',
        }}
      />
      <ProgrammeCard
        data={{
          date: '11th April 2077',
          title: 'If you believe then you will- grow',
          content:
            'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum',
        }}
      />
    </div>
  );
};

export default CurrentProgrammes;
