import React from "react"

function Home() {
  return (
    <main className="w-full">
      <section>
        <h2>Get a free bible for your phone and tablet</h2>
        <p>online and offline bible is avaliable any time.</p>
        <p>No ads No Purchase</p>

        <div>
          <img
            src="https://www.bible.com/_next/image?url=%2Fassets%2Fimages%2Fqr-home.png&w=256&q=75"
            alt=""
          />
          <div>
            <img
              width={50}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo4V3uVC96vQ2wpvkXUY3Hkx8DbaNcWW1fXgIL2uFIb80XUez"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
