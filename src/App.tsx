import { Box } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import FallBack from "./components/FallBack";
import Input from "./components/Input";
import NextPage from "./components/NextPage";
import "./styles/container.css";
const Table = lazy(() => import("./components/Table"));

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Suspense fallback={<FallBack />}>
                            <Input />
                            <Table />
                            <NextPage />
                        </Suspense>
                    }
                />
                <Route path='details'>
                    <Route
                        path=':imdbID'
                        element={
                            <Suspense fallback={<FallBack />}>
                                <Details />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
