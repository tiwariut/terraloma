
interface IframeProps {
  title?: string;
  src: string;
  className?: string;
  prefetch?: boolean;
}

const Iframe = ({title = '', src, className = '', prefetch}: IframeProps) => {
  return (
    <iframe
      title={title}
      src={src}
      className={className}
      style={{ display: prefetch ? 'none' : 'block' }}
    />
  )
}

export default Iframe