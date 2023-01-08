import useToggle from '../useToggle'
import { act, renderHook } from '@testing-library/react'

it('Clicking the button toggles on and off', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current.isLiked).toBe(false)
    act(() => {
        result.current.handleToggle()
    })

    expect(result.current.isLiked).toBe(true)
})
