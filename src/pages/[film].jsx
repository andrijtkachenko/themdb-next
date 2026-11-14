import { getMovieById } from "../API/getMovieById";
import { baseImagePath } from "../service/baseImagePath";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

export async function getServerSideProps(context) {
    const data = await getMovieById({ id: context.query.film });

    return {
        props: {data},
    };
}

const BackDrop = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: gray;
    background-image: url("${(props) => props.bgImage}");
    background-size: cover;
    padding-top: 30px

`

const FilmContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid black;
    padding: 40px;
    background-color: #000000ed;
    border-radius: 40px;
    box -shadow: 0px 0px 20px 10px white;
    & .head {
    display: flex;
    justify-content: space-between;
    & h1 {
       color: white;
       font-size: 80px;
       }
    }
    & .poster {
    width: 300px;
    }

`


export default function Films({ data }) {
    useEffect(() => {
        console.log("data", data);
    }, [data]);

    return (
            <BackDrop bgImage={`${baseImagePath}${data.backdrop_path}`}>
            <FilmContainer>
             <h1>{data.title}</h1>
             <p>{data.overview}</p>
             </FilmContainer>
            <div>
                <img src={`${baseImagePath}${data.poster_path}`} alt={data.title} />
            </div>
            </BackDrop>
    );
}