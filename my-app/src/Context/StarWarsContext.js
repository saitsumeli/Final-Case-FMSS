import {createContext, useContext , useState , useEffect} from "react";
import axios from 'axios';

const StarWarsContext = createContext();

export const StarWarsProvider = ({children}) => {
    const [list, setList] = useState([]); // listelemede tutacağımız state
    const [loading, setLoading] = useState(false); // loading... yazısını tutacağımız state 
    const [searchStarships , setSearchStarships] = useState(""); // arama kısmını tutacağımız state
    const [page, setPage] = useState(1) // page sayfaları için oluşturduğumuz state
    
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true) // il başta setLoading yazısını almamız için
               {
                // bizden istenilen verileri çekiyoruz
                const {data:response}= await axios(`https://swapi.dev/api/starships/?page=${page}&per_page=10`)
                console.log(response)
                {response && setList(response.results)} // eğer response varsa setListe response.results al
                }
                
            } catch(error){
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getData();
    } , [page])
        console.log(list)
        console.log(searchStarships)
    const values = {
        list,
        setList,
        loading,
        setLoading,
        searchStarships,
        setSearchStarships,
        page,
        setPage
    }

    return(
        <StarWarsContext.Provider value={values}>{children}</StarWarsContext.Provider>
    )
}

export const useStarWars = () => useContext(StarWarsContext);