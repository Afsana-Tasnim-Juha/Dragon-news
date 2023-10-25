
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

import bg from '../../../assets/bg.png'

const RightSideNav = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <div className="px-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>

                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <AiFillGithub></AiFillGithub>

                    Login with GitHub
                </button>
            </div>

            <div className="px-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <BsFacebook className="mr-3 "></BsFacebook>
                    <span>Facebook</span>
                </a>

                <a className="p-4 flex text-lg items-center border-x " href="">
                    <BsTwitter className="mr-3 "></BsTwitter>
                    <span>Twitter</span>
                </a>

                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3 "></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q zone */}

            <div className="px-4 mt-4 text-bold space-y-3 mb-6 bg-[#F3F3F3]">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>

            <div style={backgroundStyle} className="px-4 mt-4 text-bold space-y-3 mb-6  ">


                <div className="">
                    <h2 className="text-[#FFF] font-poppins font-extrabold text-3xl pt-8  text-center">Create an <br /> Amazing <br /> Newspaper</h2>
                    <p className="text-[#FFF] font-poppins pt-6 text-center">
                        Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.
                    </p>

                    <div className="pt-6 text-center pb-10">
                        <button className="btn bg-[#D72050] ">Learn More</button>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default RightSideNav;