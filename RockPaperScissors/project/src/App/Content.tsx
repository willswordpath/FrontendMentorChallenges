import * as React from 'react'
import { memo, useRef, useEffect, useMemo } from 'react'
import './Content.css'
import { dispatch, stateType, updateLayout } from '../states/store'
import { useSelector } from 'react-redux'
import { protectedShallowEqual } from '../states/funcs'
import PlayerSel from './PlayerSel'
import HouseSel from './HouseSel'
import Result from './Result'

function onResizeObserved(entries: ResizeObserverEntry[]) {
    const secSizeArray = entries[0].borderBoxSize
    const secSize = secSizeArray[0]
    const width = secSize.inlineSize
    const height = secSize.blockSize
    dispatch(updateLayout({
        obWidth: width,
        obHeight: height
    }))
}

export default memo(function () {
    const anchorPos = useSelector((state: stateType) => state.game.layout.anchor, protectedShallowEqual)

    const secRef = useRef(null)
    const observer = useMemo(() => new ResizeObserver(onResizeObserved), [])
    useEffect(() => {
        const section = secRef.current as HTMLElement | null
        if (section) {
            const rect = section.getBoundingClientRect()
            dispatch(updateLayout({
                obWidth: rect.width,
                obHeight: rect.height
            }))
            observer.observe(section, { box: 'border-box' })
        }
        return () => {
            if (section)
                observer.unobserve(section)
        }
    }, [])

    return (
        <section className="content" ref={secRef}>
            {
                anchorPos != undefined &&
                    <span className="choice-group-anchor" style={{
                        left: anchorPos.x + 'px',
                        top: anchorPos.y + 'px'
                    }}>
                        <PlayerSel></PlayerSel>
                        <HouseSel></HouseSel>
                        <Result></Result>
                    </span>
            }
        </section>
    )
})