import React, { Component } from "react"

const PortfolioListContent = [
  {
    image: "image-6",
    category: "ReactJs, Radix-Ui, Storybook",
    title: "IgniteLab DS",
    link: "https://ignite-lab-design-system-nu.vercel.app/",
    repo: "https://github.com/juniorvilas/Ignite-Lab-Design-System",
    info: "Project simple, but the main objective is to put into practice polyformism with Radix Ui Slot along with Storybook.",
  },
  {
    image: "image-4",
    category: "React Native, Expo, TypeScript",
    title: "IgniteLab Rockethelp",
    link: "",
    repo: "https://github.com/juniorvilas/rockethelp",
    info: "Project made to log in and open a ticket, finalize IT calls create with React Native.",
  },
  {
    image: "image-5",
    category: "ReactJS, TypeScript, Vite, Tailwind",
    title: "IgniteLab React Js",
    link: "https://ignitelab-sand.vercel.app/",
    repo: "https://github.com/juniorvilas/Ignitelab",
    info: "System where you can log in and watch classes that are on graphcms.",
  },
  {
    image: "image-1",
    category: "Javascript, HTML, CSS",
    title: "Keep Notes",
    link: "https://juniorvilas.github.io/CheckPoint2-FrontEnd2_Grupo01/",
    repo: "https://github.com/juniorvilas/CheckPoint2-FrontEnd2_Grupo01",
    info: "Project to add a task and then be able to delete it using Javascript.",
  },
  {
    image: "image-3",
    category: "Javascript, HTML, CSS",
    title: "Geek Zone",
    link: "https://vanessagomesdeoliveira.github.io/projetofinalFront1/",
    repo: "https://github.com/juniorvilas/projetofinalFront1",
    info: "Website game created using Javascript",
  },
  {
    image: "image-2",
    category: "Javascript, HTML, CSS",
    title: "Register movies",
    link: "https://juniorvilas.github.io/Projeto_Checkpoint1_FrontEnd2/",
    repo: "https://github.com/juniorvilas/Projeto_Checkpoint1_FrontEnd2",
    info: "Website so you can register a movie created using Javascript",
  },
]

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props
    const list = PortfolioListContent
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.link} rel="noreferrer" target="_blank">
                      {value.title}
                    </a>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "normal",
                        color: "rgb(219, 219, 219)",
                      }}
                    >
                      {value.info}
                    </div>
                  </h4>
                  <div className="postButtons">
                    {value.link ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                      </div>
                    ) : null}
                    {value.repo ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.repo}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}
export default PortfolioList
