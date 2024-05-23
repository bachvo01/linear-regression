import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import RegressionGraph from './RegressionGraph';


function App() {
  const [yoe, setYoE] = useState(0);
  const [salary, setSalary] = useState(null);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        years_of_experience : parseFloat(yoe),
      });
      setSalary(response.data.predicted_salary)
    } catch (error) {
      console.error('Error...!', error);
    }
  }

  useEffect(() => {
    console.log(salary)
  }, [salary])
  return (
    <div className='home-container'>
      <div className='home-inner'>
        <div className='header-wrapper'>
          <h1 className='header monospace-header'>Linear Regression Model</h1>
          <div className='info-container'>
            <h2 className='info monospace-regular'>May 24, 2024. By Bach Vo</h2>
          </div>
        </div>
        <div className='sep-l'></div>
        <div className='article-container'>
          <div className='overview-section'>
            <h1 className='monospace-header-m'>Overview</h1>
            <div className='sep-s'></div>
            <p className='monospace-regular-p'>This project was created with the goal is to develop a predictive model for <strong>salary</strong> using 
            <strong> linear regression</strong>, a fundamental statistical method, to identify the relationship between an individual's salary and their respective years of experience. <br></br><br></br>As the number of layoff announcements has massively increased since 2022, a big question that every job seekers must ask is what is the most suitable job worth pursuing in the market.
            <br></br><br></br>Having a reliable model to predict job salary may become handy for job seekers before embarking on the journey of finding the best employment.
            </p>
          </div>

          <div className='overview-section'>
            <h1 className='monospace-header-m'>Dataset</h1>
            <div className='sep-s'></div>
            <p className='monospace-regular-p'>The project will utilize a dataset containing information about various factors that influence job salary, such as age, gender, education level, job title and especially years of experience. The dataset will be sourced from publicly available data sources (<a className='link' href='https://www.kaggle.com/datasets/mohithsairamreddy/salary-data'>Kaggle</a>).</p>
          </div>
          
          <div className='demo-section'>
            <h1 className='monospace-header-m'>Demonstration</h1>
            <div className='sep-s'></div>
            <form className='demo-container' onSubmit={handleSubmit}>
                <div className='row'>
                    <label className='monospace-regular-p'>Years of Experience</label>
                    <input type='number' value={yoe} className='monospace-regular-p' onChange={((e) => setYoE(e.target.value))}></input>
                </div>
                {
                  salary && <h2 className='monospace-regular-p'>Your predicted salary would be <span className='monospace-regular'>${Math.round(salary * 100) / 100}</span></h2>
                }
                <button className='monospace-regular-p' type='submit'>Predict salary</button>
            </form>
          </div>

          <div className='overview-section'>
            <h1 className='monospace-header-m'>Graph of the Regression Line</h1>
            <div className='sep-s'></div>
            <p className='monospace-regular-p'>Visualizing the regression line provides a clear understanding of how well the model fits the data. The steps include:
              <br></br>- Scatter Plot: Plotting the original data points with years of experience on the x-axis and salary on the y-axis. <br></br>
              - Regression Line: Adding the regression line to the scatter plot, which represents the predicted salary values for given years of experience.</p>
            <div className='sep-l'></div>
            <div className='sep-l'></div>
            <RegressionGraph></RegressionGraph>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
