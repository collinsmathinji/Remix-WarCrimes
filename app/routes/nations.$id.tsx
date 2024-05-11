import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import cases from '../data.json';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.id, "Missing name param");
    try {
      const data = cases.find((item) => item.name === params.id);
      if (!data) {
        throw new Error("Data not found");
      }
      return json(data);
    } catch (error) {
      console.error("Error loading data:", error);
      throw error; 
    }
  };
  

const NationsId = () => {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <div>
      {data && (
        <div>
          <div key={data.name}>
            <p>{data.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationsId;
