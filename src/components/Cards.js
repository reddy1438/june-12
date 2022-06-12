import React, { Component } from 'react';
import Card from './Card';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

class Cards extends Component{
    render(){
        return (
            <div id='project-app-text'>
            <h1>Project Application</h1>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1}
                              title="Project 1: HTML Workshop"
                              paragraph="This is a workshop based on HTML structures which is prominently used now a days in Web Development. Come and Let's join the workshop scheduled to be on Monday, the 13th of June 2022 at 9:00 AM sharp. Subscribe now"
                              />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img2}
                              title="Project 2: CSS Workshop"
                              paragraph="This is a workshop based on CSS structures which is prominently used now a days in Web Development. Come and Let's join the workshop scheduled to be on Monday, the 13th of June 2022 at 9:00 AM sharp. Subscribe now"
                              />
                        
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img3}
                              title="Project 3: React Workshop"
                              paragraph="This is a workshop based on React libraries which is prominently used now a days in Web Development. Come and Let's join the workshop scheduled to be on Monday, the 13th of June 2022 at 9:00 AM sharp. Subscribe now"
                              />
                    </div>

                </div>
            </div>
            <div className='project-footer'>
                <h3>This application is made by Rounak Chakraborty</h3>
                <h4>© All Rights Reserved</h4>
            </div>
            </div>
        );
    }
}

export default Cards;