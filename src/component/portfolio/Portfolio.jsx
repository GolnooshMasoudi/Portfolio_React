import "./portfolio.css"
import ProjectAPI from "../../assets/portfolio/posts.json"
import P1 from "../../assets/portfolio/P1.png"
import P2 from "../../assets/portfolio/P2.png"
import P3 from "../../assets/portfolio/P3.png"
import P4 from "../../assets/portfolio/P4.png"
import P5 from "../../assets/portfolio/P5.png"
import P6 from "../../assets/portfolio/P6.png"
import P7 from "../../assets/portfolio/P7.png"

const i=[P1, P2, P3,P4, P5, P6, P7];


const Portfolio = () => {



  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      {console.log(ProjectAPI)}

      <div className="container portfolio-container">

        {
          ProjectAPI.map((project) => {
            return (
              <article key={project.id} className="portfolio-item">
                <div className="portfolio-item-img">
                  <img src={i[project.id -1]} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio-item-btn">
                  <a href={project.GitUrl} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.NetlifyUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>

     

    </section >

  )
}

export default Portfolio