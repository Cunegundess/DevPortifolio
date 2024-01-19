function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 13h1M20 13h1M5.6 6.6l.7.7M18.4 6.6l-.7.7M8 13a4 4 0 118 0M3 17h18M7 20h5M16 20h1M12 5V4" />
    </svg>
  );
}

export default IconSun;
