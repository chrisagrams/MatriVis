import { ColorRing } from 'react-loader-spinner'

const Loading = ({ height, width, className, text }) => {
  return (
    <div className={className}>
      <ColorRing
        height={height}
        width={width}
        colors={['#5bb9e1', '#5bb9e1', '#5bb9e1', '#5bb9e1', '#5bb9e1']}
      />
      {text && <p>Loading...</p>}
    </div>
  )
}

export default Loading
