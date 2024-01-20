// API KEY
const API_KEY = import.meta.env.VITE_API_KEY

// HOST
export const API_HOSTNAME = `http://www.omdbapi.com/?apikey=${API_KEY}&`

// API ROUTES
export const RECOMMENDED_MOVIES = `${API_HOSTNAME}s=Random`
export const MOVIE = `${API_HOSTNAME}plot=full&i=`


// WEB ROUTES
export const WEB_ROUTES = {
    home: '/',
    billboard: '/billboard',
    movie: '/movie/:movieImdbId'
}

// FEATURES CONTENT
export const FEATURES = [
    {
        title: "Competitive Pricing",
        description: "Offer highly competitive pricing options for tickets. This can be a strong pull for movie enthusiasts looking for the best deals on the latest releases."
    }, {
        title: "Secure Transactions",
        description: "High level of security in transactions on your platform, ensuring customers that their payment and personal information are protected with the latest security measures."
    }, {
        title: "Exclusive Access and Early Bookings",
        description: "Provide the option for early bookings or exclusive access to special screenings, which can be particularly attractive to avid moviegoers."
    }
]