import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import GenresComponent from "@/app/components/GenresComponent/GenresComponent";

export default function StartedPage() {
    return (
        <div className="flex-column">
            <HeaderComponent/>
            <GenresComponent/>
            <h2 className="padding-5px-10px"> Select preferred genre or Movies in the menu to see all the movies </h2>
        </div>

    )
}