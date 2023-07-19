
import { SkillBars } from 'react-skills';

const skillsData= [
  {
    name: 'HTML',
    level: 90,
    color: 'gray',
  },
  {
    name: 'CSS',
    level: 85,
    color: 'gray',
  },
  {
    name: 'JS',
    level: 70,
    color: 'gray',
  },
  {
    name: 'Bootstrap',
    level: 85,
    color: 'gray',
  },
  {
    name: 'Tailwind',
    level: 75,
    color: 'gray',
  },
  {
    name: 'React JS',
    level: 80,
    color: 'gray',
  },
  {
    name: 'Firebase',
    level: 70,
    color: 'gray',
  },
  {
    name: 'Node JS',
    level: 60,
    color: 'gray',
  },
  {
    name: 'Express JS',
    level: 70,
    color: 'gray',
  },
  {
    name: 'MongoDB',
    level: 60,
    color: 'gray',
  },
  {
    name: 'Wordpress',
    level: 45,
    color: 'gray',
  },
  {
    name: 'Tools',
    level: 80,
    color: 'gray',
  },
]


const SkillBar = () => {
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className='w-full'>
                    <SkillBars skills={skillsData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillBar;