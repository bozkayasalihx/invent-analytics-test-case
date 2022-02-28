import {
    Box,
    Image,
    Table as ChakraTable,
    TableCaption,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { Years } from "../utils/years";
import Selection from "./Menu";

interface TableProps {}


const Table: React.FC<TableProps> = () => {
    const { results, temp } = useAppSelector(state => state.movies);
    const years = useMemo(() => Years.generateYears(), []);

    return (
        <>
            <Text>IMDB MOVES/SERIES LIST</Text>
            <ChakraTable variant='striped'>
                <TableCaption>IMDB MOVES/SERIES LIST</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Image</Th>
                        <Th>Title</Th>
                        <Th>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                Year
                                <Selection data={years} reset={false} />
                            </div>
                        </Th>
                        <Th>Type</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {temp.length > 0
                        ? temp.map((movie, index) => (
                              <Tr key={index}>
                                  <Td>
                                      <Box boxSize='40'>
                                          <Image
                                              src={movie.Poster}
                                              boxSize='40'
                                          />
                                      </Box>
                                  </Td>

                                  <Link
                                      to={`/details/${movie.imdbID}`}
                                      key={movie.imdbID}>
                                      <Td>{movie.Title}</Td>
                                  </Link>
                                  <Td>{movie.Year}</Td>
                                  <Td>{movie.Type}</Td>
                              </Tr>
                          ))
                        : results.map((movie, index) => {
                              return (
                                  <Tr key={index}>
                                      <Td>
                                          <Box boxSize='40'>
                                              <Link
                                                  to={`/details/${movie.imdbID}`}
                                                  key={movie.imdbID}>
                                                  <Image
                                                      src={movie.Poster}
                                                      boxSize='40'
                                                  />
                                              </Link>
                                          </Box>
                                      </Td>
                                      <Td>
                                          <Link
                                              to={`/details/${movie.imdbID}`}
                                              key={movie.imdbID}>
                                              {movie.Title}
                                          </Link>
                                      </Td>
                                      <Td>{movie.Year}</Td>
                                      <Td>{movie.Type}</Td>
                                  </Tr>
                              );
                          })}
                </Tbody>
            </ChakraTable>
        </>
    );
};

export default Table;
