import { useState } from "react";
import { useSuperHeroes } from "../Hooks/useSuperHeroes";


const RQSuperHeroesPage = () => {
    const [heroesData, setHeroesData] = useState([]);

    const onSuccess = (data) => {
        console.log(data);
        setHeroesData(data)
    }
    const onError = (error) => {
        console.log({ Error: error })
    }
    const { isLoading, isError, error } = useSuperHeroes(onSuccess, onError);
    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (<div>
        <h1>showing component</h1>
        {
            heroesData?.map((name, index) => (
                <h2 key={index}>{name}</h2>
            ))
        }
    </div>);
};

export default RQSuperHeroesPage;
