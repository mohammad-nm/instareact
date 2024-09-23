import { useEffect, useState } from "react";
import ReactInfo from "./ReactInfo";
import { getReacts } from "@/services/handleData";

interface ReactItem {
  lookFor: string[];
  message: string;
  reactTo: string[];
}

export default function ReactList({ session }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [reacts, setReacts] = useState<ReactItem[] | null>(null);
  useEffect(() => {
    const fetchReacts = async () => {
      setIsLoading(true);
      const fetchedReacts = await getReacts(session?.user?.id);
      console.log(fetchedReacts);
      setReacts(fetchedReacts);
      setIsLoading(false);
    };
    fetchReacts();
  }, [session]);

  return (
    <div className="flex flex-wrap mt-8 min-[600px]:gap-6 gap-4  p-3 w-full h-fit">
      {isLoading
        ? "LOADING..."
        : reacts?.map((react, index) => (
            <div key={index} className="mx-auto">
              <ReactInfo react={react} />
            </div>
          ))}
    </div>
  );
}
