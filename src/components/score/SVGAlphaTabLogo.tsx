import { css, cx } from '@emotion/css'
import { FC, HTMLProps } from 'react'

const alphaStyle = css`
  fill: #ffffff;
`
const tabStyle = css`
  fill: #ffffff99; ;
`
const noteStyle = css`
  fill: #ffffff;
`

const renderedByStyle = css`
  font-size: 0.85em;
  color: #ffffff99;
`

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  height: 100%;
  gap: 4px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`

export const SVGAlphaTabLogo: FC<HTMLProps<HTMLElement>> = ({ className }) => {
  return (
    <a className={cx(wrapperStyle, className)} href="https://alphatab.net">
      <span className={renderedByStyle}>Tabs & score rendered by:</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={200}
        viewBox="120 30 550 160"
        className={className}
      >
        <path
          className={alphaStyle}
          d="M272.361,127.215a40.439,40.439,0,0,1-7.987,12.887,14.527,14.527,0,0,1-17.38,2.956,15.5,15.5,0,0,1-5.228-4.65,22.556,22.556,0,0,1-3.333-7.175,34.1,34.1,0,0,1-1.178-9.242,38.739,38.739,0,0,1,1.322-10.39,26.12,26.12,0,0,1,3.792-8.237,17.9,17.9,0,0,1,6.033-5.425,16.344,16.344,0,0,1,7.986-1.952,12.464,12.464,0,0,1,6.78,1.808,17.174,17.174,0,0,1,5.056,5.052,34.849,34.849,0,0,1,3.792,7.749,101.456,101.456,0,0,1,2.93,9.9Zm18.989,22.99q1.062-.2,2.384-0.545v-6.487q-0.633.173-1.293,0.287a8.18,8.18,0,0,1-1.407.115,4.053,4.053,0,0,1-2.471-.8,8.223,8.223,0,0,1-2.183-3.3,49.048,49.048,0,0,1-2.27-7.06q-1.178-4.565-2.729-12.026L292.7,91.05h-7.929l-6.32,18.714h-0.173A54.687,54.687,0,0,0,275,102.043a27.1,27.1,0,0,0-4.568-6.4,20.347,20.347,0,0,0-6.177-4.363,18.961,18.961,0,0,0-7.986-1.607,25.155,25.155,0,0,0-11.232,2.44,23.773,23.773,0,0,0-8.36,6.774,31.172,31.172,0,0,0-5.2,10.361,45.78,45.78,0,0,0-1.81,13.2,39.2,39.2,0,0,0,1.638,11.653,27.415,27.415,0,0,0,4.654,9.07,21.447,21.447,0,0,0,7.268,5.913,20.8,20.8,0,0,0,9.422,2.123,22.808,22.808,0,0,0,7.412-1.176,20.69,20.69,0,0,0,6.435-3.617,29.477,29.477,0,0,0,5.573-6.2,55.7,55.7,0,0,0,4.884-8.927h0.23q1.033,4.881,2.154,8.5a29.909,29.909,0,0,0,2.471,5.97,10.615,10.615,0,0,0,2.988,3.5,6.391,6.391,0,0,0,3.763,1.148A15.575,15.575,0,0,0,291.35,150.205Zm16.523-.373V62.808h-7.355v87.024h7.355Zm21.837-9.472q6.147,10.849,18.558,10.849a25.024,25.024,0,0,0,11.06-2.382,24,24,0,0,0,8.36-6.687,30.671,30.671,0,0,0,5.286-10.3,45.243,45.243,0,0,0,1.838-13.289,40.843,40.843,0,0,0-1.637-12,26.158,26.158,0,0,0-4.711-9.069,20.89,20.89,0,0,0-7.527-5.769,25.565,25.565,0,0,0-22.465,1.206,23.365,23.365,0,0,0-8.762,9.386h-0.23V91.05h-7.354v85.819h7.354V140.36h0.23Zm-0.23-22.789a25.064,25.064,0,0,1,1.379-8.352,20.471,20.471,0,0,1,3.965-6.86,18.652,18.652,0,0,1,6.262-4.621,19.561,19.561,0,0,1,8.274-1.693,17.175,17.175,0,0,1,7.383,1.55,15.551,15.551,0,0,1,5.63,4.478,21.124,21.124,0,0,1,3.591,7.089,32.071,32.071,0,0,1,1.264,9.328,40.881,40.881,0,0,1-1.35,10.907,25.723,25.723,0,0,1-3.849,8.324,17.429,17.429,0,0,1-6.062,5.309,16.936,16.936,0,0,1-7.986,1.866,18.084,18.084,0,0,1-7.555-1.55,17.481,17.481,0,0,1-5.832-4.219,19.555,19.555,0,0,1-3.764-6.2,20.947,20.947,0,0,1-1.35-7.548v-7.807Zm102.505,32.261V113.5q0-11.766-4.941-17.795t-14.766-6.027q-12.872,0-19.765,11.538h-0.23v-38.4h-7.354v87.024h7.354V116.94a25.054,25.054,0,0,1,1.437-8.755,20.34,20.34,0,0,1,3.849-6.572,16.51,16.51,0,0,1,12.411-5.568q7.525,0,11.089,4.678t3.562,14.552v34.557h7.354Zm51.37-22.617a40.439,40.439,0,0,1-7.987,12.887,14.527,14.527,0,0,1-17.38,2.956,15.5,15.5,0,0,1-5.228-4.65,22.556,22.556,0,0,1-3.333-7.175,34.1,34.1,0,0,1-1.177-9.242,38.74,38.74,0,0,1,1.321-10.39,26.12,26.12,0,0,1,3.792-8.237,17.9,17.9,0,0,1,6.033-5.425,16.344,16.344,0,0,1,7.986-1.952,12.464,12.464,0,0,1,6.78,1.808,17.174,17.174,0,0,1,5.056,5.052,34.849,34.849,0,0,1,3.792,7.749,101.18,101.18,0,0,1,2.93,9.9Zm18.989,22.99q1.062-.2,2.384-0.545v-6.487q-0.633.173-1.293,0.287a8.171,8.171,0,0,1-1.407.115,4.053,4.053,0,0,1-2.471-.8,8.223,8.223,0,0,1-2.183-3.3,49.048,49.048,0,0,1-2.27-7.06q-1.177-4.565-2.729-12.026L503.694,91.05h-7.929l-6.32,18.714h-0.172A54.807,54.807,0,0,0,486,102.043a27.076,27.076,0,0,0-4.568-6.4,20.347,20.347,0,0,0-6.177-4.363,18.961,18.961,0,0,0-7.986-1.607,25.155,25.155,0,0,0-11.232,2.44,23.782,23.782,0,0,0-8.36,6.774,31.172,31.172,0,0,0-5.2,10.361,45.78,45.78,0,0,0-1.81,13.2A39.2,39.2,0,0,0,442.3,134.1a27.434,27.434,0,0,0,4.654,9.07,21.447,21.447,0,0,0,7.268,5.913,20.8,20.8,0,0,0,9.423,2.123,22.806,22.806,0,0,0,7.411-1.176,20.69,20.69,0,0,0,6.435-3.617,29.477,29.477,0,0,0,5.573-6.2,55.7,55.7,0,0,0,4.884-8.927h0.23q1.034,4.881,2.154,8.5a29.909,29.909,0,0,0,2.471,5.97,10.626,10.626,0,0,0,2.988,3.5,6.393,6.393,0,0,0,3.763,1.148A15.575,15.575,0,0,0,502.344,150.205Z"
        />
        <path
          className={tabStyle}
          d="M560.53,74.518v-7H505.373v7H529.1v75.314h7.642V74.518H560.53Zm36.431,75.314V111.6q0-10.906-5.027-16.418t-14.852-5.511a34.089,34.089,0,0,0-5.315.431,40.4,40.4,0,0,0-5.314,1.206,38.371,38.371,0,0,0-4.913,1.837,24.746,24.746,0,0,0-4.165,2.382v8.036q8.79-7.519,19.075-7.519,13.156,0,13.157,16.934l-17.868,2.583q-10,1.436-14.939,6.171t-4.941,12.715a17.574,17.574,0,0,0,1.293,6.831,15.016,15.016,0,0,0,3.677,5.309,16.459,16.459,0,0,0,5.8,3.416,22.943,22.943,0,0,0,7.67,1.205,20.793,20.793,0,0,0,11.233-3.1,21.592,21.592,0,0,0,7.842-8.726h0.23v10.448h7.354Zm-7.354-30.654v5.8a22.984,22.984,0,0,1-1.35,7.979,19.184,19.184,0,0,1-3.735,6.315,16.964,16.964,0,0,1-12.841,5.625,15.311,15.311,0,0,1-5.142-.8,10.944,10.944,0,0,1-3.85-2.267,9.77,9.77,0,0,1-2.413-3.473,11.263,11.263,0,0,1-.833-4.363,14.329,14.329,0,0,1,.862-5.309,8.663,8.663,0,0,1,2.7-3.617,13.944,13.944,0,0,1,4.654-2.325,46.1,46.1,0,0,1,6.78-1.435Zm27.928,21.182q6.09,10.849,18.558,10.849a24.891,24.891,0,0,0,11-2.382,23.994,23.994,0,0,0,8.359-6.687,31.049,31.049,0,0,0,5.315-10.3,44.6,44.6,0,0,0,1.867-13.289A40.411,40.411,0,0,0,661,106.664a26.788,26.788,0,0,0-4.711-9.127,20.619,20.619,0,0,0-7.527-5.826A25.565,25.565,0,0,0,626.3,92.916a23.365,23.365,0,0,0-8.762,9.386H617.3V62.808h-7.354v87.024H617.3V140.36h0.23Zm-0.23-22.789a25.064,25.064,0,0,1,1.379-8.352,20.486,20.486,0,0,1,3.964-6.86,18.656,18.656,0,0,1,6.263-4.621,19.561,19.561,0,0,1,8.274-1.693,17.175,17.175,0,0,1,7.383,1.55,15.551,15.551,0,0,1,5.63,4.478,21.124,21.124,0,0,1,3.591,7.089,32.071,32.071,0,0,1,1.264,9.328A40.881,40.881,0,0,1,653.7,129.4a25.723,25.723,0,0,1-3.849,8.324,17.429,17.429,0,0,1-6.062,5.309,16.936,16.936,0,0,1-7.986,1.866,18.092,18.092,0,0,1-7.556-1.55,17.477,17.477,0,0,1-5.831-4.219,19.555,19.555,0,0,1-3.764-6.2,20.947,20.947,0,0,1-1.35-7.548v-7.807Z"
        />
        <path
          className={noteStyle}
          d="M169.275,36.386V142.305c-2.905-3.491-7.753-5.425-14.038-5.425-14.459,0-27.1,11.607-27.1,24.378,0,9.766,6.728,14.635,17.088,14.635,15.636,0,27.031-11.977,27.1-24.3V65.77c15.4,7.886,26.484,15.751,32.457,27.168C210.83,104.5,207,120.5,190.548,135.122c-0.421,1.521.258,2.306,1.447,2.254,29.206-24.517,24.482-55.245-2.072-76.383-8.654-6.888-14.95-16.1-17.6-24.608h-3.05Z"
        />
      </svg>
    </a>
  )
}