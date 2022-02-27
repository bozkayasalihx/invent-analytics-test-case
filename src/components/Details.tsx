import { Box, Center, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../API/request";
import { DetailsResponseType } from "../types/detailsResponseType";
import "../components/details.css";

interface DetailsProps {}

type ParamType = {
    imdbID: string;
};

const Details: React.FC<DetailsProps> = () => {
    let params = useParams<ParamType>();
    const [details, setDetails] = useState<DetailsResponseType>();
    useEffect(() => {
        const fn = async () => {
            const { data } = await request.request<DetailsResponseType>({
                method: "get",
                params: {
                    i: params.imdbID,
                },
            });
            setDetails(data);
        };
        fn();
    }, [params.imdbID]);
    return (
        <Box display='flex' alignItems={"center"} flexDirection='column' p={10}>
            <Image src={details?.Poster} />
            <Text className='item'>Type: {details?.Type}</Text>
            <Text className='item'>Plot: {details?.Plot}</Text>
            <Text className='item'>BoxOffice: {details?.BoxOffice}</Text>
            <Text className='item'>Actors: {details?.Actors}</Text>
            <Text className='item'>imdbRating: {details?.imdbRating}</Text>
            <Text className='item'>Awards: {details?.Awards}</Text>
            <Text className='item'>Released: {details?.Released}</Text>
            <Text className='item'>Genre: {details?.Genre}</Text>
            <Text className='item'>Director: {details?.Director}</Text>
            <Text className='item'>Country: {details?.Country}</Text>
            <Box className='item'>
                {details?.Ratings.map((item, idx) => (
                    <Center key={idx}>
                        <Text> {item.Source} : </Text>
                        <Text> {item.Value}</Text>
                    </Center>
                ))}
            </Box>
        </Box>
    );
};
export default Details;
