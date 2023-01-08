export default function Home() {
  return (
    <>
      <main className='container'>
        <div>
          <h1 className=''>News Reader 🗞️</h1>
          <p>
            Discover what`s happening around the world with more than 80k+
            articles with updated, controversial and excitement information!
          </p>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 90vh;
          display: grid;
          place-items: center;
          text-align: center
        }

        @media only screen and (min-width: 1000px) {
          p {
            width: 27rem;
          }
        }
      `}</style>
    </>
  )
}
