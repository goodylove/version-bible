import { ReactElement } from "react"

type SvgProps = {
  plans(): ReactElement
  plansActive(): ReactElement
  bibleActive(): ReactElement
  bible(): ReactElement
  homeActive(): ReactElement
  home(): ReactElement
  video(): ReactElement
  videoActive(): ReactElement
}

export const Svg: SvgProps = {
  plans() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M3.25 5a2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h10a2 2 0 0 0 2-2h-12a4 4 0 0 1-4-4V5Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
        <path
          d="M6.25 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          clipRule="evenodd"
          d="M18.457 6.793a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414l.353-.354a.5.5 0 0 1 .707 0l1.647 1.647 3.793-3.793a1 1 0 0 1 1.414 0Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  plansActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17V5a2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h10a2 2 0 0 0 2-2H7a4 4 0 0 1-4-4Z"
          fill="currentColor"
        ></path>
        <path
          d="M20 1H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm-1.8 7.21-4.5 4.5a1 1 0 0 1-1.41 0l-2-2a1 1 0 0 1 0-1.42l.35-.35a.5.5 0 0 1 .71 0L13 10.59l3.79-3.8a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },

  bible() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height="18"
          rx="3.5"
          width="18"
          x="3"
          y="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></rect>
        <path
          d="M6 17.074c0-.516.385-.952.897-1.016L18 14.67v1.714c0 .947-.767 1.715-1.714 1.715H7.024A1.024 1.024 0 0 1 6 17.074Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  homeActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 10.46v9.41a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9.41a2 2 0 0 0-.79-1.59l-8.6-6.54a1 1 0 0 0-1.21 0L2.79 8.87A2 2 0 0 0 2 10.46Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  home() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 19.996v-9.411a1 1 0 0 1 .395-.797l8.609-6.532 8.6 6.532a1 1 0 0 1 .396.796v9.412a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    )
  },

  bibleActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="18" rx="3.5" width="18" x="3" y="3"></rect>
        <path
          d="M17.5 2h-11A4.51 4.51 0 0 0 2 6.5v11A4.51 4.51 0 0 0 6.5 22h11a4.51 4.51 0 0 0 4.5-4.5v-11A4.51 4.51 0 0 0 17.5 2ZM19 17a2 2 0 0 1-2 2H6.2a1.19 1.19 0 0 1-.15-2.38L19 15Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  video() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height="18"
          rx="3"
          width="20"
          x="2"
          y="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></rect>
        <path
          d="M10 15.066a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832l-4.599-3.066a.5.5 0 0 0-.777.416v6.132Z"
          fill="currentColor"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  videoActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="18" rx="3" width="20" x="2" y="3"></rect>
        <path
          d="M19 2H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3.62 10.42-4.6 3.07a.5.5 0 0 1-.78-.42V8.94a.5.5 0 0 1 .78-.42l4.6 3.07a.5.5 0 0 1 0 .83Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
}
