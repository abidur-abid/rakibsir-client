import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

import Skill from '../../Components/Skill';
import SkillBanner from '../../Components//SkillBanner';
import { Helmet } from 'react-helmet-async';
import SkillBar from '../../Components/Skillbar';

const Skills = () => {
    return (
    <section>
      <div className="custom-container">
        <SectionTitle title={'My Achievements_'}></SectionTitle>
        <div className="">
       <p>
       1. BSS Merit Scholarship 2014 by Muktizoddha Hall, University of Dhaka
       </p>

        <p>
        2. SSC Merit Scholarship 2008 by Dhaka Education Board, Dhaka
        </p>

        <p>
        3. Merit Award 2008 by Dhanmondi Govt. Boys’ High School
        </p>

        <p>
        4. Merit Award 2006 by Zila Administration, Dhaka, Bangladesh
        </p>

        <p>
        5. Merit Award 2008 by Prothom Alo
        </p>

       <p>
       6. Merit Award 2008 by DexSA
       </p>
        </div>
      </div>
    </section>
    );
};

export default Skills;