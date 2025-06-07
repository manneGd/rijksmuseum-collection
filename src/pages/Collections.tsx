import axios from "axios";
import React from "react";
import type {ArtObjects} from "../type";
import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/Form/TextInput";
import {useQuery} from "@tanstack/react-query";
import {ACCESS_KEY, BASE_URL} from "../constants/api";
import style from "./Collections.module.scss";
import {useForm} from "react-hook-form";
import NoResult from "../components/NoResult";
import Loader from "../components/Loader";

const Collections = () => {
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [artObjects, setArtObjects] = React.useState<ArtObjects[]>([]);

  const artObjectsQuery = useQuery({
    queryKey: ["collections", page, searchTerm],
    queryFn: () => {
      return axios({
        method: "GET",
        url: `${BASE_URL}/en/collection`,
        params: {
          key: ACCESS_KEY,
          ps: 20,
          p: page,
          q: searchTerm,
        },
      }).then( response => {
        setArtObjects(previousArtObjects => {
          return [...previousArtObjects, ...response.data.artObjects];
        });

        return response.data.artObjects;
      });
    },
  });

  const methods = useForm({defaultValues: { search: ""}});

  const handleSearch = (data: { search: string }) => {
    setArtObjects([]);
    setSearchTerm(data.search);
  };

  const handleLoadMore = (event: React.MouseEvent) => {
    event.preventDefault();
    setPage(previousPage => previousPage + 1);
  };

  return (
    <div className={style.collections}>
      <form onSubmit={methods.handleSubmit(handleSearch)}>
        <div className={style.searchFilter}>
          <TextInput control={methods.control} name="search" placeholder="Search..." />
          <Button type="submit">Search</Button>
        </div>
      </form>
      {artObjects.length === 0 && !artObjectsQuery.isFetching ?
        <NoResult />
        : (
          <div className={style.artObjectsList} data-testid="artObjectList">
            {artObjects.map(artObject => {
              return (
                <Card
                  key={artObject.id}
                  imageSrc={artObject.webImage?.url}
                  title={artObject.longTitle}
                />
              );
            })}
          </div>
        )}
      {artObjectsQuery.isFetching ? <Loader /> : null}
      <Button isLoading={artObjectsQuery.isFetching} type="button" onClick={handleLoadMore}>Load more</Button>
    </div>
  );
};

export default Collections;