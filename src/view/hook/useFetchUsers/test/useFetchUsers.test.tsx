import { renderHook, act, waitFor } from '@testing-library/react'
import useFetchUsers from '../useFetchUsers'

jest.mock('axios')

describe('fetch users', () => {
    it('Start fetch users', async () => {
        const mockFetch = jest.fn()
        mockFetch('https://jsonplaceholder.typicode.com/users')

        await act(async () => renderHook(() => useFetchUsers('users')))
        expect(mockFetch).toBeCalledWith(
            'https://jsonplaceholder.typicode.com/users'
        )
        expect(mockFetch).toBeCalled()
        expect(mockFetch).toBeCalledTimes(1)
    })

    it('while fetching data', async () => {
        jest.fn(
            () => new Promise((resolve, reject) => console.log(resolve, reject))
        )
        const { result } = renderHook(() => useFetchUsers('users'))
        expect(result.current.loading).toBe(true)
        const resolve = jest.fn(() => Promise.resolve())
        resolve()
        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })
    })
    it('fetch success', async () => {
        const mockFetch = jest.fn(() => Promise.resolve({ data: {} }))
        mockFetch()
        const { result } = renderHook(() => useFetchUsers('users'))
        await waitFor(() => {
            expect(result.current.loading).toBe(false)
            expect(mockFetch.mockResolvedValue({ data: {} }))
            expect(result.current.error).toBe(null)
        })
    })
    it('fetch fails', async () => {
        const message = 'Network Error'
        const mockFetch = jest.fn(() => Promise.reject(new Error(message)))
        const { result } = renderHook(() => useFetchUsers('users'))
        await waitFor(() => {
            expect(result.current.loading).toBe(false)
            expect(mockFetch.mockRejectedValue(message))
            expect(result.current.data).toBe(undefined)
        })
    })
})
