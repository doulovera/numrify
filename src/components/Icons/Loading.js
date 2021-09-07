import * as React from 'react'

export default function SvgComponent (props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 58 58"
      {...props}
    >
      <g
        stroke="currentColor"
        fill="currentColor"
        transform="translate(2 1)"
        strokeWidth={1.5}
        fillRule="evenodd"
      >
        <circle cx={42.601} cy={11.462} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="1;0;0;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={49.063} cy={27.063} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;1;0;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={42.601} cy={42.663} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;1;0;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={27} cy={49.125} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;1;0;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={11.399} cy={42.663} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;1;0;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={4.938} cy={27.063} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;1;0;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={11.399} cy={11.462} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;0;1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={27} cy={5} r={5}>
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1.3s"
            values="0;0;0;0;0;0;0;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  )
}
