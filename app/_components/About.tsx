import React from "react";

const About = () => {
  return (
    <div id="about" className="m-4">
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="bg-black-500 rounded-full">
        <img
          src="/Navbar_profile_image.png"
          height={200}
          width={200}
          className="rounded-full"
        />
        </div>
        <div className="flex w-[50%] flex-col gap-4">
          <p className="text-3xl font-bold">Kranti Ragini Sahu</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            recusandae, quod dolores eligendi debitis praesentium nisi quae
            fugiat, velit beatae repudiandae quibusdam perferendis minima
            voluptatibus numquam. Minus numquam nulla necessitatibus. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo
            molestiae magnam quos architecto facilis expedita sit. Ex ducimus,
            maiores reiciendis rem quam voluptatum, odit adipisci, veniam quis
            eligendi nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
