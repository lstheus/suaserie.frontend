import api from '../api'
import { setAuth } from '../authService'




const getInfo = async () => {
    const urld = '/user/info'
    try {
        var res = await api.get(urld)
        const response = res.data
        console.log(response)
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const createUser = async (data) => {
    const urld = '/user/create'
    await api.post(urld, data).then((response) => {
        setAuth(response.data.user.acessToken.acessToken);

        return response;
    }).catch((error) => {
        if (error) {
            console.log('Não autorizado', error)
        }
    })
}

const updateUser = (data) => {
    const urld = '/user/update-me'

    api.put(urld, data).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => {
        if (error) {
            console.log('Erro: ' + error)
        }
    })
}
const deleteUser = () => {
    const urld = '/user/delete-me'
    api.delete(urld).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => {
        if (error) {
            console.log('Erro: ' + error)
        }
    })
}



const getAllSeriesFav = async () => {
    try {
        const urld = '/user/series-fav'
        var res = await api.get(urld)
        const response = res.data
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const getAllSeriesWatch = async () => {
    try {
        const urld = '/user/series-watched'
        var res = await api.get(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const getAllSeriesDisliked = async () => {
    try {
        const urld = '/user/series-disliked'
        var res = await api.get(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const getAllSeriesWish = async () => {
    try {
        const urld = '/user/series-desired'
        var res = await api.get(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const addDislikedSeries = async (id) => {
    try {
        const urld = `/user/series-disliked/${id}`
        var res = await api.post(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const addWatchedSeries = async (id) => {
    try {
        const urld = `/user/series-watched/${id}`
        var res = await api.post(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const addFavSeries = async (id) => {
    try {
        const urld = `/user/series-fav/${id}`
        var res = await api.post(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}
const addWishSeries = async (id) => {
    try {
        const urld = `/user/series-desired/${id}`
        var res = await api.post(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}


const getRating = async (id) => {
    try {
        const urld = `/user/rating/${id}`
        var res = await api.get(urld)
        const response = res.data
        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        throw error;


    }
}





export {
    createUser, deleteUser, updateUser,
    getAllSeriesFav, getInfo, getAllSeriesWatch,
    getAllSeriesDisliked, getAllSeriesWish,
    getRating, addDislikedSeries, addWishSeries,
    addWatchedSeries, addFavSeries
}