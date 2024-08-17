import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    page: number
    totalPages: number
}

const PaginationComponent: FC<IProps> = ({page, totalPages}) => {
    return (
        <div className="flex-row">
            {page > 1 && (
                <Link
                    href={`?page=${page - 1}`}
                    className="border-red bg-red-hover padding-5px-10px">
                    Previous
                </Link>
            )}
            {page !== totalPages && <p className="padding-5px-10px"> {page} / {totalPages} </p>}
            {page < totalPages && (
                <Link
                    href={`?page=${page + 1}`}
                    className="border-red bg-red-hover padding-5px-10px">
                    Next
                </Link>
            )}
        </div>
    );
};

export default PaginationComponent;