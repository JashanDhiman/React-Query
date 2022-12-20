import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroes = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeros, {
        onSuccess,
        onError,
        select: (data) => {
            const superheroes = data.data.map(hero => hero.name)
            return superheroes
        }
    });
};

