import { json, useLoaderData,Link } from "@remix-run/react";
import cases from '../data.json';

export async function loader() {
    const data = await cases;
    return json(data);
}

const Nations = () => {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="text-xl p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
                {data.map((country) => (
                    <Link key={country.name} to={`${country.name}`} className="border w-80 rounded-md bg-slate-300 p-4 border-stone-70 shadow-sky-800">
                         <img
          src={country.image}
          alt="Profile"
          className="object-cover rounded-lg mb-4"
        />
                       <h2 className="text-2xl font-semibold">{country.name}</h2> 
                       <h4>Crimes</h4>
                        <ol>
                            <li className="">
                               {country.crimes}
                            </li>
                        </ol>
                    </Link>
                          
                ))}
            </ul>
        </div>
    );
};

export default Nations;
