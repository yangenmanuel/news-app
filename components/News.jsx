export default function News({ articles }) {
  return (
    <>
      <h1>News</h1>

      {articles.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.title}</h2>
            {/* As the app has dynamic URLs for each image, it`s impossible to use the next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.urlToImage}
              width={100}
              height={100}
              alt={item.description}
            />
            <p>{item.description}</p>
          </div>
        )
      })}
    </>
  )
}
