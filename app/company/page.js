function Company() {
  return (
    <>
      <div className="relative w-full h-72">
        <img
          src="https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center  justify-center bg-white">
        <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 max-w-4xl">
          {/* Card 1 */}
          <a
            href="#"
            className="group relative block bg-black rounded-lg overflow-hidden shadow-lg"
          >
            <img
              alt="Tony Wayne"
              src="https://i.pinimg.com/564x/f3/d7/62/f3d76232791774741204d3e6130e13f4.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-orange-500">
                C.E.O
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                John Doe
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="#"
            className="group relative block bg-black rounded-lg overflow-hidden shadow-lg"
          >
            <img
              alt="Jane Doe"
              src="https://i.pinimg.com/736x/0a/42/ff/0a42ff35ea202f6ef25019233d106583.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-orange-500">
                C.O.O
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                Jane Doe
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <section className="bg-white text-black">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod
              ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga
              minima.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-orange-500 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
