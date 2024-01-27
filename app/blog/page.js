import axios from 'axios'
import React from 'react'

async function getBlog() {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)

  return response.data.results
}
export default async function Blog() {
  const blogs = await getBlog()
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {blogs.map((blog, inex) => (
              <div key={inex} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={blogs.url}>
                    <span className="absolute inset-0" />
                    {blogs.name}
                  </a>
                </h3>
                <p className="text-sm font-medium text-gray-900">{blog.name}</p>
                <p className="mt-1 text-sm text-gray-500">detail</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  )
}

{/* <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
{blogs.map((blog,index)=>(
  <div key={index}>
    {blog.name}
  </div>
))}
</div> */}