import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const router = useRouter();
  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);


  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  

  return (
    <div className="relative h-full w-full bg-[url(/images/hero.jpg)] bg-fixed bg-no-repeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img alt="logo" src="/images/logo.png" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className=" bg-slate-400">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>

            <div>
              {variant === "register" && (
                <Input
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  label="Username"
                  id="username"
                  type="text"
                  value={name}
                />
              )}

              <Input
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                id="email"
                type="email"
                value={email}
              />

              <Input
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                id="password"
                type="password"
                value={password}
              />
            </div>
            {variant === "login" ? (
              <>
                <button onClick={login} className="bg-red-600 py-3 mb-2 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                  Login
                </button>
                <p className="bg-red-600">
                  First time using netflix
                  <span className=" cursor-pointer" onClick={toggleVariant}>
                    {" "}
                    Create account
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  onClick={register}
                  className="bg-red-600 py-3 mb-2 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                >
                  Register
                </button>
                <p className="bg-red-600">
                  {" "}
                  Already have an account?{" "}
                  <span className=" cursor-pointer" onClick={toggleVariant}>
                    {" "}
                    Login
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
