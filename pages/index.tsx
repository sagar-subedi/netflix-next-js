import {getSession} from "next-auth/react"
import {NextPageContext} from "next"
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavourites from "@/hooks/useFavourites";
import InfoModal from "@/components/InfoModal";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {

    }
  }
}

export default function Home() {
  const {data:movies} = useMovieList();
  
  const {data:farourites} = useFavourites();
  return (
   <>
   <InfoModal visible onClose={()=>{}}/>
   <Navbar/>
   <Billboard/>
   <MovieList data={movies} title='Trending'/>
   <MovieList data={farourites} title='MyList'/>
   </>
  ) 
}
