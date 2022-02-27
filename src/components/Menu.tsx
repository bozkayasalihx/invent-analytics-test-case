import { Button, Select } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { setSearchResults, sortByDate } from "../features/imdb/imdbSlice";
import { setType } from "../features/imdb/typeSlicer";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface SelectionProps {
    data: any[];
    reset?: boolean;
    isType?: boolean;
}
const Selection: React.FC<SelectionProps> = ({
    data,
    isType = false,
    reset = true,
}) => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movies);
    const handleSelect = useCallback(
        (ev: React.SyntheticEvent<HTMLSelectElement, Event>) => {
            ev.preventDefault();
            dispatch(sortByDate(ev.currentTarget.value));
            isType && dispatch(setType(ev.currentTarget.value as any));
        },
        [dispatch, isType]
    );

    return (
        <div style={style.container}>
            <Select
                placeholder='Select option'
                maxH={400}
                size={"sm"}
                overflow='scroll'
                onChange={handleSelect}
                maxW={200}>
                {data.map(item => (
                    <option placeholder={String(item)} key={item}>
                        {item}
                    </option>
                ))}
            </Select>
            {!reset && (
                <Button
                    size='sm'
                    onClick={() => dispatch(setSearchResults(movies.results))}>
                    reset
                </Button>
            )}
        </div>
    );
};

const style: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
};

export default Selection;
