export default function Button({text}) {
  return (
    <button className="bg-primary hover:bg-lime-500 hover:text-black text-white md:text-base text-sm md:py-5 py-3 md:px-10 px-8 md:rounded-xl rounded-lg mt-5">{text}</button>
  )
}
