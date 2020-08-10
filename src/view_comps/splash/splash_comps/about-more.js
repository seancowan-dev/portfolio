import React from 'react';
import { inject, observer } from 'mobx-react';

const AboutMore = inject('helpers')(observer((props) => {
    return (
    <div className="about-more-container">
        <img className="about-more-banner" src="/images/aboutmorebanner.png" alt="About Sean Banner" />
        <div className="about-more-text">
            <p>When I'm not writing code or snappy poems about writing code, you'll find me watching interesting things on YouTube and Netflix, listening to music, cooking food, or out on my motorcycle. Even in my downtime I like to learn new things and watch a lot of documentaries.</p>

            <p>For the last five years I have been working as a professional chef and with that I bring a unique skillset to this industry. A kitchen requires you to not only excel at individual tasks, but in a team environment as well. Each person plays a critical role in the completion of a particular dish, in exactly the same way as each person on a development team must finish their piece of the project for all the others to work.</p>

            <p>During a busy service it is not uncommon to have 60-120 people expected for the evening, with 40-50 guests presently in the dining room. This is where the first team component comes into play, the serving staff will stagger the input of the orders based on when guests arrived (first come first serve). This is to ensure that back in the kitchen we receive orders in blocks of 10-15 rather than all 50 at once. Then we must coordinate so that if those 15 orders are 2 tables of 4, one table of 5, and one table of 2 that the dishes for each table come out at the same time. If someone at the table of 5 orders a well done steak (the longest cooking item) then we must hold off on all items for the rest of the table so that the person with the steak eats with the rest of the guests at the table.</p>

            <p>Such a team oriented methodology continues on to every level of working in a kitchen, even including one's individual tasks. None of the above process can occur unless I and every other chef in the kitchen has preparred their station appropriately. If we do not have a sufficient supply of all the food items we need to complete our dishes we will be scrambling later; and letting the rest of the team down. </p> 
            
            <p>Agile team-coordinated deployment as a developer is something that is second nature to me because I've spent years in an industry where you have to perform under fast-paced high pressure conditions on a daily basis or one will quickly find themselves out of a job.</p>
        </div>
    </div>
    );
}));

export default AboutMore;


