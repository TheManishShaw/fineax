import React from 'react'
import SingleTeam from './SingleTeam'
import TeamData from '../../data/team/TeamData'
import Head from 'next/head'
const Teams = () => {
  return (
    <>
        <Head>
            <title>About | Fineax</title>
        </Head>
          <section className="bg-white dark:bg-gray-900">
              <div className="container px-6 py-10 mx-auto">
                  <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span className="text-blue-500">Executive Team</span></h1>                
                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                   {TeamData.map((item) =>(
                       <SingleTeam key={item.id}
                       img={item.img}
                       name={item.name}
                       post={item.post}
                       bio={item.bio}
                       facebook={item.facebook}
                       github={item.github}                       
                       />  
                   ))}                 
                 </div>
              </div>
          </section>
    </>
  )
}

export default Teams