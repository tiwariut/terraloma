interface LoaderProps {
  size?: number; // in pixels
}

const Loader: React.FC<LoaderProps> = ({ size = 40 }) => {
  return (
    <div
      className='loader__spinner'
      style={{
        fontSize: `${size}px`,
      }}
    >
      Loading...
    </div>
  );
};

export default Loader;
