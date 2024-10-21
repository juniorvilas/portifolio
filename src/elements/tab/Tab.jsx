import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#service">
                            Frontend Development <span> - Development</span>
                          </a>
                          Build websites and web apps using javascript,
                          typescript and their frameworks. I use technologies
                          like HTML, CSS, Javascript, typescript, and tools
                          like: VSCode ,React JS ,Next JS,Styled Components
                          Redux, Mongodb, Git, Github, Vite, and more.
                        </li>
                        <li>
                          <a href="#service">
                            Backend Development<span> - Backend</span>
                          </a>
                          Build websites and web apps using NodeJs, Nest , API
                          Rest, SQL and MySQL, MongoDb.
                        </li>
                        <li>
                          <a href="#service">
                            Testing <span> - QA</span>
                          </a>
                          Jest, Testing Library, Postman, Robot Framework e
                          Selenium.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Supply Chain and Logistics Management
                            <span> - Unime- Jan 2014</span>
                          </a>{" "}
                          Bachelor's degree in Logistics, ability to deal with
                          numbers and good logical thinking. It is important to
                          enjoy establishing and monitoring processes, being
                          methodical and interested in matters related to
                          transport and storage, among other topics in the
                          logistics universe.
                        </li>
                        <li>
                          <a href="/service">
                            Full-Stack web development certification
                            <span> - Digital House - May 2021</span>
                          </a>{" "}
                          “Certified Tech Developer” is a two-year course,
                          thought and designed by Mercado Livre and Globant
                          together with Digital House, where you will learn
                          technical knowledge and a series of soft skills that
                          are fundamental to inserting yourself in the most
                          disruptive companies in the world. The first year the
                          training will be in Full Stack Jr and the second is a
                          specialization in Front or Back-end.
                        </li>
                        <li>
                          <a href="/service">
                            React Development certification
                            <span> Udemy - Jan 2022</span>
                          </a>{" "}
                          Immersive course, with over 100 hours of coding.
                          <br />
                          ReactJS, NextJS, Styled-Components, Testes com Jest ,
                          Storybook, Strapi, HTML e CSS com TypeScript e
                          JavaScript. Built projects from zero to production
                          level.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
