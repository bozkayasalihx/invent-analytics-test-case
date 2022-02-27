import { Button } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlicer";
import { useAppSelector } from "../store/hooks";

const NextPage: React.FC = () => {
    const dispatch = useDispatch();

    const curPage = useAppSelector(state => state.counter.value);

    const handleNextClick = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const handlePrevClick = useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);

    return (
        <div style={style.container}>
            <Button
                style={style.button}
                onClick={handlePrevClick}
                disabled={curPage === 1}>
                Prev
            </Button>
            <Button onClick={handleNextClick}>Next</Button>
        </div>
    );
};

const style: Record<string, React.CSSProperties> = {
    container: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
        marginRight: 20,
    },
};

export default NextPage;
