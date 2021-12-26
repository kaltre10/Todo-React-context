import ContentLoader from 'react-content-loader'

const Loader = props => {
  return (
    <ContentLoader
      title='loading...'
      speed={2}
      width={300}
      height={100}
      viewBox="0 0 400 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="320" height="10" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="10" />
      <rect x="50" y="55" rx="4" ry="4" width="320" height="10" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="10" />
    </ContentLoader>
  )
}

export default Loader