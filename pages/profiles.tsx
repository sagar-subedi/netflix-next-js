import { getSession } from "next-auth/react";
import React from "react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();
  const {data:user} = useCurrentUser();
  return (
    <div className="text-white flex h-full w-full justify-center items-center">
      <div className="flex-col gap-2">
        <div className="text-center">Who's watching?</div>
        <div className="w-44 cursor-pointer" onClick={() => router.push('/')}>
          <img src="/images/default-blue.png" height={20} alt="profile" />
        </div>
        <div className="text-white">
            {user?.email}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
