// Company logo (transparent PNGs in /public). `light` = version for dark backgrounds.
export default function Logo({ light, className = 'h-10' }) {
  return <img src={light ? '/logo-wordmark-light.png' : '/logo-wordmark.png'} alt="Ur workplace" className={`${className} w-auto select-none`} draggable="false" />;
}
