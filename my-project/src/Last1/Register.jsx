import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AddUser = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("https://solar-website.onrender.com", data)
      .then(function (response) {
        // handle success
        console.log(response);
        navigate("/Login");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>

      <body
        style={{
          backgroundImage: `url('https://www.zunroof.com/blog/wp-content/uploads/2018/07/space-based-solar-system.jpg')`,
          height: `543.5px`,
          objectFit: `cover`,
        }}
      >
        <div className="lg:mt-[0px] p-7  lg:ml-[550px] md:ml-[200px] sm:ml-[30px] md:mt-[70px] sm:mt-[60px] mb-[50px] ">

          <div className="pl-6 pt-5 m-5 pr-5  sm:w-[330px] md:w-[380px] md:h-[410px] lg:w-[380px] lg:h-[auto] rounded-2xl border-black">

            <div className="font-bold text-[30px] mb-[40px] text-center">
              <h4 className="text-cyan-50">Register</h4>
            </div>
  
            <input
              type="name"
              className="border-black p-1 rounded placeholder:text-[19px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <br></br>
            <input
              type="email"
              className="border-black p-1 rounded placeholder:text-[19px] mt-[30px] lg:w-[330px] md:w-[330px] sm:w-[260px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
              value={email}
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br></br>
            <input
              type="password"
              className="border-black rou p-1 rounded lg:w-[330px] md:w-[330px] sm:w-[260px] placeholder:text-[19px] mt-[30px] border-[1px] outline-none border-l-transparent border-r-transparent border-t-transparent "
              value={password}
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>{" "}
            <br></br>
            <input
              type="submit"
              onClick={() => AddUser()}
              className="pt-1 text-cyan-50  bg-green-400  pb-1 pl-6 pr-6 lg:ml-[120px] md:ml-[120px] sm:ml-[90px] mt-[45px] border border-black rounded-md lg:mb-[0px] md:mb-[0px] sm:mb-[20px] hover:bg-green-400 duration-500 hover:border-green-400 hover:text-white  font-bold"
              value="Register"

            ></input>
            <br></br>
            <div className="text-center sm:mb-[20px] lg:mt-[30px] md:mt-[30px] sm:mt-[px] ">
              <Link to={"/login"}>
                <a href="" className=" hover:text-green-400 duration-500 hover:text-green text-cyan-50 text-decoration-none">
                  Already have account ?
                </a>
              </Link>
            </div>
          </div>

        </div>
      </body>
    </>
  );
};

export default Register;
