import { ClockSVG } from './svg';
import { getClockParams } from './clockCalc';

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