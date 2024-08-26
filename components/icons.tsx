export const Icons = {
  home: (color: string) => (
    <svg width="24" height="24" fill="none">
      <path
        d="M12 17.99V14.99M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  upcoming: (color: string) => (
    <svg width="20" height="20">
      <path
        d="M5 0C5.55228 0 6 0.44772 6 1V2H14V1C14 0.44772 14.4477 0 15 0C15.5523 0 16 0.44772 16 1V2H17C18.6569 2 20 3.34315 20 5V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V8H2V17C2 17.5523 2.44772 18 3 18H8C8.5523 18 9 18.4477 9 19C9 19.5523 8.5523 20 8 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.44772 4.44772 0 5 0ZM3 4C2.44772 4 2 4.44772 2 5V6H18V5C18 4.44772 17.5523 4 17 4H3Z"
        fill={color}
      />
      <path
        d="M16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929C16.6834 13.9024 17.3166 13.9024 17.7071 14.2929L19.7071 16.2929C20.0976 16.6834 20.0976 17.3166 19.7071 17.7071L17.7071 19.7071C17.3166 20.0976 16.6834 20.0976 16.2929 19.7071C15.9024 19.3166 15.9024 18.6834 16.2929 18.2929L17.5858 17L16.2929 15.7071Z"
        fill={color}
      />
      <path
        d="M11.2929 14.2929C10.9024 14.6834 10.9024 15.3166 11.2929 15.7071L12.5858 17L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L12.7071 14.2929C12.3166 13.9024 11.6834 13.9024 11.2929 14.2929Z"
        fill={color}
      />
    </svg>
  ),
  previous: (color: string) => (
    <svg width="20" height="20">
      <path
        d="M5 0C5.55228 0 6 0.44772 6 1V2H14V1C14 0.44772 14.4477 0 15 0C15.5523 0 16 0.44772 16 1V2H17C18.6569 2 20 3.34315 20 5V12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12V8H2V17C2 17.5523 2.44772 18 3 18H8C8.5523 18 9 18.4477 9 19C9 19.5523 8.5523 20 8 20H3C1.34315 20 0 18.6569 0 17V5C0 3.34315 1.34315 2 3 2H4V1C4 0.44772 4.44772 0 5 0ZM3 4C2.44772 4 2 4.44772 2 5V6H18V5C18 4.44772 17.5523 4 17 4H3Z"
        fill={color}
      />
      <path
        d="M14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929C14.3166 13.9024 13.6834 13.9024 13.2929 14.2929L11.2929 16.2929C10.9024 16.6834 10.9024 17.3166 11.2929 17.7071L13.2929 19.7071C13.6834 20.0976 14.3166 20.0976 14.7071 19.7071C15.0976 19.3166 15.0976 18.6834 14.7071 18.2929L13.4142 17L14.7071 15.7071Z"
        fill={color}
      />
      <path
        d="M19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071L18.4142 17L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929L18.2929 14.2929C18.6834 13.9024 19.3166 13.9024 19.7071 14.2929Z"
        fill={color}
      />
    </svg>
  ),
  video: (color: string) => (
    <svg width="22" height="16" fill="none">
      <path
        d="M15.2968 11.5383C15.3777 13.3704 13.8991 14.9196 11.9946 14.9975C11.8543 15.0034 5.01526 14.9896 5.01526 14.9896C3.11991 15.1335 1.4611 13.7715 1.3116 11.9463C1.30034 11.8103 1.30341 4.47219 1.30341 4.47219C1.21945 2.63815 2.69599 1.08499 4.60158 1.00418C4.74391 0.997278 11.5737 1.01009 11.5737 1.01009C13.4783 0.868176 15.1422 2.24001 15.2897 4.07405C15.2999 4.2061 15.2968 11.5383 15.2968 11.5383Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M15.3 5.97984L18.593 3.28484C19.409 2.61684 20.633 3.19884 20.632 4.25184L20.62 11.6008C20.619 12.6538 19.394 13.2308 18.58 12.5628L15.3 9.86784"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  plus: (color: string) => (
    <svg width="20" height="20">
      <path
        d="M18.5714 11.4286H11.4286V18.5714C11.4286 18.9503 11.2781 19.3137 11.0102 19.5816C10.7422 19.8495 10.3789 20 10 20C9.62112 20 9.25776 19.8495 8.98985 19.5816C8.72194 19.3137 8.57143 18.9503 8.57143 18.5714V11.4286H1.42857C1.04969 11.4286 0.686328 11.2781 0.418419 11.0102C0.15051 10.7422 0 10.3789 0 10C0 9.62112 0.15051 9.25776 0.418419 8.98985C0.686328 8.72194 1.04969 8.57143 1.42857 8.57143H8.57143V1.42857C8.57143 1.04969 8.72194 0.686328 8.98985 0.418419C9.25776 0.150509 9.62112 0 10 0C10.3789 0 10.7422 0.150509 11.0102 0.418419C11.2781 0.686328 11.4286 1.04969 11.4286 1.42857V8.57143H18.5714C18.9503 8.57143 19.3137 8.72194 19.5816 8.98985C19.8495 9.25776 20 9.62112 20 10C20 10.3789 19.8495 10.7422 19.5816 11.0102C19.3137 11.2781 18.9503 11.4286 18.5714 11.4286Z"
        fill={color}
      />
    </svg>
  ),
};
