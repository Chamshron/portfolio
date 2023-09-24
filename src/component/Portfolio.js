import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Brief from '../images/kendobrief.png';
import Timeline from '../images/kendomodels.png';
import Proud from '../images/proudof.png';
import Proud2 from '../images/hardwonvictory.png';

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
                <h4>CodeClan Solo Python Project</h4>
                <p>After 5 weeks of learning python, I was given my solo-python project.</p>
                <br></br>
                <p>I was tasked with building a score keeping application for your sport of choice. As I am an avid Kendo enthusiast, I tailored the brief to reflect this.</p>
                <br></br>
                <img className="ExamplePhotos" src={Brief}/>
                <img className="ExamplePhotos" src={Timeline}/>
                <img className="ExamplePhotos" src={Proud}/>
                <img className="ExamplePhotos" src={Proud2}/>
                <br></br>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
     );
}
 
export default PortfolioPage;