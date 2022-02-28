import { Box, Input as ChakraInput } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { request } from "../API/request";
import { setSearchResults } from "../features/imdb/imdbSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { data } from "../utils/selection";
import Selection from "./Menu";
import "./input.css";

interface Type {
    Response: "True" | "False";
    Search: Array<AxiosResponse>;
    totalResults: string;
}

interface InputProps {}

const Input: React.FC<InputProps> = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.counter.value);
    const [loading, setLoading] = useState(true);
    const { type } = useAppSelector(state => state.type);
    console.log("type", type);

    useEffect(() => {
        async function fn() {
            try {
                const { data } = await request.request<Type>({
                    method: "get",
                    params: {
                        s: inputRef.current?.value
                            ? inputRef.current.value.replace(/\s/gi, "+")
                            : "pokemon",
                        page,
                        type,
                    },
                });
                dispatch(setSearchResults(data.Search));
                setLoading(false);
            } catch (err) {
                console.log("err", err);
            }
        }
        fn();
    }, [dispatch, page, type]);

    const handleSubmit = useCallback(
        async (ev: React.FormEvent<HTMLFormElement>) => {
            ev.preventDefault();
            try {
                const {
                    data: { Search },
                } = await request.request<Type>({
                    method: "get",
                    params: {
                        s: inputRef.current?.value
                            ? inputRef.current.value.replace(/\s/gi, "+")
                            : "pokemon",
                        page,
                        type,
                    },
                });
                setLoading(false);
                dispatch(setSearchResults(Search));
            } catch (err) {
                console.log("err", err);
            }
        },
        [page, dispatch, type]
    );

    if (loading) {
        return <Box>Loading ...</Box>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <ChakraInput
                    placeholder='type for movie'
                    ref={inputRef}
                    className='input'
                    size='md'
                />
                <Selection data={data} isType={true} />
            </div>
        </form>
    );
};
export default Input;
