import ReactInfo from "./ReactInfo";

import { useSelector } from "react-redux";

interface ReactItem {
  lookFor: string[];
  message: string;
  reactTo: string[];
  id: string;
  saved: boolean;
  photos: string[];
}

export default function ReactList({ session }: any) {
  const reacts = useSelector((state: any) => state.reacts.reacts);
  console.log(reacts);
  if (reacts === null) return <div>Loading... </div>;
  return (
    <div className="flex flex-wrap mt-8 min-[600px]:gap-6 gap-4  p-3 w-full h-fit">
      {JSON.stringify(reacts)}
      {typeof reacts}
      {reacts
        ? reacts.map((react: ReactItem, index: number) => {
            return (
              <div key={index}>
                <ReactInfo react={react} />
              </div>
            );
          })
        : null}
    </div>
  );
}
