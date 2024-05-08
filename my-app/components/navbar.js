import React from 'react'

export default function NavBar() {

  return (
      <div className="grid grid-cols-4 absolute inset-x-0 top-0 justify-center p-28">
      
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a href="/about">
            <h2 className={`mb-3 text-1xl font-semibold text-gray-300 transition-transform hover:scale-125`}>
              About {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a href="/eventsPage">
            <h2 className={`mb-3 text-1xl font-semibold text-gray-300 transition-transform hover:scale-125`}>
              Events & Blog {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a href="/sponsors">
            <h2 className={`mb-3 text-1xl font-semibold text-gray-300 transition-transform hover:scale-125`}>
              Sponsors{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a href="/contactPage">
            <h2 className={`mb-3 text-1xl font-semibold text-gray-300 transition-transform hover:scale-125`}>
              Contact {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>

      </div>

  )
}