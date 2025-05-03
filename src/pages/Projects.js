import React from 'react'
import ProjectCard from "../components/ProjectCard"
import ProjectCard2 from "../components/ProjectCard2"

const Projects = () => {
  return (
    <>
      <h2 className='text-center text-3xl underline m-4'>Projects</h2>
      <div className='flex flex-wrap justify-center bg-gray-700'>
        {/* Crypsea Project */}
        <ProjectCard projectName="CrypSEA" imageSrc="/images/crypsea.jpg" description="This is Crypto Price traking website with Live price updates, Graphs, News, Blogs" demoLink="https://cryp-sea-elu.vercel.app" sourceLink="https://github.com/Elu007/CrypSEA" />

        {/* GenZ Project */}
        <ProjectCard projectName="GenZ Store" imageSrc="/images/genz.jpg" description=" GenZ ecommerce website, favourite shopping things in one spot." demoLink="https://gen-z-store.vercel.app" sourceLink="https://github.com/Elu007/GenZ-Store" />

        {/* TextUtils Next app */}
        <ProjectCard projectName="TextUtils" imageSrc="/images/textutils.jpg" description="Text utility app built with NextJs powered by AI tools." demoLink="https://text-utils-next.vercel.app" sourceLink="https://github.com/Elu007/TextUtils-Next" />

        {/* ReactJs Weather App */}
        <ProjectCard projectName="ReactJs Weather App" imageSrc="/images/weatherapp.jpg" description="Text utility app built with ReactJs that has a dark mode toggle feature." demoLink="https://elu007.github.io/React-Weather-App" sourceLink="https://github.com/Elu007/React-Weather-App" />

        {/* Crypto Extension */}
        <ProjectCard2 projectName="Crypto Price Chrome Extension" imageSrc="/images/cryptoextension.jpg" description="Chrome Extension that helps us to check live Crypto currency prices in just on click."sourceLink="https://github.com/Elu007/CryptoCurrency-Live-Prices" />

        {/* Daily Quotes Extension */}
        <ProjectCard2 projectName="Daily Quotes Chrome Extension" imageSrc="/images/dailyquotes.jpg" description="Chrome extension that fetch motivational quotes in just one click."sourceLink="https://github.com/Elu007/Daily-Quotes" />
      </div>
    </>
  )
}

export default Projects
