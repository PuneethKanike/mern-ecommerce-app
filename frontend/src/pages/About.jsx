import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
          <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px] " alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam sit, cumque animi, adipisci fugit sunt repellat quidem, nisi illum minus eius aspernatur exercitationem veniam blanditiis eaque ad atque in!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis iste. Vitae voluptate officia explicabo in at iste sint veritatis natus alias, nisi nihil, debitis ad fuga officiis aperiam molestias?</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam minima reiciendis sit tempora eveniet fugit ab illo ut suscipit rem nostrum fugiat repellat eos nulla, quam quaerat ipsum vel.</p>
        </div>
      </div>
      <div className="text-xl py-4 ">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores in, architecto nobis hic nisi, dolorem iure sequi perspiciatis doloribus labore sapiente consectetur veritatis libero. Soluta asperiores quia voluptate odit?</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convinience:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores in, architecto nobis hic nisi, dolorem iure sequi perspiciatis doloribus labore sapiente consectetur veritatis libero. Soluta asperiores quia voluptate odit?</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores in, architecto nobis hic nisi, dolorem iure sequi perspiciatis doloribus labore sapiente consectetur veritatis libero. Soluta asperiores quia voluptate odit?</p>
          </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
