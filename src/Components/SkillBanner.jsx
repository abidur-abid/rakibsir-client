import React from 'react';
import mern from '../Images/mern.png'
import { Pie, PieChart } from 'recharts';

const SkillBanner = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'Out Of ', value: 100 },
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 85 },
        { name: 'JS', value: 70 },
        { name: 'BootStrap', value: 80 },
        { name: 'Tailwind', value: 75 },
        { name: 'React JS', value: 82 },
        { name: 'Firebase', value: 60 },
        { name: 'Node JS', value: 50 },
        { name: 'Express JS', value: 65 },
        { name: 'MongoDB', value: 55 },
        { name: 'WordPress', value: 35 },
        { name: 'Tools', value: 77 },
       
      ];
    return (
        <section>
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column">
                    <PieChart width={400} height={400}>
                    <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#FECE2F"
                    />
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={100}
                        outerRadius={130}
                        fill="#FECE2F"
                        label
                    />
                    </PieChart>
                    </div>
                    <div className="custom-column">
                        <img src={mern} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillBanner;