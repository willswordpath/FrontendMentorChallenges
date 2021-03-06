import * as React from 'react'
import { brokenRingAssets } from '../../constants/broken-ring'

export default React.memo(function () {
    return (
        <svg style={{
            position: 'absolute',
            zIndex: -999,
            width: '0',
            height: '0'
        }}>
            <defs>
                {
                    brokenRingAssets.map(brc =>
                        <linearGradient key={brc.id} id={brc.id} x1="0" x2="0" y1=".5" y2="1.06">
                        <stop offset=".7" stopColor={brc.start} />
                        <stop offset="1" stopColor={brc.end} />
                        </linearGradient>
                    )
                }
            </defs>
        </svg>
    )
})