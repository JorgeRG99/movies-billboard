import { useEffect, useState } from "react"
import { getBillboard } from "../services/movies"

export const useBillboard = () => {
    const [billboardList, setBillboardList] = useState(null)
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchBillboardMoviesList = async () => {
            const responsePage1 = await getBillboard(1)
            const responsePage2 = await getBillboard(2)
            const responsePage3 = await getBillboard(3)

            setBillboardList([...responsePage1.Search, ...responsePage2.Search, ...responsePage3.Search])
            setIsLoading(false)
        }

        fetchBillboardMoviesList()
    }, [])

    return { billboardList, isLoading }
}
