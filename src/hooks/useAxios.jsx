import axios from "axios";
import { useState } from "react";
import {v4 as uuid} from "uuid";

function useAxios(url) {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(url);
        setCards(cards => [...cards, {...response.data, id: uuid() }])
    };

    const clearCards = () => setCards([]);

    return [cards, addCard, clearCards]
    

}

export default useAxios;