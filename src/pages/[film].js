import{ getMovieById } from "../API/getMovieById";
import { useEffect } from "react";
import baseImagePath from "../service/baseImagePath";
import styled from "@emotion/styled";

export default function getServerSideProps(context) {
    const data = getMovieById({ id: context.params.film });

    return {
        props: {data},
    };
}

const BackDrop = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: gray;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    padding-top: 30px

`

const FilmContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid black;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.88);
    border-radius: 40px;
    box -shadow: 0px 0px 20px 10px white;

`


export default function films({ data }) {
    useEffect(() => {
        console.log("data", data);
    }, [data]);

    return <div>
        <div>
            //<BackDrop bgImage={`${baseImagePath}${data.backdrop_path}`}></BackDrop>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <div>
                <img src={`${baseImagePath}${data.poster_path}`} alt={data.title} />
            </div>
        </div>
    </div>;
}