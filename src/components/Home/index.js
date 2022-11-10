import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.replace('./jobs')
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-text-container">
        <h1 className="heading">Find The Job That Fits Your LIfe</h1>
        <p className="paragraph-home">
          Millions of people are searching for the jobs, salary information,
          company reviews. Find the job that fits your abilities and potential.
        </p>
        <button onClick={onClickFindJobs} type="button" className="find-button">
          Find Jobs
        </button>
      </div>
    </div>
  )
}
export default Home
