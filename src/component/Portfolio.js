import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const PortfolioPage = () => {
    return ( 
        <div>
            <VerticalTimeline lineColor='#FF6969'>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='Janurary 2023' iconStyle={{background:"#FF6969", color: "#141E46"}}>
                <h4>Codecademy Learn SQL Course</h4>
                <p>After using SQL at my previous workplace, I became interested in how the language worked.</p>
                <br></br>
                <p>I signed up for codecademy's Learn SQL course to learn the basics of managing large datasets as well as analysing data.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='CodeClan Week 5' iconStyle={{background:"#FF6969", color: "#141E46"}}>
                <h4>Solo Python Project</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
     );
}
 
export default PortfolioPage;