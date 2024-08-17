import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";
import MoviesListComponent from "./components/MoviesListComponent/MoviesListComponent";
import {FC} from "react";
import { getAllMovies } from "./services/movies/getAllMovies";

interface IProps {
    searchParams: {
        page: number
    }
}

const HomePage: FC<IProps> = async function HomePage({searchParams}) {

    const page = +searchParams.page || 1;
    const {results, total_pages} = await getAllMovies(page);

    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <MoviesListComponent page={page} totalPages={total_pages} movies={results}/>
        </div>

    )
}

export default HomePage;