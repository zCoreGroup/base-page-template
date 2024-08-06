import { act } from 'react'
import { renderHook } from '@testing-library/react'
import { useAutoSlide } from '@/components/herobanner/useAutoSlide'

describe('useAutoSlide', () => {
  jest.useFakeTimers()

  const setActiveIndex = jest.fn()

  beforeEach(() => {
    jest.clearAllTimers()
    setActiveIndex.mockClear()
  })

  it('should automatically change the active index after the specified delay', () => {
    const { result } = renderHook(() => useAutoSlide(5, setActiveIndex, 5000))

    expect(setActiveIndex).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).toHaveBeenCalledTimes(1)
    expect(setActiveIndex).toHaveBeenCalledWith(expect.any(Function))

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).toHaveBeenCalledTimes(2)
  })

  it('should pause and resume auto-slide', () => {
    const { result } = renderHook(() => useAutoSlide(5, setActiveIndex, 5000))

    act(() => {
      result.current.pauseAutoSlide()
    })

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).not.toHaveBeenCalled()

    act(() => {
      result.current.resumeAutoSlide()
    })

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).toHaveBeenCalledTimes(1)
  })

  it('should clear the interval on unmount', () => {
    const { unmount } = renderHook(() => useAutoSlide(5, setActiveIndex, 5000))

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).toHaveBeenCalledTimes(1)

    unmount()

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(setActiveIndex).toHaveBeenCalledTimes(1)
  })
})
