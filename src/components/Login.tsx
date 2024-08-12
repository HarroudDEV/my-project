import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";

const Login: FC<{}> = ({}) => {
  const [able, setAble] = useState(false);
  const [auth, setAuth] = useState(false);

  const fn = async (): Promise<Object> =>
    await new Promise((resolve) =>
      resolve({
        connected: true,
      })
    );

  const { data } = useQuery({
    queryKey: ["log"],
    queryFn: fn,
    // enabled: able,
  });
  return (
    <div>
      <button
        onClick={() => {
          setAble((prev) => !prev);
        }}
      >
        log in
      </button>
    </div>
  );
};

export default Login;
