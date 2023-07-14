

import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

export default function useFavourites(){
    const {data, isLoading, mutate, error} = useSWR('/api/favourites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        isLoading,
        error,
        mutate
    }
}