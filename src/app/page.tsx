import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  const something = true;

  return (
    <>
      {" "}
      <div
        className={cn(
          "text-red-500 font-bold",
          something === true && "text-green-500",
        )}
      >
        Hello world
      </div>
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        {/* variant = "outline",
        where variant is like a key, outline is a value of tailwind css properties */}
        <Button variant="outline">Click moi</Button>
      </div>
    </>
  );
};

export default Page;
