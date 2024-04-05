import React from 'react'

export default function NavBar() {

  return (
      <div className="grid grid-cols-4 absolute inset-x-0 top-0 justify-center p-24">
      
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a
            href="/app/about"
            className="group rounded-lg border border-transparent px-5 py-4"
            //transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
            //target="_blank"
            //rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold transition-transform hover:scale-125`}>
              About {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a
            href="/Users/arzina/Desktop/aiinmedsoc/my-app/app/events"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold transition-transform hover:scale-125`}>
              Events & Blog {" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>


        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a
            href="/sponsors"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold transition-transform hover:scale-125`}>
              Sponsors{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
          <a
            href="/contact"
            className="group rounded-lg border border-transparent px-5 py-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold transition-transform hover:scale-125`}>
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