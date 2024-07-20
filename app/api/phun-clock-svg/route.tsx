import { ClockSVG } from './svg';
import { getClockParams } from './clockCalc';

export const SvgExample = () => {
    return <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="red" />
      <rect x="20" y="40" width="100" height="100" fill="blue" />
      <rect x="30" y="20" width="100" height="100" fill="green" />
    </svg>
}

export function GET() {
    const ReactDOMServer = require('react-dom/server')
    const p = getClockParams()
    
    const domSvg: string = ReactDOMServer.renderToString(
      <>
        <ClockSVG year={p.year} date={p.date} time={p.time} houDeg={p.houDeg * -1} perDeg={p.perDeg * -1} minDeg={p.minDeg * -1}/>
      </>
    )

    return new Response(domSvg, {
      status: 200,
      headers: { 'Content-Type': "image/svg+xml" },
    })
}