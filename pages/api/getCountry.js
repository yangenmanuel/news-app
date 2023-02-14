export default async function getCountry (req, res) {
  const response = await fetch('https://ipinfo.io', {
    headers: {
      Authorization: `Bearer ${process.env.IPINFO_TOKEN}`,
    },
  })

  const { country } = await response.json()

  res.status(200).json({ country })
}