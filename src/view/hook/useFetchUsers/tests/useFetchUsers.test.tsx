import { renderHook, waitFor } from '@testing-library/react'
import useFetchUsers from '../useFetchUsers'
import mockAxios from 'jest-mock-axios'

jest.mock('axios')

describe('fetchData', () => {
    it('fetches users successfully', async () => {
        const { result } = renderHook(() => useFetchUsers('users'))
        await waitFor(() => {
            expect(result.current.loading).toBeFalsy()
            expect(result.current.data).toMatchSnapshot()
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
