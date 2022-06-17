import React from 'react'
const features1 =[
	{
		id:1,
		name:"OUR VISION",
		img:"/assets/images/vision.jpg",
		title:"OUR VISION",
		description:"“Fineax AI Solutions visualizes the world as smart and skillful in terms of technologies, lifestyle, educations, etc., making it a view of new dimension and ahead to influence people and motivate them towards living hood.”"
	},
]
const features2 =[
	{
		id:1,
		name:"OUR MISSION",
		img:"/assets/images/12.jpeg",
		title:"OUR MISSION",
		description:"Fineax missions for creating its vision theory making it truthful, worthful, applicable and productive, by creating database to articulate view of new dimension with development towards a skillful society, growing in consistent pattern, driven by our oriented vision"
	},
]
const Features = () => {
  return (
    <>
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	{features1.map((item) =>(
			<div key={item.id} className="container mx-auto space-y-12 mb-5">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">				
					<img src={item.img} alt={item.name} className="h-80 dark:bg-gray-500 aspect-video" />
					<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						<h3 className="text-3xl font-bold">{item.title}</h3>
						<p className="my-6 dark:text-gray-400 italic">{item.description}</p>
					</div>
				</div>		
			</div>
		))}
		{features2.map((item) =>(
				<div key={item.id} className="container mx-auto space-y-12 mb-4">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
				<div  className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						<h3 className="text-3xl font-bold">{item.title}</h3>
						<p className="my-6 dark:text-gray-400 italic">{item.description}</p>
					</div>
					<img src={item.img} alt={item.name} className="h-80 dark:bg-gray-500 aspect-video" />
				
				</div>		
			</div>
		))}
	
	</section>
    </>
  )
}

export default Features;