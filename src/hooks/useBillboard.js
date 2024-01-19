import { useEffect, useState } from "react"
import { getBillboard } from "../services/movies"

export const useBillboard = () => {
    const [billboardList, setBillboardList] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState()


    useEffect(() => {
        const fetchBillboardMoviesList = async () => {
            if (filter) {
                setIsLoading(true)

                const responsePage1 = await getBillboard(1, filter)
                if(responsePage1.Search) {
                    const responsePage2 = await getBillboard(2, filter)
                    const responsePage3 = await getBillboard(3, filter)
    
                    setBillboardList([...responsePage1.Search, ...responsePage2.Search, ...responsePage3.Search])
                } else {
                    setBillboardList([])
                }
                
                setIsLoading(false)
                return
            }

            const responsePage1 = await getBillboard(1)
            const responsePage2 = await getBillboard(2)
            const responsePage3 = await getBillboard(3)

            setBillboardList([...responsePage1.Search, ...responsePage2.Search, ...responsePage3.Search])
            setIsLoading(false)
        }

        fetchBillboardMoviesList()
    }, [filter])

    return { billboardList, isLoading, filter, setFilter }
}
