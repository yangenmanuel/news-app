import ContentLoader from "react-content-loader"

export default function MyLoader () {
  return <ContentLoader
    style={{margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%'}}
    speed={1.5}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#5c5c5c"
    foregroundColor="#000000"
  >
    <circle cx="453" cy="67" r="15" /> 
    <rect x="1" y="11" rx="2" ry="2" width="334" height="30" /> 
    <rect x="0" y="317" rx="2" ry="2" width="192" height="17" /> 
    <rect x="-6" y="58" rx="2" ry="2" width="388" height="250" /> 
    <rect x="-1" y="340" rx="2" ry="2" width="192" height="17" /> 
    <rect x="-2" y="366" rx="2" ry="2" width="192" height="17" />
  </ContentLoader>
}