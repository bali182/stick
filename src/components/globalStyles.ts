import { css } from '@emotion/react'

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  div,
  span {
    font-family: 'Poppins', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #000000;
    /* background: linear-gradient(147deg, #000000 0%, #434343 74%); */
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }

  /** Alphatab stuff */
  .at-wrap {
    width: 100vw;
    height: calc(100vh - 100px);
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
  .at-content {
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
  }
  .at-viewport {
    overflow-y: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 20px;
  }
  .at-footer {
    flex: 0 0 auto;
    background: #436d9d;
    color: #fff;
  }
  /* Player */
  .at-cursor-bar {
    /* Defines the color of the bar background when a bar is played */
    background: #ffffff30;
  }
  .at-selection div {
    /* Defines the color of the selection background */
    background: #ffffff20;
  }
  .at-cursor-beat {
    /* Defines the beat cursor */
    background: red;
    width: 3px;
  }
  .at-highlight * {
    /* Defines the color of the music symbols when played (svg) */
    /* fill: #0078ff;
    stroke: #0078ff; */
  }
  // Hide big rendered by label, and display clickable logo elsewhere
  .at-surface > div:last-child {
    display: none !important;
  }
`
