import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="space-y-6">
            <div className="h2-text-3xl text-[#403F3F] font-semibold ">All Caterogy </div>
            {
                categories?.map(category => <Link
                    className="block ml-4 font-semibold text-xl"
                    key={category.id}

                    to={`/category/${category.id}`}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;