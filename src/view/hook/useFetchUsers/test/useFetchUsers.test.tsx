import { renderHook, waitFor } from '@testing-library/react'
import useFetchUsers from '../useFetchUsers'
import mockAxios from 'jest-mock-axios'
jest.mock('axios')

describe('fetchData', () => {
    afterEach(() => {
        mockAxios.reset()
    })

    it('fetches users successfully', async () => {
        const { result } = renderHook(() => useFetchUsers('uers'))
        expect(result.current.loading).toBeTruthy()
        await waitFor(() => {
            expect(result.current.loading).toBeFalsy()
        })
    })

    it('fetch fails', async () => {
        const { result } = renderHook(() => useFetchUsers('users'))
        const message = 'Network Error'
        mockAxios.get.mockRejectedValueOnce(new Error(message))
        await waitFor(() => {
            expect(result.current.data).toEqual(undefined)
            expect(result.current.loading).toBeTruthy()
        })
    })
})
