import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col" id="about">
      <div className="flex flex-row justify-center items-center">
      <img src='/Navbar_profile_image.png' height={200} width={200} className='rounded-full' />
        <div className="flex w-[50%] flex-col gap-4">
          <p className="text-3xl font-bold">Kranti Ragini Sahu</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, recusandae, quod dolores eligendi debitis praesentium nisi quae fugiat, velit beatae repudiandae quibusdam perferendis minima voluptatibus numquam. Minus numquam nulla necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi explicabo molestiae magnam quos architecto facilis expedita sit. Ex ducimus, maiores reiciendis rem quam voluptatum, odit adipisci, veniam quis eligendi nihil.</p>
        </div>
      </div>
    </main>
  );
} 
