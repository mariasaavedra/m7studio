interface ArrowProps {
  theme?: string;
}
export default function Arrow(props: ArrowProps) {
  return (
    <svg
      width='22'
      height='20'
      className='inline fill-current text-white'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.58972 13.701C0.872283 14.1152 0.62647 15.0326 1.04068 15.75C1.4549 16.4674 2.37228 16.7133 3.08972 16.299L1.58972 13.701ZM21.1091 5.38823C21.3235 4.58803 20.8487 3.76552 20.0485 3.55111L7.00846 0.0570541C6.20826 -0.157359 5.38576 0.317515 5.17134 1.11771C4.95693 1.91791 5.4318 2.74042 6.232 2.95483L17.8231 6.06066L14.7173 17.6518C14.5029 18.452 14.9777 19.2745 15.7779 19.4889C16.5781 19.7033 17.4006 19.2284 17.6151 18.4282L21.1091 5.38823ZM3.08972 16.299L20.4102 6.29904L18.9102 3.70096L1.58972 13.701L3.08972 16.299Z'
        fill={props.theme === 'dark' ? '#fff' : '#000'}
      />
    </svg>
  );
}

Arrow.defaultProps = {
  theme: 'dark',
};
