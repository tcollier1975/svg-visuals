import * as React from "react"
const CirclePattern1 = (props) => (
  <g {...props} >
    <path d="M105 .6c-8 1-22.8 4.8-30.8 8C57.8 15.3 44.4 24.5 31.8 38-2.4 74.5-9.7 128.7 13.7 173.1c17.1 32.5 48.4 55.2 84.8 61.6 12.2 2.1 36.8 1.3 47.5-1.5 23-6.1 41.7-16.9 57.2-33 51.1-53.2 42.2-138.5-18.9-180-11.7-7.9-25.9-14-40.3-17.3-8.3-1.9-31.1-3.2-39-2.3zM362.5 1c-44.6 7.1-81.4 37.8-95.5 79.8-22.4 67 19.3 139 88.7 153.1 11.2 2.3 31.2 2.8 42 1.1 37.1-6 70.6-30.7 87.6-64.5C493 155 497 137.2 497 117.7c0-55.1-37.9-102.5-92-114.8C395.1.6 371.7-.4 362.5 1zM628 .5c-.8.2-4.9.9-9 1.5-34.9 5.7-67.3 29.7-83.9 62-17.4 34-17.6 74-.7 107.4 15.6 30.4 42.2 51.9 76.1 61.3 9.4 2.6 11.2 2.8 29.5 2.8 18.2 0 20.2-.2 29.3-2.7 12.9-3.6 22.6-7.8 32.3-13.7 26.6-16.5 45.2-41.8 53.1-72 3.4-13.2 4.2-33.8 1.9-48-8.1-48.5-44.3-86.1-92.8-96.7C657.2 1 631.7-.4 628 .5zM887.5.7c-35.7 4.6-65.8 23.2-85.3 52.7-13 19.7-19.2 40.5-19.2 64.3 0 19.5 4 37.3 11.7 52.8 13.2 26.2 37.2 48 64.2 58.2 13.6 5.1 20.8 6.4 38.1 7 14.3.4 17.9.2 27-1.7 82.6-16.9 121.5-110.8 75.1-181.5-14.6-22.3-41.8-41.8-67.9-48.5C917.4.5 899.7-.9 887.5.7zM1148.5.6c-26.9 4.1-46 12.7-65.3 29.3-27.4 23.6-43.1 63.2-39.2 99.2 5 46.5 34.7 84.8 77.8 100.3 14.8 5.3 20.3 6.1 40.7 6 17.4 0 19.8-.3 28.8-2.7 38.7-10.6 69.9-39.5 82.2-76.1 4.9-14.5 5.9-21.1 5.9-38.6 0-13.9-.4-18-2.4-26-11-45-44.5-78.5-89.1-89-9.2-2.1-31.9-3.5-39.4-2.4zM108 246.6c-1.4.2-5.9.9-10 1.5-22.8 3.4-48.6 17.1-65.2 34.7-44.6 47.3-43.4 120 2.7 165.8 22.4 22.2 51.1 33.8 83.5 33.7 24.3-.1 46.2-6.9 66.1-20.4 8.1-5.5 22.3-19.2 28-26.9 21.2-29 28.4-64.9 19.9-99.1-10.5-42.2-44-75.6-86.5-86.3-11.1-2.8-29.8-4.2-38.5-3zM368.5 246.6c-30.5 3.5-55.2 15.6-75.4 37-14.3 15.2-25.3 35.8-29.6 55.4-2.5 11.7-3.1 32.6-1.1 44 6.7 38.6 30.3 70.4 65.1 87.8 17.8 8.9 42.4 13.3 62.6 11.2 47.7-4.8 87.4-36.8 101.7-82 4.5-14.2 5.5-22.6 4.9-40.2-.6-18.6-3.2-29.9-10.5-45.3-6.6-13.7-11.8-21.1-22.7-32.4-19-19.7-44-32-70.8-35-9.2-1-17.7-1.2-24.2-.5zM625.5 247.1c-51.3 6.1-93.5 46.6-102 97.9-3.6 21.4-.6 46.4 7.9 66.1 8.2 19.1 25.3 39.7 42 50.9 41.1 27.4 92.2 27.4 133.2 0 10.7-7.2 26.6-23.5 33.2-34.3 11.8-19 17.1-36.2 17.9-58.3 1.4-36.2-11.1-66.8-37.4-91.4-25.7-24-59.7-35.1-94.8-30.9zM886 247c-25.7 3.2-51.1 16-69.5 35.1-10.9 11.3-16.1 18.7-22.7 32.4-7.2 15.2-9.9 26.7-10.5 44.7-.6 17.2.6 27.2 4.9 40.8 14.4 45.2 53.6 76.9 101.7 82 19.8 2.1 44.7-2.3 62.6-11.2 23.5-11.7 44.1-32.5 54.9-55.2 33.1-69.7-7.6-151.4-83.3-167.1-9.3-1.9-28.3-2.7-38.1-1.5zM1147.2 247c-70.5 8.9-117.5 77.7-100.1 146.5 5.5 21.4 16.3 39.9 32.8 55.8 22.7 21.9 49.8 32.9 81.1 33 32.4.1 61.1-11.5 83.5-33.7 57-56.6 43-151.4-27.8-188.7-21-11-46.7-15.7-69.5-12.9zM105.6 493c-22.7 2.6-44.8 12-62.7 26.6-21.8 17.8-37.2 44.9-41.4 73.1-7.7 50.9 18.1 100.4 64.3 123.7 9 4.5 22.1 8.9 32.2 10.7 10.5 1.9 33.4 1.6 43.5-.6 45.4-9.7 80.5-43.3 91.5-87.4 8.1-32.6 1.9-67-17.2-95.4-6.2-9.3-23-25.6-32.9-32.1-22.8-14.8-50.9-21.5-77.3-18.6zM370 492.7c-20.5 1.6-41.9 9.3-58.7 21.2-59.1 41.7-67.5 125.7-17.9 177.9 46.3 48.7 123.6 49.2 170.1 1.1 10.9-11.3 16.1-18.7 22.7-32.4 7.2-15.2 9.9-26.7 10.5-44.7.6-17.2-.6-27.2-4.9-40.8-14.3-45-53.5-76.8-101-82-9.5-1-11.7-1-20.8-.3zM626.7 493.1c-44.5 4.7-84.3 36.8-98.7 79.7-20.3 60.6 11.2 126.4 71 148.5 14.7 5.4 24.3 7.1 41 7.1 20.7 0 36-3.6 53.4-12.5 12.4-6.3 19.3-11.5 30.2-22.3 13.9-13.9 21.8-26.5 28.2-44.7 9.3-26.3 8-59.1-3.2-85-16.8-39-54.2-66.4-96.6-70.9-10.7-1.1-14.2-1.1-25.3.1zM887.5 493.1c-52.4 6.4-94.1 45.7-103.1 97.4-1.2 6.7-1.5 13-1.1 24.5.5 18.8 3.1 30 10.5 45.5 6.6 13.7 11.8 21.1 22.7 32.4 46.5 48.1 123.8 47.7 170.1-1.1 21-22.1 32.4-50.8 32.4-81.4 0-56.3-40.6-105.4-95.7-115.8-10.7-2-26.2-2.6-35.8-1.5zM1148.6 493c-25.3 2.9-48.7 13.8-67.1 31.3-17.9 16.9-28.1 33.8-34 55.9-15.9 60.6 17.4 122.3 77 142.6 16.1 5.5 40.9 7.3 57.5 4.3 34.8-6.3 65.3-27.9 82.7-58.7 26.1-46 18-103.8-19.7-141.4-21.2-21.2-47.7-32.8-78.5-34.3-5.5-.3-13.5-.1-17.9.3zM96.8 741c-11.9 2.5-17.7 4.5-28.6 9.8-40.1 19.3-66.3 61.4-66.2 106 .1 23 6.7 45.1 19.4 64.7 7.6 11.8 24.2 28.1 35.8 35.3 38.4 23.8 85.5 24.2 123.9 1.2 29.9-18.1 50.3-48.2 56-82.9 1.6-9.7 1.3-29.6-.5-39.5-9.1-48.5-47.5-86.8-95.4-95.1-11.8-2.1-33.4-1.8-44.4.5z" />
    <path d="M355.2 741.1c-48.2 10.1-84.2 47.6-92.7 96.6-3.9 22.3.2 50.8 10.1 70.5 9.3 18.5 27.2 38.5 43.6 48.6 63.5 39.3 145.7 12.1 173.1-57.3 9.8-24.7 10.4-56.2 1.5-81.3-6.3-17.9-14.7-31.3-28.2-44.8-17.5-17.4-39.1-28.9-62.4-32.9-12.1-2.1-33.4-1.9-45 .6zM622.5 739.7c-47 7.4-85.2 42-97.1 88-3.6 13.5-4.4 33.9-1.9 48.3 4.9 29.6 21.8 57.5 45.5 75.3 37.9 28.4 89.8 31.4 130.5 7.5 30.5-17.9 51.2-48 57-82.8 2.5-14.4 1.7-34.8-1.9-48.3-11-42.5-43.1-74.3-86.5-85.9-5.9-1.5-11.5-2.1-25.1-2.3-9.6-.2-18.8-.1-20.5.2zM879 740.5c-8.9 1.7-23.1 6.5-31.5 10.8-21.4 10.7-41.5 30.8-52.2 52.2-8.4 16.6-12.3 33.6-12.3 53.7 0 76.8 72.2 132.8 147 114.2 18.7-4.7 37-15 52-29.1 24.2-22.9 37-52.7 37-85.9 0-46.5-29.3-90.8-71.9-108.5-14.9-6.2-24.8-8.1-43.6-8.5-11.8-.2-19.3.1-24.5 1.1zM1140.2 740.4c-29.9 5.7-57.8 23.7-75.5 48.7-15.3 21.6-23.3 51.9-20.7 77.9 5.6 56.8 47.1 99.5 103.8 107.1 9.4 1.3 27.2.7 36.2-1.1 39.5-8.1 72.5-35.2 87.3-72.1 6.1-15.2 8.1-25.4 8.1-42.9.1-16.9-1-24.2-5.5-38.2-12.2-37.8-43.6-67.1-82.9-77.5-8-2.1-12.3-2.6-26.5-2.9-11.7-.2-19.3.1-24.3 1z" />
  </g>
)
export default CirclePattern1
