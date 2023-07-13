import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import  prismadb  from '@/lib/prismadb';
import { getServerSession } from "next-auth";

const serverAuth =async (req:NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);

    if(!session?.user?.email){
        throw new Error('No user signed in');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });


    if(!currentUser) {
        throw new Error('Not signed in');
    }

    return {currentUser};

}

export default serverAuth;
