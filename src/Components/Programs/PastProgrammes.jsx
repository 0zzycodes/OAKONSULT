import ProgrammeCard from './ProgrammeCard';
const PastProgrammes = () => {
  return (
    <div id='pastProgrammes' style={{ display: 'flex' }}>
      <ProgrammeCard
        data={{
          date: '20th July 2010',
          title: 'Elitist - Rare Achievement',
          content:
            'In the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum, only the gospel of Jesus can make a lasting, significant, and eternal difference',
        }}
      />
      <ProgrammeCard
        data={{
          date: '11th April 1977',
          title: 'Past Event',
          content:
            'Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum',
        }}
      />
    </div>
  );
};

export default PastProgrammes;
