import axios from "axios";
import { useState } from "react";
import {v4 as uuid} from "uuid";

function useAxiosComplex(base_url) {
    const [cards, setCards] = useState([]);
    const addCard = async (urlAddition = "") => {
        const response = await axios.get(`${base_url}${urlAddition}/`);
        setCards(cards => [...cards, {...response.data, id: uuid() }])
    };

    const clearCards = () => setCards([]);

    return [cards, addCard, clearCards]
    

}

export default useAxiosComplex;